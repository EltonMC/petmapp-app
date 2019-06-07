import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.page.html',
  styleUrls: ['./reservation-list.page.scss'],
})
export class ReservationListPage implements OnInit {

  type: String = 'new';
  reservations: any;
  constructor(private reservationService: ReservationService) { }

  async ngOnInit() {
    const { data, ...meta } = await this.reservationService.get();
    this.reservations = data;
  }

}
