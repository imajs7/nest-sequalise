import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appConfig.PORT);
}
bootstrap();
