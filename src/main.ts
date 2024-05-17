import { NestFactory } from '@nestjs/core';
import { TopicoModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(TopicoModule);
  await app.listen(3000);
}
bootstrap();
