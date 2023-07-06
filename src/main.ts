import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // APIのURLを全て「v1/api」から始まるようにする
  app.setGlobalPrefix('v1/api');

  // CORS対応
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
