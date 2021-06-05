import { Component, OnInit } from '@angular/core';
import {Computers} from "../../moduls/Computers";

@Component({
  selector: 'app-users-computer',
  templateUrl: './users-computer.component.html',
  styleUrls: ['./users-computer.component.css']
})
export class UsersComputerComponent implements OnInit {
computers:Computers[]=[
  {model:'asus',display:18,memory:100},
  {model:'lenovo',display:22,memory:14},
  {model:'dall',display:25,memory:150},

]
  constructor() { }

  ngOnInit(): void {
  }

}
