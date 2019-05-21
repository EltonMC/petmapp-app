import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrComponent } from './input-err/input-err.component';
import { SubmitErrComponent } from './submit-err/submit-err.component';

@NgModule({
  declarations: [
    InputErrComponent,
    SubmitErrComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputErrComponent,
    SubmitErrComponent
  ],
  entryComponents: [
    InputErrComponent,
    SubmitErrComponent
  ],
})
export class ComponentsModule { }
