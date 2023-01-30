import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Flight } from '../../../shared/flight.model';

@Component({
    selector: 'app-arriving-flight',
    templateUrl: './arriving-flight.component.html'
})
export class ArrivingFlightComponent implements OnInit {
  @Input() flight: Flight;
  @Output() flightSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.flightSelected.emit();
  }
}