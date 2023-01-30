import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DeparturesComponent} from './departures/departures.component';
import {ArrivalsComponent} from './arrivals/arrivals.component';
import {DepartureListComponent} from './departures/departure-list/departure-list.component';
import {ArrivalListComponent} from './arrivals/arrival-list/arrival-list.component';
import {DepartingFlightComponent} from './departures/departure-list/departing-flight/departing-flight.component';
import {ArrivingFlightComponent} from './arrivals/arrival-list/arriving-flight/arriving-flight.component';
import {DepartureDetailComponent} from './departures/departure-detail/departure-detail.component';
import {ArrivalDetailComponent} from './arrivals/arrival-detail/arrival-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
    HeaderComponent, 
    DeparturesComponent,
    DepartureListComponent,
    DepartingFlightComponent,
    DepartureDetailComponent,
    ArrivalsComponent,
    ArrivalListComponent,
    ArrivingFlightComponent,
    ArrivalDetailComponent],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }
