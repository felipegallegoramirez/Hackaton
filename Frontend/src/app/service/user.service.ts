import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Sesion } from '../models/sesion';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/customer'; 

  constructor(private http: HttpClient) { }


  postAuth(data: any) {
    return this.http.post<Sesion>('http://localhost:3000/api/auth', data);
  }
 


  createUser(user: User){
    return this.http.post<boolean>(this.apiUrl, user);
  }

  getUser(id:string){
    return this.http.get<User>(this.apiUrl + `/${id}`);
  }

  putUser(User: User){
    return this.http.put(this.apiUrl + `/`, User);
  }

  getUsers(){
    return this.http.get<User[]>(this.apiUrl);
  }
}
