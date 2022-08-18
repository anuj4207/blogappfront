import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { backendService } from 'src/services/connectbackend.service';
var dataA:[]|any
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  success=false
  errorMsg=""
  data:any
  user:any
  constructor(private activateRoute:ActivatedRoute,private backendservice:backendService) {
    //this.user=""
  }
  showPost= async(username:string)=> {
    this.backendservice.showAllPost().subscribe(
      response=>{this.data=response.allPost;console.log(this.data,this.data.length)},
      error=>{this.success=false;this.errorMsg=error;console.log(this.errorMsg)},
      ()=>{
        // for(var i =0;i<this.data.length;i++){
        //   console.log(this.data[i].username);

        //   //dataA[i] = this.data[i]
        // }
        // //console.log(dataA);

        this.success=true
      }
    )
    console.log("hello");

  }


  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      this.user = params.get('user')
    })
    this.showPost(this.user)
  }


}
