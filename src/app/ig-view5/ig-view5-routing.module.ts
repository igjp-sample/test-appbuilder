import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgView5Component } from './ig-view5.component';
import { IgView6Component } from './ig-view6/ig-view6.component';

const routes: Routes = [{ path: '', component: IgView5Component, children: [{ path: 'ig-view6', component: IgView6Component, data: { text: "\u5B50\u30D3\u30E5\u30FC 2" } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IgView5RoutingModule {
}
