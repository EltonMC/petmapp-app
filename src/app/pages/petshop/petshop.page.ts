import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Petshop } from "src/app/models/petshop";
import { PetshopService } from "src/app/services/petshop.service";
import { TurnService } from 'src/app/services/turn.service';

@Component({
  selector: "app-petshop",
  templateUrl: "./petshop.page.html",
  styleUrls: ["./petshop.page.scss"]
})
export class PetshopPage implements OnInit {
  type = "services";
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  petshop: Petshop;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petshopService: PetshopService,
    private turnService: TurnService
  ) {}

  ngOnInit() {
    this.petshop = this.petshopService.get();
  }

  selectService(id: string){
    this.turnService.getAll(id).subscribe(() => {
      this.router.navigate(['/reservation'])
    })
  }
}
