import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* http inport */
import { HttpClientModule } from '@angular/common/http';
/* Router */
import { RouterModule, Route } from '@angular/router';

/* modules */
import { LoginModule } from './login/login.module';
import { IndexModule } from './index/index.module';
import { PetsModule } from './pets/pets.module';
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { IndexComponent } from './pets/index/index.component';
import { PostComponent } from './pets/post/post.component';
import { EditComponent } from './pets/edit/edit.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './index/nav/nav.component';


export const routes: Route[] = [
  { path: '', component:IndexComponent , outlet: 'pets' },
  { path: '', component: TemplateComponent, outlet: 'body' },
  { path: '', component: NavComponent, outlet: 'nav' },
];


/* form */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './index/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EditComponent,
    LoginComponent,
    IndexComponent,
    TemplateComponent,
    NavComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginModule,
    IndexModule,
    RouterModule.forRoot(routes),
    PetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
