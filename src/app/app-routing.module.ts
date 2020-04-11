import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'needs',
    pathMatch: 'full'
  },
  {
    path: 'needs',
    loadChildren: () => import('./pages/needs/needs.module').then( m => m.NeedsPageModule)
  },
  {
    path: 'my-needs',
    loadChildren: () => import('./pages/my-needs/my-needs.module').then( m => m.MyNeedsPageModule)
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
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    data: {
      noMenu: true
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
