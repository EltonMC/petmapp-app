import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitFail = false;
  loginForm: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.maxLength(255), Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]]
    });
  }
  // Dismiss Login Modal
  // dismissLogin() {
  //   this.modalController.dismiss();
  // }

  // On Register button tap, dismiss login modal and open register modal
  // async registerModal() {
  //   this.dismissLogin();
  //   const registerModal = await this.modalController.create({
  //     component: RegisterPage
  //   });
  //   return await registerModal.present();
  // }

  submitForm(form) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {

      },
      error => {
        if (error.status === 400) {
          this.submitFail = true;
        }
      },
      () => {
        this.router.navigate(['/menu/home']);
      }
    );
  }
}