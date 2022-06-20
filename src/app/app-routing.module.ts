import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EagerComponentComponent } from './eager-component/eager-component.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'lazy-component',
    loadComponent: () => import('./lazy-component/lazy-component.component').then(c => c.LazyComponentComponent),
    canLoad: [AuthGuard]
  },
  {
    path: 'lazy-module',
    loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    component: EagerComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
