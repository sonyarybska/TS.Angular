import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentsDetailsComponent} from "./components/comments-details/comments-details.component";
import {CommentService} from "./services/comment.service";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentsDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  providers:[
    CommentService
  ]
})
export class CommentModule { }
