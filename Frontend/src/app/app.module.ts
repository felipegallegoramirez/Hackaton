import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
=======
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
>>>>>>> 71968df84ca882373205a2e0ecdcbaf679746d36


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
      LoginComponent,
      PerfilUserComponent,
=======
    LoginComponent,
    CreatePostComponent,
    ViewPostComponent,
>>>>>>> 71968df84ca882373205a2e0ecdcbaf679746d36
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }