import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-posts.html',
  styleUrls: ['./user-posts.css']
})
export class UserPosts implements OnInit {
fullPost:any;
  constructor(private http:UserService,private router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
      console.log(params.id);
      this.http.getPost(params.id).subscribe(value => this.fullPost=value)
    })
  }

  ngOnInit(): void {

  }

}
