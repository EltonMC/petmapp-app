import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
    providedIn: 'root'
})

export class PetService {

    constructor(
        private httpClient: HttpClient,
        private env: EnvService,
    ) { }

    getPets() {
        return this.httpClient.get<any>(this.env.API_URL + 'pets').toPromise();
    }

}
