import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NavController, MenuController, LoadingController, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   flightnumber = "";
   
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

 //loginPage(){
    // Your app login API web service call triggers 
   // this.navCtrl.setRoot(HomePage, {}, {animate: false});
  //}
  login(){
  	
  	if(this.flightnumber.toUpperCase() == "MH127" ){
  		this.navCtrl.setRoot(HomePage);
  		window.localStorage.setItem('flightnumber', this.flightnumber);
  	}
  	else if (this.flightnumber.toUpperCase()== "MH4") {
  	    this.navCtrl.setRoot(HomePage);
  	    console.log(this.flightnumber) 
  	     		window.localStorage.setItem('flightnumber', this.flightnumber);	
  	}
  	else{
  		let alert = this.alertCtrl.create({
    title: 'Wrong Flight Number  ',
    subTitle: 'Please Try Again',
    buttons: ['Dismiss']
  });
  alert.present();
  	}
  	 
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);

  }
  	}
  


