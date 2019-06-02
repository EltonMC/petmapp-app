import { PetshopService } from './../../services/petshop.service';
import { Component, OnInit } from '@angular/core';
import { Petshop } from '../../models/petshop';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  type: String = 'shower';
  petshops: Petshop;
  constructor(private petshopService: PetshopService) { }

  ngOnInit() {
    this.getPetshops();
  }

  async getPetshops() {
    try{
      const { data, ...meta } = await this.petshopService.getPetshops();
      this.petshops = data;
    } catch {
      console.log("Err");
    }

  }
}
