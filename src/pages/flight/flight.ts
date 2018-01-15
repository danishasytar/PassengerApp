import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ApiProvider } from './../../providers/api/api';




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
  flightdata = {flight_code: ""};
  flightnumber;
  flights;
  constructor( public api:ApiProvider, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController ) {
    // var flightnumber = localStorage.getItem('flightnumber');
    // if(flightnumber.toUpperCase() == "MH127" ){
    //   this.flightdata = this.flightdataall[1]
      
    // }
    // else if (flightnumber.toUpperCase()== "MH4") {
    // this.flightdata = this.flightdataall[0]  
    //    }
            this.flightnumber = window.localStorage.getItem('flight_number');


           this.api.getdata('/api/flight',{} )
                .then(data => {
                  this.flights = data;
                  console.log(this.flights);

                      var flag = false
                      for(var i=0;i<this.flights.length;i++){
                        if(this.flightnumber.toUpperCase() == this.flights[i].flight_code){
                          console.log("found")
                          this.flightdata = this.flights[i];
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


                }, err => {
                  console.log(err);

          });



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
