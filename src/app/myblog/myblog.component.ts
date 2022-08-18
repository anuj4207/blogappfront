import { Component, OnInit } from '@angular/core';
import { backendService } from 'src/services/connectbackend.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {
  user:any
  errMsg:any
  data:any
  success=false
  constructor(private backendservice:backendService,private activateRoute:ActivatedRoute) { }
  showPost =async (username:string) => {
    this.backendservice.showMyPost(this.user).subscribe(
      response=>{this.data=response.myPost;console.log(this.data);},
      error=>{this.errMsg = error;console.log(this.errMsg);this.success=false},
      ()=>{
        this.success = true
      }
    )
  }
  ngOnInit(): void {
    this.success=false
    this.activateRoute.paramMap.subscribe(params=>{
      this.user=params.get('user')
    })
    this.showPost(this.user)
  }

}
