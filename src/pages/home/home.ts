import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { FormBuilder, Validators } from '@angular/forms';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { SuccessPage } from '../success/success';

import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public _form:FormBuilder,private http: Http,private storage: Storage) {
  	  }

  public onClick():void{
  	this.navCtrl.push(SignupPage);
  }

 callGetService(username: String,password: String){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

        let userObj:any = new Object();
        userObj.username = username;
        userObj.password = password;

        this.http.post('http://localhost:3000/users_api/check_user',userObj)
        .map(res=>res.json()).subscribe(data=>{
              console.log(data);
              this.storage.set('vwdata',data);
              console.log(this.storage.get('vwdata'));
          }, err=>{
            console.log("Error!:", err.json());
          })
        this.navCtrl.push(SuccessPage);
  }

}
