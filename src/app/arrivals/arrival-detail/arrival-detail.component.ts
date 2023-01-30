import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../shared/flight.model';
import { ArrivalService } from '../arrival.service';

@Component({
  selector: 'app-arrival-detail',
  templateUrl: './arrival-detail.component.html',
  providers: [ArrivalService]
})

export class ArrivalDetailComponent implements OnInit {
  @Input() flight: Flight;

  constructor(private arrivalService: ArrivalService) { }

  ngOnInit() {
  }

  onChangeStatus() {
    this.arrivalService.changeStatus(this.flight);
  }

}