import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { MealOfferingPage } from '../meal-offering/meal-offering';
import { OurFacilityPage } from '../our-facility/our-facility';
import { FlightPage } from '../flight/flight';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  constructor(public navCtrl: NavController, private menu: MenuController) {
    this.menu = menu; 
    this.menu.enable(false); 
  }



  goToMealOffering(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MealOfferingPage);
  } 

  goToOurFacility(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OurFacilityPage);
  }

    goFlight(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FlightPage);
  }
  
}
