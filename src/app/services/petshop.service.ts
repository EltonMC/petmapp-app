import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';
import { Petshop } from '../models/petshop';


@Injectable({
    providedIn: 'root'
})

export class PetshopService {

    private petshop: Petshop;

    constructor(
        private httpClient: HttpClient,
        private env: EnvService,
    ) { }


    getAll(type: string = null) {
        return this.httpClient.get<any>(this.env.API_URL + 'petshops?type=' + type).toPromise();
    }

    set(petshop: Petshop){
        this.petshop = petshop;
    }
    
    get(){
        return this.petshop;
    }
}
