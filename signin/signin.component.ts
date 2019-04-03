 import { Component, OnInit } from '@angular/core';
  import {AuthenticationService} from '../services/authentication.service';
 import {AuthService} from '../services/auth.service';
 import { Router } from '@angular/router';
 import {NgForm} from '@angular/forms';

 @Component({
   selector: 'app-signin',
   templateUrl: './signin.component.html',
   styleUrls: ['./signin.component.css']
 })
 export class SigninComponent implements OnInit {

   model :any = {}

   public email:string="";
   public password:string="";
   public loginSuccuess:any;

   constructor(private signinservice:AuthenticationService,
               private authService:AuthService, 
               private router :Router) { }

   ngOnInit() {
   }

   login(){
     let LoginData = {"email":this.email,"password":this.password}
     console.log('login data', LoginData);
     this.signinservice.PostSignin(LoginData).subscribe(data =>{
       console.log('data',data)
      this.loginSuccuess=data;
      localStorage.setItem('UserData', JSON.stringify(data));
      alert(this.loginSuccuess.message)
       //localStorage.setItem('userToken',this.loginSuccuess.token);
       this.authService.sendToken(this.loginSuccuess.token);
        this.router.navigate(["home"]);
         },
         Error=> {
           alert(Error.error.message);
           console.log('Error',Error);
      
        
        });
       // let isLoggedin = this.authService.isAuthenticated();
  }

 }

