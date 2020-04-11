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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
