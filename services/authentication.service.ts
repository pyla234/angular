import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 
  apiURL:string = environment.apiURL;
  signUpAPI:string= this.apiURL + 'users/'
  signinAPI:string= this.apiURL + 'login';
  LogOutAPI : string = this.apiURL + 'logout';

   constructor(private http:HttpClient) { }

   PostSignup(SignuUpData){
       return this.http.post(this.signUpAPI,SignuUpData); 
   }
   
   PostSignin(SignuinData){
    return this.http.post(this.signinAPI,SignuinData);
   }
  
   logout(){
    return this.http.get(this.LogOutAPI);
  }
 

}
