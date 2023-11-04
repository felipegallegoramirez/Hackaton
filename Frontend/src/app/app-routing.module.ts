import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PerfilUserprivateComponent } from './perfil-userprivate/perfil-userprivate.component';
=======
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { ChallengesComponent } from './challenges/challenges.component';


>>>>>>> d0fb3f975eeb84ca906a7489ec6de0075f3413b5
const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'createPost', component: CreatePostComponent},
    {path: 'post/:id', component: ViewPostComponent},
<<<<<<< HEAD
    {path: 'perfilUserprivate', component: PerfilUserprivateComponent}
=======
    {path: 'perfilUser', component: PerfilUserComponent},
>>>>>>> d0fb3f975eeb84ca906a7489ec6de0075f3413b5
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }