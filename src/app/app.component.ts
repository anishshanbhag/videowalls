import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuccessPage } from '../pages/success/success';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

declare var connection;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any=HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private http: Http,private storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
   //  let rootPage = this.rootPage;


   //  storage.get('vwdata').then(function function_name (data) {
   //  if ( data !== null || data !== undefined ){
   //  	var token = data.auth_token;
   //  	// console.log("joeydash"+data);
   //  	if( token!=null ){
   //  		// console.log("joeydash com");
   //  		let headers = new HttpHeaders();
   //  		// console.log("joeydash"+token);
   //     		headers = headers.set("auth_token", token);
			// http.post('http://localhost:3000/users_api/check_auth',{headers:headers})
	  //       .map(res=>res.json()).subscribe(data_1=>{
	  //             if(data_1.RESPONSE_CODE===108202){
	  //             		console.log("joeydash"+data_1);
	  //             		rootPage= SuccessPage;
	  //             }
	  //             else{
	  //             	console.log("joey"+JSON.stringify(data_1));
	  //             	rootPage = HomePage;
	  //             }
	  //         }, err=>{
	  //           console.log("Error!:", err.json());
	  //         })
   //  	} else {
   //  	rootPage = HomePage;
   //  	}
   //  } else {
   //  	rootPage = HomePage;
   //  }
   //  });

}

}
