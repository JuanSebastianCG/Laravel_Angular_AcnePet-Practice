import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* module */
import { TemplateComponent } from './index/template/template.component';


const routes: Routes = [
  { path: '', component: TemplateComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
