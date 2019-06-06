import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { Pet } from '../models/pet';

@Injectable({
    providedIn: 'root'
})

export class PetService {

    constructor(
        private httpClient: HttpClient,
        private env: EnvService,
    ) { }

    get() {
        return this.httpClient.get<any>(this.env.API_URL + 'pets').toPromise();
    }

    add(pet: Pet){
        return this.httpClient.post(this.env.API_URL + 'pets', pet);
    }
}
