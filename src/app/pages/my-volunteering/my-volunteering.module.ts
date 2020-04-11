import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyVolunteeringPageRoutingModule } from './my-volunteering-routing.module';

import { MyVolunteeringPage } from './my-volunteering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyVolunteeringPageRoutingModule
  ],
  declarations: [MyVolunteeringPage]
})
export class MyVolunteeringPageModule {}
