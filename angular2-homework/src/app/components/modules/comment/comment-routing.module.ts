import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentsDetailsComponent} from "./components/comments-details/comments-details.component";

const routes: Routes = [
    {path: '', component: CommentsComponent},
    {path: ':id', component: CommentsDetailsComponent}
  ]


;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
