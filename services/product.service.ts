import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  apiURL:string=environment.apiURL;
  GetProducts:string=this.apiURL+'products/';
  GetIndProduct:string=this.apiURL+'products/';
  // CartAPI: string = this.apiURL + 'add_to_cart/';
  // GetMyCartAPI: string = this.apiURL + 'get_my_cart/';
  // BookTheProductsAPI: string = this.apiURL + 'book_the_product/';

  constructor(private http:HttpClient) { }
  
  GetAllProducts():Observable<any>{
    return this.http.get<any>(this.GetProducts);
  }
  GetProduct(product_id):Observable<any>{
    return this.http.get<any>(this.GetIndProduct+product_id);
  }

    
}
