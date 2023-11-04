import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/api/'; 

  constructor(private http: HttpClient) { }



  createPost(post: Post){
    return this.http.post<boolean>(this.apiUrl, post);
  }

  getUser(id:string){
    return this.http.get<Post>(this.apiUrl + `/${id}`);
  }

  putUser(post: Post){
    return this.http.put(this.apiUrl + `/`, post);
  }

  getUsers(){
    return this.http.get<Post[]>(this.apiUrl);
  }
}