import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
fullPost:any;
  constructor(private http:PostService,private router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
      this.http.getPost(params.id).subscribe(value => this.fullPost=value)
    })

  }

  ngOnInit(): void {

  }

}
