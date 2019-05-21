import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-err',
  templateUrl: './input-err.component.html',
  styleUrls: ['./input-err.component.scss'],
})
export class InputErrComponent implements OnInit {

  @Input() msgErr: string;
  @Input() input: any;

  constructor() { }

  ngOnInit() {}

}
