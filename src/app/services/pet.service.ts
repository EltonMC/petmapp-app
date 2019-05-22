import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnvService } from './env.service';
import { Pet } from '../models/pet';

@Injectable({
    providedIn: 'root'
})

export class PetService {

    constructor(
        private http: HttpClient,
        private env: EnvService,
    ) { }

    getPetshops() {
        return this.http.get<Pet[]>(this.env.API_URL + 'pet')
            .pipe(
                tap(petshops => {
                    return petshops;
                })
            );
    }
}
