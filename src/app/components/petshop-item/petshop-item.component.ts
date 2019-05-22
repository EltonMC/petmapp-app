import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'petshop-item',
  templateUrl: './petshop-item.component.html',
  styleUrls: ['./petshop-item.component.scss'],
})
export class PetshopItemComponent implements OnInit {

  @Input() petshop: any;

  constructor() { }

  ngOnInit() {}

}
