import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeedsPageRoutingModule } from './needs-routing.module';

import { NeedsPage } from './needs.page';
import { TicketItemComponent } from 'src/app/components/ticket-item/ticket-item.component';
import { BasePageComponent } from '../base-page/base-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeedsPageRoutingModule
  ],
  declarations: [
    NeedsPage,
    TicketItemComponent,
    BasePageComponent
  ]
})
export class NeedsPageModule {}
