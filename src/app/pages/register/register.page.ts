import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailValidator } from "src/app/validators/email";
import { MustMatch } from "../../validators/password";
import { ViaCepService } from "src/app/services/viacep.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  @ViewChild("slides") slides: IonSlides;
  slideIndex: number = 0;
  slidesOpts = {
    allowTouchMove: false
  };

  public slideOneForm: FormGroup;
  public slideTwoForm: FormGroup;

  public submitAttempt: boolean = false;
  public errEmail: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private viacepService: ViaCepService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.slideOneForm = this.formBuilder.group({
      name: [
        null,
        Validators.compose([
          Validators.maxLength(255),
          Validators.pattern("[a-zA-Z ]*"),
          Validators.required
        ])
      ],
      email: [
        null,
        Validators.compose([Validators.email, Validators.required])
      ],
      phone: [null, Validators.required],
      gender: [null, Validators.required]
    });

    this.slideTwoForm = this.formBuilder.group(
      {
        cep: [null, Validators.required],
        // state: ['', Validators.required],
        // city: ['', Validators.required],
        // neighbor: ['', Validators.compose([Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        password: [
          null,
          Validators.compose([Validators.minLength(8), Validators.required])
        ],
        confirmPassword: [null, Validators.required]
      },
      {
        validator: MustMatch("password", "confirmPassword") // your validation method
      }
    );
  }

  checkIndex() {
    this.slides.getActiveIndex().then(res => {
      this.slideIndex = res;
    });
  }
  nextSlide() {
    this.slides.slideNext();
  }

  async save() {
    this.submitAttempt = true;

    if (!this.slideOneForm.valid) {
      this.slides.slideTo(0);
    } else if (!this.slideTwoForm.valid) {
      this.slides.slideTo(1);
    } else {
      let address = await this.viacepService.get(this.slideTwoForm.value.cep);
      let user = {
        ...this.slideOneForm.value,
        ...this.slideTwoForm.value,
        ...{ type: "client" },
        ...{
          phone: this.slideOneForm.value.phone.replace(
            /( )|(-)|(\()|(\))|/g,
            ""
          )
        },
        ...{
          address: {
            cep: address.cep,
            state: address.uf,
            city: address.localidade,
            district: address.bairro,
            street: address.logradouro,
            complement: address.complemento
          }
        }
      };
      this.authService.register(user).subscribe(
        () => {
          this.router.navigate(["/menu/home"]);
        },
        err => {
          if (err.error.email) {
            this.slides.slideTo(0);
            this.errEmail = true;
          }
        }
      );
    }
  }
}
