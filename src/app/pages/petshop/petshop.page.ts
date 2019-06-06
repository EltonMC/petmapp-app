import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Petshop } from 'src/app/models/petshop';

@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.page.html',
  styleUrls: ['./petshop.page.scss'],
})
export class PetshopPage implements OnInit {
  type = 'services';
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  petshop: Petshop;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state.petshop) {
        this.petshop = this.router.getCurrentNavigation().extras.state.petshop;
      }
    });
  }

  ngOnInit() {
    console.log(this.petshop);

  }

}
