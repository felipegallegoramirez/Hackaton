import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    Cards: Post[] = [];

    constructor(private postService:PostService, activatedRoute: ActivatedRoute){

    }

    ngOnInit():void{
      this.postService.getPosts().subscribe(( res ) => {
        this.Cards = res as Post[]
      })
    }
}
