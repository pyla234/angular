import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router : Router ) { }
 
  //  isAuthenticated(){
  //    let islogedIn : boolean = false;
  //    let token = localStorage.getItem('userToken')
  //   if( token != null && token != "" && token != typeof(undefined)){
  //     islogedIn = true;
  //    }
  //    return islogedIn;
  // }

   sendToken(token: string) {
    localStorage.setItem("userToken", token)
   }
  getToken() {
    return localStorage.getItem("userToken")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
 
  
  
 
}
