import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.page.html",
  styleUrls: ["./introduction.page.scss"]
})
export class IntroductionPage implements OnInit {
  @ViewChild("slides") slides: IonSlides;
  slideIndex: number = 0;
  slidesOpts = {};

  constructor() {}

  ngOnInit() {}

  checkIndex() {
    this.slides.getActiveIndex().then(res => {
      this.slideIndex = res;
    });
  }
  nextSlide() {
    this.slides.slideNext();
  }
}
