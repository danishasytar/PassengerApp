import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the FlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flight',
  templateUrl: 'flight.html',

})
export class FlightPage {
  flightdata;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    var flightnumber = localStorage.getItem('flightnumber');
    if(flightnumber.toUpperCase() == "MH127" ){
      this.flightdata = this.flightdataall[1]
      
    }
    else if (flightnumber.toUpperCase()== "MH4") {
    this.flightdata = this.flightdataall[0]  
       }

  }
 
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightPage');
  }
  goHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

flightdataall = [
  {id: "MH4", from: "Kuala Lumpur", to: "London", departure: "11.30PM", gate: "G3"},
  {id: "MH127", from: "Kuala Lumpur", to: "Perth", departure: "7.25PM", gate: "G7" },
  ]

}
