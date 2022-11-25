import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './pets/post/post.component';
import { IndexComponent } from './pets/index/index.component';
import { EditComponent } from './pets/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
