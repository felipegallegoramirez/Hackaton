import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent {
    VisibleVar:number=1;
   
    constructor() { }
  
    ngOnInit(): void {
    }
    Hide(){

      let reason = document.getElementById("PerfilUser-totalinfo");
      reason?.classList.add("Visto")



    }


}
