import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeedsPageRoutingModule } from './needs-routing.module';

import { NeedsPage } from './needs.page';
import { TicketItemComponent } from 'src/app/components/ticket-item/ticket-item.component';

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
  ]
})
export class NeedsPageModule {}
