import { Flight } from "../shared/flight.model";
import { EventEmitter } from "@angular/core";

export class DepartureService {

  private flights: Flight[] = [
    new Flight(1, 'UA2098','6:50AM','Washington DC','On time'),
    new Flight(2, 'AA1458','9:20PM','Seattle','Delayed'),
    new Flight(3, 'DL9865','2:30AM','Chicago','On time')
  ];

  getFlights() {
    return this.flights;
  }

  addFlight(flight: Flight) {
    this.flights.push(flight);
  }

  changeStatus(flight: Flight) {
    this.flights.forEach(function (part, index) {
      if (part.flightId === flight.flightId) {
        part.status = flight.status === 'On Time' ? 'Delayed' : 'On Time';
        flight.status = part.status;
        //
        // this[index].status = flight.status === 'On Time' ? 'Delayed' : 'On Time';
        // flight.status = this[index].status;
      }
    }, this.flights);
    console.log(this.flights);
  }
}
