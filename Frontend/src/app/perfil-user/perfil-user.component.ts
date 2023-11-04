import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit{

  Cards: Post[] = [];
  User: User = new User();

  constructor(private postService:PostService, 
    private userService:UserService,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      var idsession = params['_id'];

      this.userService.getPostsUnique(idsession).subscribe(( res ) => {this.Cards = res as Post[]})
      this.userService.getUser(idsession).subscribe(( res ) => {this.User = res as User})
    })
  }
}
