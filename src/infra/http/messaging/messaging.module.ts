import { Module } from '@nestjs/common';
import { KafkaConsummerService } from './kafka/kafka-consumer.service';
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsummerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
