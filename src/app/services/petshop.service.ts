import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class PetshopService {

    constructor(
        private httpClient: HttpClient,
        private env: EnvService,
    ) { }


    getPetshops(type: string = null) {
        return this.httpClient.get<any>(this.env.API_URL + 'petshops?type=' + type).toPromise();
    }

    
}
