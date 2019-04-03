import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    
  
   model :any = {}

 public first_name:string;
 public last_name:string;
 public mobile:string;
 public email:string;
 public  password:string;
 public registerData:any;

  constructor(private signupservice:AuthenticationService, private router :Router) { }


  ngOnInit() {

  }

onSubmit(form:NgForm){

  console.log(JSON.stringify(form.value))
  this.signupservice.PostSignup(JSON.parse(JSON.stringify(form.value))).subscribe(data =>{
this.registerData=data;
alert(this.registerData.success.message)
console.log('data',data)
 this.router.navigate(["signin"]);
  },
  Error=> {
    alert(Error.error.message);
    console.log('Error',Error);

  
  });
}


}
