import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService, private router : Router, ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    //   if (this.authservice.isAuthenticated()){
    //     return true;
    //   }
    //  else{
    //   this.router.navigate(['/signin']);
    //   return false;
    //  }
    // }

    if(this.authservice.isLoggednIn()){
      return true;
    }else{
      this.router.navigate(["signin"]);
      return false;
    }
  }
    
  }


