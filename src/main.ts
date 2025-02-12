import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as colors from 'colors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { envs } from './core/config';
import { LoggerService } from './core/logger/logger.service';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });

  const HOST = envs.appHost;
  const PORT = envs.appPort;

  const expressApp = app.getHttpAdapter();

  expressApp.getInstance().set('trust proxy', 1);

  // BodyParser
  app.use(
    bodyParser.urlencoded({
      limit: '30mb',
      extended: true,
      parameterLimit: 50000,
    }),
  );

  // RateLimit
  app.use(
    rateLimit({
      windowMs: 1000 * 60 * 60,
      limit: 1000,
      keyGenerator: (req) => req.ip,
      message:
        '⚠️  Too many request created from this IP, please try again after an hour',
    }),
  );

  // Global prefix for all routes
  app.setGlobalPrefix('api/v1');

  // Handle all user input validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Setup Swagger
  setupSwagger(app);

  // Use helmet for security
  app.use(helmet());

  // Enable CORS
  app.enableCors();

  // Listen server
  await app.listen(PORT);

  // Colors
  colors.enable();

  envs.nodeEnv != 'production'
    ? Logger.log(
        'Boostrapt',
        `🚀 Server ready at http://${HOST}:${PORT.toString().cyan.bold}`,
      )
    : Logger.log(
        'Boostrapt',
        `🚀  Server is listening on port ${PORT.toString().cyan.bold}`,
      );
}
bootstrap();
