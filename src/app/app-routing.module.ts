import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view/home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'ig-view', loadChildren: () => import('./ig-view/ig-view.module').then(m => m.IgViewModule) },
  { path: 'ig-view3', loadChildren: () => import('./ig-view3/ig-view3.module').then(m => m.IgView3Module) },
  { path: 'ig-view5', loadChildren: () => import('./ig-view5/ig-view5.module').then(m => m.IgView5Module) },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.module').then(m => m.MasterViewModule) },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }
