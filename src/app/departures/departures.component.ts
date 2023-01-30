import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/flight.model';
import { DepartureService } from './departure.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  providers: [DepartureService]
})
export class DeparturesComponent implements OnInit {
  selectedFlight: Flight;

  constructor(private departureService: DepartureService) { }

  ngOnInit() {
  }

}