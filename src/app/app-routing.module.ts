import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginRequiredGuard } from './guards/login-required.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/needs/needs.module').then( m => m.NeedsPageModule)
  },
  {
    path: 'necessito',
    loadChildren: () => import('./pages/my-needs/my-needs.module').then( m => m.MyNeedsPageModule),
    canActivate: [LoginRequiredGuard]
  },
  {
    path: 'my-volunteering',
    loadChildren: () => import('./pages/my-volunteering/my-volunteering.module').then( m => m.MyVolunteeringPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    data: {
      noMenu: true
    }
  },
  {
    path: 'registre',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    data: {
      noMenu: true
    }
  },
  {
    path: 'ticket',
    loadChildren: () => import('./pages/ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'xats',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
