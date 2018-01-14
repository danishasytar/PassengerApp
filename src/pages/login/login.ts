import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NavController, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  flights;
  flightnumber;

      constructor(public navCtrl: NavController, public api: ApiProvider, private alertCtrl: AlertController) {

          let data = {};
          this.api.getdata('/api/flight', data)
                .then(data => {
                  this.flights = data;
                  console.log(this.flights);
                }, err => {
                  console.log(err);
          });
      }


      login(){
        
      	var flag = false
        for(var i=0;i<this.flights.length;i++){
          if(this.flightnumber.toUpperCase() == this.flights[i].flight_code){
            console.log("found")
            window.localStorage.setItem('flight_number', this.flightnumber.toUpperCase());
            this.navCtrl.setRoot(HomePage);
            flag = true;
            break;
          }
      	}

        if(!flag) {
            let alert = this.alertCtrl.create({
              title: 'Flight Number Not Found',
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
    
  


