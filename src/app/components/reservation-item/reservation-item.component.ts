import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.scss'],
})
export class ReservationItemComponent implements OnInit {

  @Input() reservation: any;

  constructor() { }

  ngOnInit() {}

}
