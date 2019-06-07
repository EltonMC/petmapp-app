import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { Pet } from '../models/pet';

@Injectable({
    providedIn: 'root'
})

export class ViaCepService {

    constructor(
        private httpClient: HttpClient,
        private env: EnvService,
    ) { }

    get(cep: string) {
        return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`).toPromise();
    }

}
