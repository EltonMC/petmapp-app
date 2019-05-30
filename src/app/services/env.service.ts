import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
//   API_URL = 'https://pet-mapp.herokuapp.com/';
    API_URL = 'http://localhost:8000/';
    constructor() { }
}