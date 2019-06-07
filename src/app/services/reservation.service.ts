import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { Pet } from '../models/pet';
import { Reservation } from '../models/reservation';

@Injectable({
    providedIn: 'root'
})

export class ReservationService {

    constructor(
        private httpClient: HttpClient,
        private env: EnvService,
    ) { }

    get() {
        return this.httpClient.get<any>(this.env.API_URL + 'reservations').toPromise();
    }

    add(reservation){
        return this.httpClient.post(this.env.API_URL + 'reservations', reservation);
    }

    update(id: string, status: string){
        return this.httpClient.put(this.env.API_URL + 'reservations/' + id, { status });

    }
}
