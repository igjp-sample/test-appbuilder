import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IgView5RoutingModule } from './ig-view5-routing.module';
import { IgView5Component } from './ig-view5.component';
import { IgView6Component } from './ig-view6/ig-view6.component';

@NgModule({
  declarations: [
    IgView5Component,
    IgView6Component
  ],
  imports: [
    CommonModule,
    IgView5RoutingModule
  ]
})
export class IgView5Module {
}
