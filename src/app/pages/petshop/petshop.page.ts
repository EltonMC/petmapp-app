import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.page.html',
  styleUrls: ['./petshop.page.scss'],
})
export class PetshopPage implements OnInit {
  type = 'services';
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }

}
