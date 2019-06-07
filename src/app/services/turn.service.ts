import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';
import { Turn } from '../models/turn';

@Injectable({
    providedIn: 'root'
})

export class TurnService {

    private turns: Turn;

    constructor(
        private httpClient: HttpClient,
        private env: EnvService,
    ) { }


    getAll(id: string) {
        return this.httpClient.get<any>(this.env.API_URL + 'turns/' + id).pipe(
            tap(res => {
                const { data } = res;
                this.set(data);
                return res;
            })
        );
    }

    get(){
        return this.turns;
    }
    
    set(turns: Turn){
        this.turns = turns;
    }
    

}
