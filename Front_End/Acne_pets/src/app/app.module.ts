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

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './index/nav/nav.component';


export const routes: Route[] = [
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
    PetsModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
