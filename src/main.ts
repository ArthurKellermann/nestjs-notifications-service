import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { KafkaConsummerService } from '@infra/http/messaging/kafka/kafka-consumer.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const kafkaConsummerService = app.get(KafkaConsummerService);

  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsummerService,
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
