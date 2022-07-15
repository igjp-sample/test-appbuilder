import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IgView3RoutingModule } from './ig-view3-routing.module';
import { IgView3Component } from './ig-view3.component';
import { IgView4Component } from './ig-view4/ig-view4.component';
import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IgView3Component,
    IgView4Component
  ],
  imports: [
    CommonModule,
    IgView3RoutingModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    FormsModule
  ]
})
export class IgView3Module {
}
