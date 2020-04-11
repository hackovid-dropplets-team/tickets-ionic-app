import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketPageRoutingModule } from './ticket-routing.module';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketPageRoutingModule
  ],
  declarations: [
    TicketViewComponent,
    TicketEditComponent,
    TicketAddComponent,
    TicketFormComponent,
  ]
})
export class TicketPageModule {}
