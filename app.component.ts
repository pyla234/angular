import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authservice:AuthService,
           private logoutservice:AuthenticationService, private router :Router){}
  title = 'sampleproject';

  ngOnInit() {
  } 

}
