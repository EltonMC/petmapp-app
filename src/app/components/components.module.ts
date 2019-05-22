import { PetshopItemComponent } from './petshop-item/petshop-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrComponent } from './input-err/input-err.component';
import { SubmitErrComponent } from './submit-err/submit-err.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    InputErrComponent,
    SubmitErrComponent,
    PetshopItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    InputErrComponent,
    SubmitErrComponent,
    PetshopItemComponent
  ],
  entryComponents: [
    InputErrComponent,
    SubmitErrComponent,
    PetshopItemComponent
  ],
})
export class ComponentsModule { }
