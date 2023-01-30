import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../shared/flight.model';
import { DepartureService } from '../departure.service';

@Component({
  selector: 'app-departure-detail',
  templateUrl: './departure-detail.component.html',
  providers: [DepartureService]
})

export class DepartureDetailComponent implements OnInit {
  @Input() flight: Flight;

  constructor(private departureService: DepartureService) { }

  ngOnInit() {
  }

  onChangeStatus() {
    this.departureService.changeStatus(this.flight);
  }

}