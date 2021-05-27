import { Component, OnInit } from '@angular/core';
import {User} from "../../moduls/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:User[]=[]
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  this.UserService.getUser().subscribe(value => this.users=value)

  }

}
