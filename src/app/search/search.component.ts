import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FlightModel } from '../../models/flight.model';
import { NgIf } from '@angular/common';
import { FlightService } from '../../services/flight.service';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';

@Component({
selector: 'app-search',
imports: [MatTableModule, NgIf, MatButtonModule,DatePipe],
templateUrl: './search.component.html',
styleUrl: './search.component.css'
})

export class SearchComponent {
displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'scheduledAt', 'actions'];
dataSource: FlightModel[] | null = null


public constructor() {
   FlightService.getFlights(0, 8)
     .then(rsp => this.dataSource = rsp.data.content)
 }
}
