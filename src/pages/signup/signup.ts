import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public _form:FormBuilder,private http: Http) {
      

  }

  public onSignUp():void{
    this.navCtrl.push(HomePage);
  }

  callGetService(username: String,password: String,Confirmpassword: String){

      if (password===Confirmpassword) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

        let userObj = new Object();
        userObj.username = username;
        userObj.password = password;
        this.http.post('http://localhost:3000/users_api/create_user',userObj,{headers:headers})
        .map(res=>res.json()).subscribe(data=>{
            console.log(data)
          }, err=>{
            console.log("Error!:", err.json());
          });

      }else{
        alert("Password doesn't match!");
      }
      

      }
        

  
}

