import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any;

  constructor(private authservice:AuthService,private productService : ProductService, private logoutservice:AuthenticationService, private router :Router) { }

  ngOnInit() {
    this.productService.GetAllProducts().subscribe(success => {
      console.log('data', success);
      this.products = success;
    },
    Error=> {
      console.log('Error',Error);
     })
  }

  LogOut(){
    this.logoutservice.logout().subscribe(data =>{
      console.log('data',data);
      localStorage.removeItem('userToken');
      this.router.navigate(['/signin'])
    })   
}

indProduct(productid){
  this.router.navigate(["/product"]);
  console.log("productid");
}
 
}