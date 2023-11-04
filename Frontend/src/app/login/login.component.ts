import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService} from "../service/user.service"
import { User } from "../models/user";
import { Sesion } from "../models/sesion";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    // @ts-ignore: Object is possibly 'null'
    
    signUpButton.addEventListener('click', () => {
      // @ts-ignore: Object is possibly 'null'
      container.classList.add("right-panel-active");
    });
    // @ts-ignore: Object is possibly 'null'
    signInButton.addEventListener('click', () => {
      // @ts-ignore: Object is possibly 'null'
      container.classList.remove("right-panel-active");
    });

  }

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,]),
  });

  formRegistro = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });


//registro
  sendR(){
    console.log("buenas send")
      var new_user: User = new User()
      new_user.email = this.formRegistro.value.email || " "
      new_user.password= this.formRegistro.value.password || " "

      this.userService.createUser(new_user) .subscribe(res=>{
        if(res){
          let container = document.getElementById('container')
          container?.classList.remove("right-panel-active")
        }

      })

      //window.location.replace("http://localhost:4200/about");
    
    this.formRegistro.reset()
  }

//login

  sendL(){
    
    var user = new User();
    user.email = this.formLogin.value.email || " "
    user.password = this.formLogin.value.password || " "

    this.userService.postAuth(user).subscribe(res => {
      let sesion = res as Sesion
      if (sesion) {
        
        window.location.replace("http://localhost:4200/about");
        localStorage.setItem('user', JSON.stringify(sesion));
        //user = JSON.parse(localStorage.getItem('user'))
      
      }else{
        alert("no existe el correo digitado");
      }
    }) 
    this.formLogin.reset()
  }
/*
  obtenerUsers(){
    this.userService.getUsers()
    .subscribe(res => {
      this.userService.users = res as User[]
    })
  }
  */
}
