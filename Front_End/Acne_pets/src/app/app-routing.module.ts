import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* module login */
import { TemplateComponent } from './index/template/template.component';
import { LoginComponent } from './login/login.component';

/* pet  */
import { IndexComponent } from './pets/index/index.component';
import { PostComponent } from './pets/post/post.component';

/* guard */
import { AutenticarGuard } from './guards/autenticar.guard';


/* use the module LoginComponent to put login in outlet body */
const routes: Routes = [
  { path: 'index', component: TemplateComponent, outlet: 'body'},
  { path: 'login', component: LoginComponent , outlet: 'body'},
  
  { path: 'indexPets', component: IndexComponent, outlet: 'body',data: {id: 'True'}, canActivate: [AutenticarGuard]},
  { path: 'postPets', component: PostComponent, outlet: 'body'},
  { path: 'editPets', component: PostComponent, outlet: 'body' },


  
];

/*  */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
