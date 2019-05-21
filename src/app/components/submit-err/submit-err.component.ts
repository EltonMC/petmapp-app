import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'submit-err',
  templateUrl: './submit-err.component.html',
  styleUrls: ['./submit-err.component.scss'],
})
export class SubmitErrComponent implements OnInit {
  @Input() msgErr: string;
  @Input() showErr: any;

  constructor() { }

  ngOnInit() {}

}
