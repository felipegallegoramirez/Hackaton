import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/api/post'; 

  constructor(private http: HttpClient) { }



  createPost(post: Post){
    return this.http.post<any>(this.apiUrl, post);
  }

  getPost(id:string){
    return this.http.get<Post>(this.apiUrl + `/${id}`);
  }

  putPost(post: Post){
    return this.http.put(this.apiUrl + `/`, post);
  }

  getPosts(){
    return this.http.get<Post[]>(this.apiUrl);
  }
}
