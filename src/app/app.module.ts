import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routesComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { MyblogComponent } from './myblog/myblog.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    BlogComponent,
    CreateBlogComponent,
    MyblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
