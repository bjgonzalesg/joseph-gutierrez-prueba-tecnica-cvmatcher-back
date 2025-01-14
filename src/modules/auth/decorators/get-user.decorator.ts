import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Payload } from '../interfaces';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Payload => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as Payload;
    return user;
  },
);
