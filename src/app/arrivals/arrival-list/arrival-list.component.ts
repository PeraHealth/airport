import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Flight } from '../../shared/flight.model';
import { ArrivalService } from '../arrival.service';

@Component({
  selector: 'app-arrival-list',
  templateUrl: './arrival-list.component.html'
})
export class ArrivalListComponent implements OnInit {
  @ViewChild('flightNumberInput') flightNumberInputRef: ElementRef;
  @ViewChild('timeInput') timeInputRef: ElementRef;
  @ViewChild('locationInput') locationInputRef: ElementRef;
  @Output('flightSelected') flightWasSelected = new EventEmitter<Flight>();

  flights: Flight[];

  constructor(private arrivalService: ArrivalService) { }

  ngOnInit() {
    this.flights = this.arrivalService.getFlights();
  }

  onFlightSelected(flight: Flight) {
    this.flightWasSelected.emit(flight);
  }

  onAddFlight() {
    const flightNumber = this.flightNumberInputRef.nativeElement.value;
    const time = this.timeInputRef.nativeElement.value;
    const location = this.locationInputRef.nativeElement.value;
    const status = 'On time';
    const newFlight = new Flight(45, flightNumber, time, location, status);
    this.arrivalService.addFlight(newFlight);
  }
}
