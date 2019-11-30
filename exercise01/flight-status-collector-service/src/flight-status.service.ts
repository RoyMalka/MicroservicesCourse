import { Injectable } from '@nestjs/common';
import { FlightStatus } from './models/flightStatus';
import { InjectAmqpConnection } from 'nestjs-amqp';

@Injectable()
export class FlightStatusService {
    constructor(@InjectAmqpConnection() private readonly amqp) { }
    async publishFlightStatus(flightStatus: FlightStatus) {
        await this.amqp.createChannel((err, channel) => {
            if (err != null) {
                console.log(err, 'FlightStatusService');
            }
            channel.assertQueue('flight_status_queue');
            channel.sendToQueue('flight_status_queue', flightStatus);
        });
    }
}
