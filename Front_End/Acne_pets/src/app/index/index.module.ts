import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';

import { TemplateComponent } from './template/template.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    NavComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
