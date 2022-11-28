import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* modules */
import { IndexComponent } from './index/index.component';
import { PostComponent } from './post/post.component';

/* route module */
import { Route, RouterModule } from '@angular/router';



const routes: Route[] = [
  { path: '', component: IndexComponent, outlet: 'pets' },
  { path: 'post', component: PostComponent, outlet : 'pets' },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PetsModule { }
