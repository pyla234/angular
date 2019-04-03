
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthenticationService} from './services/authentication.service';
import {AuthService} from './services/auth.service';
import {ProductService} from './services/product.service';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const Routes : Routes=[ 
   {path:"home",component:HomeComponent},
   {path:"signup",component:SignupComponent},
   {path:"signin",component:SigninComponent},
   {path:"product",component:SigninComponent},
   {path:"product/:product_id",component:ProductComponent},
   {path:"", redirectTo : '/home', pathMatch:'full'},
   {path:"**", redirectTo : '/home', pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ProductComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule,HttpClientModule,
    NgbModule.forRoot(),
  ],
  
  providers: [AuthenticationService,AuthGuard,AuthService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
