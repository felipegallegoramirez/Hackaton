import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
=======
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
>>>>>>> 71968df84ca882373205a2e0ecdcbaf679746d36

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
<<<<<<< HEAD
    {path: 'perfilUser', component: PerfilUserComponent}
=======
    {path: 'createPost', component: CreatePostComponent},
    {path: 'post/:id', component: ViewPostComponent},
>>>>>>> 71968df84ca882373205a2e0ecdcbaf679746d36
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }