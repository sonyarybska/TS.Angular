import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserPosts} from "./components/user-posts/user-posts";


const routes: Routes = [
  {path:'', component:UsersComponent,children:[
      {path: ':id', component: UserPosts}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
