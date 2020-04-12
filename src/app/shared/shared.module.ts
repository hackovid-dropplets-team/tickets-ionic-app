import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketItemComponent } from './components/ticket-item/ticket-item.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TicketItemComponent
  ],
  exports: [
    TicketItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ]
})
export class SharedModule { }
