import { PetshopItemComponent } from './petshop-item/petshop-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrComponent } from './input-err/input-err.component';
import { SubmitErrComponent } from './submit-err/submit-err.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PetItemComponent } from './pet-item/pet-item.component';
import { ReservationItemComponent } from './reservation-item/reservation-item.component';

@NgModule({
  declarations: [
    InputErrComponent,
    SubmitErrComponent,
    PetshopItemComponent,
    PetItemComponent,
    ReservationItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    InputErrComponent,
    SubmitErrComponent,
    PetshopItemComponent,
    PetItemComponent,
    ReservationItemComponent
  ],
  entryComponents: [
    InputErrComponent,
    SubmitErrComponent,
    PetshopItemComponent,
    PetItemComponent,
    ReservationItemComponent
  ],
})
export class ComponentsModule { }
