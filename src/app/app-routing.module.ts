import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { MyblogComponent } from './myblog/myblog.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:SigninComponent},
  {path:'blog/:user',component:BlogComponent},
  {path:'blog/:user/createblog/:user',component:CreateBlogComponent},
  {path:'blog/:user/myblog/:user',component:MyblogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponent = [LoginComponent,SigninComponent,BlogComponent,CreateBlogComponent]
