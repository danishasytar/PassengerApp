import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FacilityDetailAndOrderPage } from '../facility-detail-and-order/facility-detail-and-order';

@Component({
  selector: 'page-our-facility',
  templateUrl: 'our-facility.html'
})
export class OurFacilityPage {

  constructor(public navCtrl: NavController) {
  }
  goToFacilityDetailAndOrder(params){
    if (!params) params = {};
    this.navCtrl.push(FacilityDetailAndOrderPage);
  }
}
