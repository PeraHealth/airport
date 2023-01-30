import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/flight.model';
import { ArrivalService } from './arrival.service';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  providers: [ArrivalService]
})

export class ArrivalsComponent implements OnInit {
  selectedFlight: Flight;

  constructor() { }

  ngOnInit() {
  }

}