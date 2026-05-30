import * as dotenv from 'dotenv';
// Wajib di baris pertama sebelum import lainnya!
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Mengaktifkan global validation untuk DTO
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  
  // Mengaktifkan CORS agar bisa diakses oleh Frontend nantinya
  app.enableCors();

  await app.listen(3000);
  console.log('🚀 Backend UMKM Grow siap menerima request di: http://localhost:3000');
}
bootstrap();