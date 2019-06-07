import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';
import { Petshop } from '../models/petshop';
import { Turn } from '../models/turn';


@Injectable({
    providedIn: 'root'
})

export class TurnService {

    private turn: Turn;

    constructor(
        private httpClient: HttpClient,
        private env: EnvService,
    ) { }


    get(id: string) {
        return this.httpClient.get<any>(this.env.API_URL + 'turns/' + id).pipe(
            tap(data => {
                console.log(data);
            })
        );
    }

    set(turn: Turn){
        this.turn = turn;
    }
    

}
