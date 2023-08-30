import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsummerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['on-puma-6373-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'b24tcHVtYS02MzczJISqRdv8rvsf7mTEzgrtH-UdOK7OhHURK3ZonkbkgztActg',
          password: 'MWIyNzUxMzAtZjc1ZS00ZTJjLTk4MWYtMWQxMTIzNzU4OWZh',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
