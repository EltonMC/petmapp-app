import { PetshopService } from './../../services/petshop.service';
import { Component, OnInit } from '@angular/core';
import { Petshop } from '../../models/petshop';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  type: String = 'shower';
  shower: Petshop;
  cough: Petshop;

  constructor(
    private petshopService: PetshopService, 
    private router: Router) { 
    }

  ngOnInit() {
    this.getPetshops();
  }

  async getPetshops() {
    try{
      const { data, ...meta } = await this.petshopService.getPetshops('shower');
      this.shower = data;
    } catch {
      console.log("Err");
    }
    try{
      const { data, ...meta } = await this.petshopService.getPetshops('cough');
      this.cough = data;
    } catch {
      console.log("Err");
    }
  }

  toPetshop(petshop: Petshop){
    this.router.navigate(['/petshop'], { state: { petshop } });
  }

}
