import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';

import { TemplateComponent } from './template/template.component';
import { NavComponent } from './nav/nav.component';



const routes: Route[] = [
  { path: '', component: TemplateComponent, outlet: 'body' },
  { path: '', component: NavComponent, outlet: 'nav' },

];



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ]
})
export class IndexModule { }
