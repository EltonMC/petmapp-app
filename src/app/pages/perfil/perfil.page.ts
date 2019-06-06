import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"]
})
export class PerfilPage implements OnInit {
  private user: User;
  perfilForm: any;
  constructor(
    private userSevice: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  async ngOnInit() {
    this.user = await this.userSevice.get();
    this.perfilForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required, Validators.maxLength(255)]],
      phone: [
        this.user.phone,
        [Validators.required, Validators.maxLength(255)]
      ],
      gender: [
        this.user.gender,
        [Validators.required, Validators.maxLength(255)]
      ]
      // state: [this.user.address.state, [Validators.required, Validators.maxLength(255)]],
      // city: [this.user.address.city, [Validators.required, Validators.maxLength(255)]],
      // street: [this.user.address.street, [Validators.required, Validators.maxLength(255)]],
      // confirmPassword: [null, [Validators.maxLength(255)]],
      // password: [null, [Validators.minLength(3), Validators.maxLength(255)]]
    });
  }

  async submit(data) {
    this.userSevice.update(data).subscribe(() => {
      this.router.navigate(["/menu/home"]);
    });
  }
}
