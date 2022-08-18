import { Injectable } from "@angular/core";
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import { Observable,throwError } from "rxjs";
import { catchError,tap } from "rxjs";
import { Router } from '@angular/router';
@Injectable({providedIn:'root'})
export class backendService{
 constructor(private http:HttpClient,private routed:Router){}
  postUserByID(userName:string,userPassword:string):Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/blog/login',{username:userName,password:userPassword}).pipe(
     catchError(this.handleError)
     )
    }
  signInUser(userName:string,userEmail:string,userPassword:string):Observable<any>{
    //console.log("enterd in signinservicepost");

    return this.http.post('http://localhost:3000/api/v1/blog/signin',{username:userName,email:userEmail,password:userPassword}).pipe(
      catchError(this.handleError)
      )
    }
      //  getUser():Observable<any>{
      //   return this.http.get('http://localhost:3000/api/v1/tasks').pipe(
      //     tap((data:any)=>console.log('User '+JSON.stringify(data)),
      //     catchError(this.handleError)
      //     )
      //   )
      //  }
      //  getUserByID():Observable<any>{
      //   return this.http.get('http://localhost:3000/api/v1/tasks/62fc1c3076a7b091bdc04325').pipe(
      //     tap((data:any)=>console.log('USER1'+JSON.stringify(data)),
      //     catchError(this.handleError))
      //   )
      //  }
  postBlogByID(bloguser:string,blogtitle:string,blogpost:string,blogimg:string|MediaImage):Observable<any>{
      return this.http.post('http://localhost:3000/api/v1/blog/create',{username:bloguser,title:blogtitle,blog:blogpost,img:blogimg}).pipe(
        catchError(this.handleError)
    )
   }
  showMyPost(bloguser:string):Observable<any>{
      return this.http.get(`http://localhost:3000/api/v1/blog/create/${bloguser}`).pipe(
      catchError(this.handleError)
    )
  }
  showAllPost():Observable<any>{
    return this.http.get('http://localhost:3000/api/v1/blog/allpost').pipe(
      catchError(this.handleError)
    )
  }

 private handleError(err:HttpErrorResponse):Observable<any>{
  let errMsg='';
  if(err.error instanceof Error){
    console.log('error occured',err.error.message);
    errMsg = err.error.message
  }else{
    console.log(`Backend returned error ${err.status}`);
    errMsg = err.error.message
  }
  return throwError(()=>errMsg)
 }
}
