import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  console.log('process.env.PORT',process.env.PORT);
  app.use('/voyager', voyagerMiddleware({ endpointUrl: 'api/voyager/dev2' }));
  await app.listen(process.env.PORT || 5003);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

