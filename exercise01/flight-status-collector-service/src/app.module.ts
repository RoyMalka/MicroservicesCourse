import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightStatusService } from './flight-status.service';
import {ConfigModule, ConfigService} from 'nestjs-config';
import { AmqpModule } from 'nestjs-amqp';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/*.ts')),
    AmqpModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('amqp'),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, FlightStatusService],
})
export class AppModule { }
