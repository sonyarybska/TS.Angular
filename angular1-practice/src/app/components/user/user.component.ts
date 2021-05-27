import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../moduls/User";
import {Post} from "../../moduls/Post";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  constructor() {
  }

  ngOnInit(): void {
  }

}
