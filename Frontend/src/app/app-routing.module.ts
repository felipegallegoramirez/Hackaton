import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'createPost', component: CreatePostComponent},
    {path: 'post/:id', component: ViewPostComponent},
    {path: 'perfilUser', component: PerfilUserComponent},
=======
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'perfilUser', component: PerfilUserComponent},
    {path: 'createPost', component: CreatePostComponent},
    {path: 'post/:id', component: ViewPostComponent},
>>>>>>> dcebf1af483ddd5d8dedf362debbf34e22b05de5
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }