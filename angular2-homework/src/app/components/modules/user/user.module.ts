import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import {UserComponent} from "./components/user/user.component";
import {UserService} from "./services/user.service";
import {UserPosts} from "./components/user-posts/user-posts";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserPosts
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
