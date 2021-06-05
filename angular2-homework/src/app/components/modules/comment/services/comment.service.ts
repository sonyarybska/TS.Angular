import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comments} from "../models/comments";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) {

  }
  getComments():Observable<Comments[]>{
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments')
  }
  getComment(id:number):Observable<Comment>{
    return this.http.get<Comment>('https://jsonplaceholder.typicode.com/comments/'+id)
  }
}
