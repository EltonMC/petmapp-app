
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from  'src/app/validators/email';
import { MustMatch } from '../../validators/password';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  slideIndex: number = 0;
  slidesOpts = {
  }

  public slideOneForm: FormGroup;
  public slideTwoForm: FormGroup;

  public submitAttempt: boolean = false;
  
  constructor(public formBuilder: FormBuilder) {

      this.slideOneForm = formBuilder.group({
        name: ['', Validators.compose([Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        email: ['', Validators.compose([Validators.email, Validators.required]), EmailValidator.checkEmail],
        phone: ['', Validators.required],
        genre: ['', Validators.required]
      });

      this.slideTwoForm = formBuilder.group({
        state: ['', Validators.required],
        city: ['', Validators.required],
        neighbor: ['', Validators.compose([Validators.maxLength(255), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
        confirmPassword: ['', Validators.required]
      }, {
        validator: MustMatch('password', 'confirmPassword') // your validation method
      });
  }

  ngOnInit() {
    this.slides.getActiveIndex().then(res => {
      console.log(res);
    });
  }

  checkIndex() {
    this.slides.getActiveIndex().then(res => {
      this.slideIndex = res;
    });
  }
  nextSlide() {
    console.log('TESTE');
    this.slides.slideNext();
  }

  save(){
        this.submitAttempt = true;

        if(!this.slideOneForm.valid){
            this.slides.slideTo(0);
        } 
        else if(!this.slideTwoForm.valid){
            this.slides.slideTo(1);
        }
        else {
            console.log("success!")
            console.log(this.slideOneForm.value);
            console.log(this.slideTwoForm.value);
        }
  }

}
