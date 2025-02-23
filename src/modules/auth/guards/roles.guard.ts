import {
  BEARER_KEY,
  ROLE_NOT_AUTHORIZED_MESSAGE,
  ROLES_KEY,
  USER_NOT_AUTHORIZED_MESSAGE,
} from 'src//core/constants';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Role } from '../enums/role.enum';
import { Payload } from '../interfaces';
import { User } from 'src//modules/users';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //* GET METADATA
    const requiredRole = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRole.length) return true;

    const req = context.switchToHttp().getRequest() as Request;
    const authHeader = req.headers.authorization;

    const [bearer, token] = authHeader.split(' ');

    if (bearer != BEARER_KEY || !token)
      throw new UnauthorizedException(USER_NOT_AUTHORIZED_MESSAGE);

    // *GET USER
    const user = req.user as User;

    // *CHECK ROLE
    const validRole = requiredRole.some((role) => user.role.name === role);

    if (!validRole)
      throw new UnauthorizedException(ROLE_NOT_AUTHORIZED_MESSAGE);

    return true;
  }
}
