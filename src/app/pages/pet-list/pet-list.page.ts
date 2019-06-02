import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.page.html',
  styleUrls: ['./pet-list.page.scss'],
})
export class PetListPage implements OnInit {

  pets: Pet;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

  async getPets() {
    try{
      const { data, ...meta } = await this.petService.getPets();
      this.pets = data;
    } catch {
      console.log("Err");
    }
  }

}
