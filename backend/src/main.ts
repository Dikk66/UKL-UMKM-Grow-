import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // CORS
  app.enableCors();

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('UMKM Grow API')
    .setDescription('Dokumentasi API UMKM Grow')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  console.log(
    'Swagger path count:',
    Object.keys(document.paths).length,
  );

  SwaggerModule.setup('api', app, document);

  console.log('SWAGGER SETUP SUCCESS');

  const port = process.env.PORT || 3000;

  await app.listen(port);

  console.log(
    `🚀 Backend UMKM Grow siap menerima request di port ${port}`,
  );

  console.log(
    `📚 Swagger Documentation: http://localhost:${port}/api`,
  );
}

void bootstrap();