import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
fullUser:any;
  constructor(private http:UserService,private router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
      console.log(params.id);
      this.http.getUser(params.id).subscribe(value => this.fullUser=value)
    })
  }

  ngOnInit(): void {

  }

}
