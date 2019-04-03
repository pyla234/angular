import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductService } from '../services/product.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../services/authentication.service';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    
  productData : any;
IsData : boolean = false;
userdata : any;
PId : number;
productQuantity : number = 1;
user_id:any
  // Product_id : any;
 
  closeResult: string;

  public email:string="";
  public password:string="";
  public loginSuccuess:any;


  constructor(private productService : ProductService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private loginservice:AuthenticationService,
              private authservice:AuthService,
               private router :Router) {}

    ngOnInit() {
      // this.route.params.subscribe( params => {
      //   this.Product_id = parseInt(params.product_id);
      //   console.log(this.Product_id);
      // })
      this.route.params.subscribe(params => {
        console.log('params', parseInt(params.product_id));
        this.PId = parseInt(params.product_id);
        this.GetIndProd();
        });
      // this.productService.GetProduct(this.Product_id).subscribe(success=>{
      //     console.log('data',success);
      //   },Error=>{
      //     console.log('Error',Error);
      //   })
      this.userdata = JSON.parse(localStorage.getItem('UserData'));
console.log('this.userdata', this.userdata)
    }

    GetIndProd(){
      this.productService.GetProduct(this.PId).subscribe(success => {
      console.log('data', success.product_name);
      this.productData = success;
      this.IsData = true;
      },Error => {
      console.log('Error', Error);
      })
      }
      AddToCart(){
      let CartData = {
      "user_id":this.userdata.user[0].user_id,
      "product_id":this.PId,
      "product_quantity":this.productQuantity
      }
      console.log('CartData', CartData)
      }
      Increse(){
      this.productQuantity ++;
      console.log('this.productQuantity', this.productQuantity)
      }
      Decrese(){
      this.productQuantity --;
      console.log('this.productQuantity', this.productQuantity)
      if(this.productQuantity < 1){
      this.productQuantity = 1;
      }
      }
      




// model popup
    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
  
  // addlogin(){
  //    this.authservice.isLoggednIn()
  // }

  // login part

  addlogin(){
    let addLoginData = {"email":this.email,"password":this.password}
    console.log('login data', addLoginData);
    this.loginservice.PostSignin(addLoginData).subscribe(data =>{
      console.log('data',data)
     this.loginSuccuess=data;
     alert(this.loginSuccuess.message)
      //localStorage.setItem('userToken',this.loginSuccuess.token);
      this.authservice.sendToken(this.loginSuccuess.token);
       this.router.navigate(["/product/:product_id"]);
        },
        Error=> {
          alert(Error.error.message);
          console.log('Error',Error);
     
       
       });
       
      // let isLoggedin = this.authService.isAuthenticated();
 }


}
