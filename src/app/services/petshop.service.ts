import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnvService } from './env.service';
import { Petshop } from '../models/petshop';

@Injectable({
    providedIn: 'root'
})

export class PetshopService {

    constructor(
        private http: HttpClient,
        private env: EnvService,
    ) { }


    getPetshops() {
        return this.http.get<Petshop[]>(this.env.API_URL + 'petshops')
            .pipe(
                tap(petshops => {
                    return petshops;
                })
            );
    }
}
