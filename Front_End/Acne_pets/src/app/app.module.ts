import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* http inport */
import { HttpClientModule } from '@angular/common/http';

/*routes */
import { RouterModule, Route } from '@angular/router';

/* modules */
import { LoginModule } from './login/login.module';
import { IndexModule } from './index/index.module';
import { PetsModule } from './pets/pets.module';

export const routes: Route[] = [
  { path: '', component: LoginModule, outlet: 'login' },
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './pets/post/post.component';
import { EditComponent } from './pets/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './index/template/template.component';

/* form */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EditComponent,
    LoginComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,

    RouterModule.forRoot(routes),
    LoginModule,
    IndexModule,
    PetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
