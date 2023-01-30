import { Flight } from "../shared/flight.model";
import { EventEmitter } from "@angular/core";

export class ArrivalService {

  private flights: Flight[] = [
    new Flight(1, 'EK6589','11:20AM','Dallas','On time'),
    new Flight(2, 'DL2028','5:45PM','Toronto','On time'),
    new Flight(3, 'AA4437','9:25AM','San Francisco','Delayed')
  ];

  getFlights() {
    return this.flights.slice();
  }

  addFlight(flight: Flight) {
    this.flights.push(flight);
  }

  changeStatus(flight: Flight) {
    let pos = this.flights.map(function(flight) {
      return flight;
    }).indexOf(flight);
    if (this.flights[pos].status == "On time") {
      this.flights[pos].status = "Delayed";
    } else {
      this.flights[pos].status = "On time";
    }
  }

}
