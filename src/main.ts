import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Fix cors in dev mode
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
