import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('PRUEBA TECNICA CVMATCHER - API')
    .setDescription('Nest + Sequelize + JWT  + Swagger')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentation', app, document);
}

/**
 * Reference: https://docs.nestjs.com/openapi/introduction
 */
