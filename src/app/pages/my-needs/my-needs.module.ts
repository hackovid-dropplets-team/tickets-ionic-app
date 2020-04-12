import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyNeedsPageRoutingModule } from './my-needs-routing.module';

import { MyNeedsPage } from './my-needs.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNeedsPageRoutingModule,
    SharedModule,
  ],
  declarations: [MyNeedsPage]
})
export class MyNeedsPageModule {}
