import { Component, OnInit } from '@angular/core';
import {Users} from "../../moduls/users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:Users[]=[
  {name:'Max',age:18,wife:true},
  {name:'Andrey',age:32,wife:false},
  {name:'Nazar',age:21,wife:true}
]
  constructor() { }

  ngOnInit(): void {

  }

}
