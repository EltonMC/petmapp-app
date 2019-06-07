import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private user: User;
    
    constructor(
        private httpClient: HttpClient,
        private env: EnvService,
    ) {}

    private set(user: User) {
        this.user = user;
    }

    async get() {
        if(!this.user){
            const { data } = await this.load();
            return data;
        }   
        return this.user;
    }

    load(){
        return this.httpClient.get<any>(this.env.API_URL + 'users').toPromise();
    }

    update(user: User){
        return this.httpClient.put<any>(this.env.API_URL + 'users', user).pipe(
            tap(res => {
                this.set(res.data);
                return res;
            })
        );
    }

}
