import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgView3Component } from './ig-view3.component';
import { IgView4Component } from './ig-view4/ig-view4.component';

const routes: Routes = [{ path: '', component: IgView3Component, children: [{ path: 'ig-view4', component: IgView4Component, data: { text: "\u5B50\u30D3\u30E5\u30FC 3" } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IgView3RoutingModule {
}
