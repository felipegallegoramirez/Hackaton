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
=======
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
>>>>>>> dcebf1af483ddd5d8dedf362debbf34e22b05de5
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewPostComponent } from './view-post/view-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
=======
      LoginComponent,
      PerfilUserComponent,
>>>>>>> dcebf1af483ddd5d8dedf362debbf34e22b05de5
    LoginComponent,
    CreatePostComponent,
    ViewPostComponent,
    
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