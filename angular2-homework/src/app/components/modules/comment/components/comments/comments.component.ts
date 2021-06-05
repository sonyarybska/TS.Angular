import {Component, OnInit} from '@angular/core';
import {Comments} from "../../models/comments";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:Comments[];
  constructor(private http: CommentService) {
  }

  ngOnInit(): void {
    this.http.getComments().subscribe(value => this.comments = value)
  }

}
