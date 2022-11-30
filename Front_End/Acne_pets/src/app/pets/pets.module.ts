import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* modules */
import { IndexComponent } from './index/index.component';
import { PostComponent } from './post/post.component';


/* route module */
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: 'index', component: IndexComponent, outlet: 'body' },
  { path: 'post', component: PostComponent, outlet : 'body' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PetsModule { }
