import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-comments.html',
  styleUrls: ['./post-comments.css']
})
export class PostComments implements OnInit {
fullPost:any;
  constructor(private http:PostService,private router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
      this.http.getPost(params.id).subscribe(value => this.fullPost=value)
    })

  }

  ngOnInit(): void {

  }

}
