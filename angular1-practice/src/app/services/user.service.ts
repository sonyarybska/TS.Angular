import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../moduls/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url='https://jsonplaceholder.typicode.com/users';
  constructor(private HttpModul:HttpClient) {
  }
  getUser():Observable<User[]>{
    return this.HttpModul.get<User[]>(this.url)
  }
}
