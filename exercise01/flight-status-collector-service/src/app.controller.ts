import { Controller, Get, Post } from '@nestjs/common';
import { FlightStatusService } from './flight-status.service';
import { FlightStatus } from './models/flightStatus';

@Controller()
export class AppController {
  // constructor(private readonly flightStatusService: FlightStatusService) {}

  @Post("api/v1/flight-status")
  publishFlightStatus(flightStatus: FlightStatus) {
    // return this.flightStatusService.publishFlightStatus(flightStatus);
    
  }
}
