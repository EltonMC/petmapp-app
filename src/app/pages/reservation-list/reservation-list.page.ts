import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.page.html',
  styleUrls: ['./reservation-list.page.scss'],
})
export class ReservationListPage implements OnInit {

  type: String = 'new';
  reservationsUp: any;
  reservationsDown: any;

  constructor(private reservationService: ReservationService, public alertController: AlertController) { }

  async ngOnInit() {
    const { data, ...meta } = await this.reservationService.get();
    this.filterReservations(data);
  }

  filterReservations(reservations){
    this.reservationsDown = reservations.filter(res => {
      return res.status === 'canceled'
    });
    this.reservationsUp = reservations.filter(res => {
      return res.status !== 'canceled'
    })
  }

  async presentConfirmCancel(id: string) {
    const alert = await this.alertController.create({
      header: 'Deseja realmente cancelar?',
      message: 'Deseja realmente cancelar esta reserva? Esta ação não poderá ser revertida!',
      buttons: [
        {
          text: 'Não',
          role: 'no',
          cssClass: 'secondary',
          handler: (blah) => {
            return true;
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          role: 'yes',
          handler: () => {
            return true;
          }
        }
      ]
    });

    await alert.present();

    alert.onWillDismiss().then(res => {
      if(res.role === 'yes'){
        this.cancel(id);
      }
    }, err => {
      console.log('err');
    })
  }

  cancel(id: string){
    this.reservationService.update(id, 'canceled').subscribe(res => {
      console.log(res);
    });
  }

}
