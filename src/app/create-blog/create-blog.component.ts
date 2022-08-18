import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';
import { backendService } from 'src/services/connectbackend.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  createBlogForm!:FormGroup
  user:any
  title:string
  blog:string
  img:string|MediaImage
  constructor(private activateRoute:ActivatedRoute,private routeBlog:Router,private formbuilder:FormBuilder,private backendservice:backendService) {
    this.title =""
    this.blog=""
    this.img=""

   }

  onSubmit(){
    this.title = this.createBlogForm.value.title
    this.blog = this.createBlogForm.value.blog
    this.img = this.createBlogForm.value.img
    this.validateBlogPost(this.user,this.title,this.blog,this.img)
    //console.log(this.title,this.blog);
    this.routeBlog.navigateByUrl(`blog/${this.user}`)

  }
  validateBlogPost =async (userName:string,title:string,blog:string,img:string|MediaImage) => {
    this.backendservice.postBlogByID(userName,title,blog,img).subscribe((data:any[])=>
    console.log(data)

    )
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      this.user = params.get('user')
    })
    this.createBlogForm = this.formbuilder.group({
      title:[''],
      blog:[''],
      img:['']
  })
  }

}
