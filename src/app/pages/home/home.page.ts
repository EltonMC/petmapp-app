import { PetshopService } from './../../services/petshop.service';
import { Component, OnInit } from '@angular/core';
import { Petshop } from 'src/app/models/petshop';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  type: String = 'shower';
  petshops: Petshop[];
  constructor(private petshopService: PetshopService) { }

  ngOnInit() {
    this.getPetshops();
  }

  getPetshops(): void {
    this.petshopService.getPetshops().
      subscribe(petshops => {
        console.log(petshops);
      });
  }
}
