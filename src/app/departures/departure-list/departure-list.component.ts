import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Flight } from '../../shared/flight.model';
import { DepartureService } from '../departure.service';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html'
})
export class DepartureListComponent implements OnInit {
  @ViewChild('flightNumberInput') flightNumberInputRef: ElementRef;
  @ViewChild('timeInput') timeInputRef: ElementRef;
  @ViewChild('locationInput') locationInputRef: ElementRef;
  @Output() flightWasSelected = new EventEmitter<Flight>();

  constructor(public departureService: DepartureService) { }

  ngOnInit() {
  }

  onFlightSelected(flight: Flight) {
    this.flightWasSelected.emit(flight);
    // flight.status = flight.status === 'On Time' ? 'Delayed' : 'On Time';
  }

  onAddFlight() {
    const flightNumber = this.flightNumberInputRef.nativeElement.value;
    const time = this.timeInputRef.nativeElement.value;
    const location = this.locationInputRef.nativeElement.value;
    const status = 'On time';
    const newFlight = new Flight(this.departureService.getFlights().length+1, flightNumber, time, location, status);
    this.departureService.addFlight(newFlight);
  }
}
