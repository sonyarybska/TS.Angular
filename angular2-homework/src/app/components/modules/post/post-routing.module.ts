import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostComments} from "./components/post-comments/post-comments";

const routes: Routes = [
  {path:'',component:PostsComponent,children:[
      {path:':id',component:PostComments}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
