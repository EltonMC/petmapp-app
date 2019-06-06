import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Pet } from "src/app/models/pet";
import { PetService } from "src/app/services/pet.service";
import { formatDate } from "@angular/common";
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: "app-pet",
  templateUrl: "./pet.page.html",
  styleUrls: ["./pet.page.scss"]
})
export class PetPage implements OnInit {
  petForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.petForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(255)]],
      birthday: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      type: [null, [Validators.required]],
      breed: [null, [Validators.required]],
      temper: [null, [Validators.required]],
      castrated: [null, [Validators.required]],
      coat: [null, [Validators.required]],
      observation: [null]
    });
  }

  submit(pet: Pet) {
    pet.birthday = formatDate(pet.birthday, "yyyy-MM-dd", "en-US");
    this.petService.add(pet).subscribe(() => {
      // this.location.back();
      this.router.navigate(["/menu/home"]);

    });
  }

  
}
