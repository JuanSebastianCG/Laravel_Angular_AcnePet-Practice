import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* http inport */
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
