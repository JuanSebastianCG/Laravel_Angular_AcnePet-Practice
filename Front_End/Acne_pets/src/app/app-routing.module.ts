import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* module login */
import { LoginModule } from './login/login.module';

import { TemplateComponent } from './index/template/template.component';
import { LoginComponent } from './login/login.component';


/* use the module LoginComponent to put login in outlet body */
const routes: Routes = [
  { path: 'login', component: LoginComponent , outlet: 'body' },
  { path: 'index', component: TemplateComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
