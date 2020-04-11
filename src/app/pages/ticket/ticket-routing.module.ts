import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';


const routes: Routes = [
  {
    path: ':id',
    component: TicketViewComponent,
    data: {
      noMenu: true
    }
  },
  {
    path: ':id/edit',
    component: TicketEditComponent,
    data: {
      noMenu: true
    }
  },
  {
    path: 'add',
    component: TicketAddComponent,
    data: {
      noMenu: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketPageRoutingModule {}
