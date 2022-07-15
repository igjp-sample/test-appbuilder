import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgViewComponent } from './ig-view.component';
import { IgView1Component } from './ig-view1/ig-view1.component';
import { IgView2Component } from './ig-view2/ig-view2.component';

const routes: Routes = [{ path: '', component: IgViewComponent, children: [{ path: 'ig-view1', component: IgView1Component, data: { text: "\u5B50\u30D3\u30E5\u30FC" } }, { path: 'ig-view2', component: IgView2Component, data: { text: "\u5B50\u30D3\u30E5\u30FC 1" } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IgViewRoutingModule {
}
