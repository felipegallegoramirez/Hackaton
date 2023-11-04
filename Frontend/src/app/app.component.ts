import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hackaton';
  name:string = "";
  idUser:string = "";

  ngOnInit(): void {
    this.CheckUser()
    }

  CheckUser(){
    let x = localStorage.getItem("user");

    if(x!=null){
      let User = JSON.parse(x);
      this.idUser = User.id;
      if(User){
        this.name = User.name;
        let element = document.getElementById("User");
        element!.style.display = "flex";
        let elementCrearP = document.getElementById("crearP");
        elementCrearP!.style.display = "flex";
        let elementLogin = document.getElementById("Log-in");
        elementLogin!.style.display="none";
      }
    }
  }
  CloseSession(){
    localStorage.removeItem("user");
    window.location.replace("http://localhost:4200/home");
  }
}
