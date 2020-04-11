import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { LoginRequiredGuard } from 'src/app/guards/login-required.guard';


const routes: Routes = [
  {
    path: 'add',
    component: TicketAddComponent,
    canActivate: [LoginRequiredGuard],
    data: {
      noMenu: true
    }
  },
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
    canActivate: [LoginRequiredGuard],
    data: {
      noMenu: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketPageRoutingModule {}
