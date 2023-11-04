import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PerfilUserprivateComponent } from './perfil-userprivate/perfil-userprivate.component';
const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'createPost', component: CreatePostComponent},
    {path: 'post/:id', component: ViewPostComponent},
    {path: 'perfilUser/:id', component: PerfilUserComponent},
    {path: 'perfilUserprivate', component: PerfilUserprivateComponent},
    {path: 'perfilUser', component: PerfilUserComponent},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }