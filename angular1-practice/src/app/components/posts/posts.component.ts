import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../moduls/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Post[];
@Input()
  id:number;
  constructor(private ServerClient:PostService) { }

  ngOnInit(): void {
this.ServerClient.getPosts(this.id).subscribe(value => this.posts=value)
  }
}
