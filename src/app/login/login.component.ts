import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';
import { backendService } from 'src/services/connectbackend.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any
  errorMsg=""
  success=false
  registerForm!:FormGroup
  user
  password

  constructor(private routeBlog:Router,private formbuilder:FormBuilder,private backendservice:backendService) {
    this.user=""
    this.password=""
  }

  onSubmit(){
    this.user = this.registerForm.value.username
    this.password = this.registerForm.value.password
    console.log("logged",this.user,this.password);
    this.loginValidation(this.user,this.password)
    //if(this.failed===false){
      //this.routeBlog.navigateByUrl('blog')
    //}
  }

   loginValidation = async (userName:string,userPassword:string) => {
    //   this.backendservice.getUserByID().subscribe((data: any[])=>{
    //   console.log(data);
    //   this.data = data;
    // })
    this.backendservice.postUserByID(userName,userPassword).subscribe(
      response => {this.data =response},
      error =>{this.errorMsg = error;this.success=true},
      ()=>{
        this.routeBlog.navigateByUrl(`blog/${this.user}`)

      }
    )
  }

  ngOnInit(): void {
    this.success = false
    this.registerForm = this.formbuilder.group({
      username:[''],
      password:['']
    })
  }

}
