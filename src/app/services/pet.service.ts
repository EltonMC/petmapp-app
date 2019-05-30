import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
    providedIn: 'root'
})

export class PetService {

    constructor(
        private http: HttpClient,
        private env: EnvService,
    ) { }
}
