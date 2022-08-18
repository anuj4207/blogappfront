import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';
import { backendService } from 'src/services/connectbackend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  success=false
  data:any
  errorMsg=""
  user
  email
  password
  registerForm!:FormGroup

  constructor(private router:Router,private formBuilder:FormBuilder,private backendservice:backendService) {
    this.user=""
    this.email=""
    this.password=""
   }
  onSubmit(){
    this.user = this.registerForm.value.username
    this.email = this.registerForm.value.email
    this.password = this.registerForm.value.password
    console.log("registerd",this.user,this.email,this.password);
    this.registerValidation(this.user,this.email,this.password)
    //this.router.navigateByUrl('')
  }
  registerValidation = async(userName:string,emailId:string,userPassword:string)=>{
    this.backendservice.signInUser(userName,emailId,userPassword).subscribe(
      response=>{this.data=response;console.log("Succesfully registered",this.data);
      },
      error=>{this.errorMsg =error;console.log("Error register",this.errorMsg);this.success=true},
      ()=>{
        this.router.navigateByUrl('')
      }
    )
  }
  ngOnInit(): void {
    this.success = false
    this.registerForm = this.formBuilder.group({
      username:[''],
      email:[''],
      password:['']
    })
  }

}
