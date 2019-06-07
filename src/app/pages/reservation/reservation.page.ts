import { Component, OnInit } from "@angular/core";
import { PetshopService } from "src/app/services/petshop.service";
import { TurnService } from "src/app/services/turn.service";
import { PetService } from "src/app/services/pet.service";
import { Petshop } from "src/app/models/petshop";
import { Pet } from "src/app/models/pet";
import { formatDate } from '@angular/common';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.page.html",
  styleUrls: ["./reservation.page.scss"]
})
export class ReservationPage implements OnInit {
  private petshop: Petshop;
  private turns;
  private pets: Pet;
  private days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  dateSelected: Date;
  turnFiltered: any;
  turnSelected: Number;
  petSelected: Number;

  constructor(
    private petshopService: PetshopService,
    private turnService: TurnService,
    private petService: PetService,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.petshop = this.petshopService.get();
    this.turns = this.turnService.get();
    const { data, ...meta } = await this.petService.get();
    this.pets = data;
  }

  dateChanged() {
    const date = new Date(this.dateSelected);
    this.turnFiltered = this.turns.filter(turn => {
      return turn.day === this.days[date.getDay()];
    });
  }

  submit() {
    if (this.petSelected && this.turnSelected && this.dateSelected) {
      const data = {
        pet_id: this.petSelected,
        turn_id: this.turnSelected,
        reservation_day: formatDate(this.dateSelected, "yyyy-MM-dd", "en-US")
      };
      this.reservationService.add(data).subscribe(res => {
        this.router.navigate(['/menu/home']);
      })
    }

  }
}
