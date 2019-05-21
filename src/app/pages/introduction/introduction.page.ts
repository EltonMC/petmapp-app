
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})

export class IntroductionPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  slideIndex: number = 0;
  slidesOpts = {
  }    

  constructor() { }

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
}
