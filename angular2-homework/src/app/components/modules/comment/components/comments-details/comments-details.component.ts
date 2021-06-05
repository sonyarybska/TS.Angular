import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {
fullComment:any;
  constructor(private http:CommentService, private router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
      this.http.getComment(params.id).subscribe(value =>this.fullComment=value)
    })
  }

  ngOnInit(): void {

  }

}
