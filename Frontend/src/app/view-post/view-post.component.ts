import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute, public postService:PostService) { }
  data:Post= new Post
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
      var idsession= params['id'];
      this.postService.getPost(idsession).subscribe((res)=>{
        this.datos(res);
        this.data = res as Post
      })
      
    });
  }
  
  public datos (data:Post) :void{
    console.log(data)
    let x = <HTMLElement>document.getElementById("titulo")
      x.innerHTML=data.title
    for (var i=0;i<data.data.length;i++){
      if (data.data[i].ty=="2"){
        this.imagen(data.data[i].data)
      }
      else if (data.data[i].ty=="1"){
        this.texto(data.data[i].data)
      } 
    }
  }

  public imagen(a:string):void{
    let y = document.createElement("img")
    y.src="http://localhost:3000/public/"+a
    y.style.cssText="width: 600px;border-radius: 20px;box-shadow: 20px 10px 30px #000000a0;margin: 20px 0px;"
    document.getElementById("centro")?.appendChild(y)
  }
  public texto(a:string):void{
    let y = document.createElement("p")
    y.innerHTML=a
    let z= document.createElement("div")
    z.style.cssText="margin: 20px 0px;border-radius: 20px;text-align: initial;padding: 10px;box-sizing: border-box;box-shadow: 20px 10px 30px #000000a0;"
    z.appendChild(y)
    document.getElementById("centro")?.appendChild(z)
  }

  public comentario(){
    let da =JSON.parse(localStorage.getItem("user")||"")
    let x = <HTMLInputElement>document.getElementById("comentar");
    if(!this.data.comentario){
      this.data.comentario=[{
          text:x.value||"",
          date: "aa",
          user_id: da.id,
          user_name: da.name,

      }]
    }else{
      this.data.comentario.push({
        text:x.value||"",
        date: "",
        user_id: da.id,
        user_name: da.name,
    })
    }
    this.postService.putPost(this.data,this.data._id).subscribe(res=>{

    })
  }

  

}