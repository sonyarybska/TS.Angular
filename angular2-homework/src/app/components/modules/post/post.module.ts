import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostsComponent} from './components/posts/posts.component'
import {PostComponent} from "./components/post/post.component";
import {PostService} from "./services/post.service";
import {PostComments} from "./components/post-comments/post-comments";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostComments
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
  ],
  providers:[
    PostService
  ]
})
export class PostModule { }
