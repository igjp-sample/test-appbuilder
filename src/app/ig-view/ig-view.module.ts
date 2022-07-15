import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IgViewRoutingModule } from './ig-view-routing.module';
import { IgViewComponent } from './ig-view.component';
import { IgView1Component } from './ig-view1/ig-view1.component';
import { IgView2Component } from './ig-view2/ig-view2.component';
import { IgxSelectModule, IgxInputGroupModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxGridModule } from 'igniteui-angular';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IgViewComponent,
    IgView1Component,
    IgView2Component
  ],
  imports: [
    CommonModule,
    IgViewRoutingModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxCategoryChartModule,
    IgxPieChartModule,
    IgxGridModule,
    FormsModule
  ]
})
export class IgViewModule {
}
