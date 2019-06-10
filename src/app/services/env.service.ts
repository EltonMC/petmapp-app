import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://ec2-54-207-53-15.sa-east-1.compute.amazonaws.com/api/public/';
    // API_URL = 'http://localhost:8000/';
    constructor() { }
}