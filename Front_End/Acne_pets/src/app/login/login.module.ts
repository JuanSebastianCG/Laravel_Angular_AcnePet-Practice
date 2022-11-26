import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  { path: 'login', component: LoginComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ]
})
export class LoginModule { }
