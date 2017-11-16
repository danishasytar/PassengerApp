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
    this.navCtrl.push(FacilityDetailAndOrderPage, {'myParam': params});
  }

  heroes = [
  {id: 1, name: "Business Center", type :"", url : "assets/img/facility/1.png", status:true},
  {id: 2, name: "Shower Room", type :"", url : "assets/img/facility/2.png", status:false},
  {id: 3, name: "Relaxation Room", type :"", url : "assets/img/facility/3.png", status:true},
  {id: 4, name: "Restroom", type :"", url : "assets/img/facility/4.png", status:true},
  {id: 5, name: "Cigar Room", type :"", url : "assets/img/facility/5.png", status:true},
  {id: 6, name: "Rest Area", type :"", url : "assets/img/facility/6.png", status:true},
  {id: 7, name: "Games Room", type :"", url : "assets/img/facility/7.png", status:true},
  {id: 8, name: "Slumber Room", type :"", url : "assets/img/facility/8.png", status:true},
  {id: 9, name: "Kids Room", type :"", url : "assets/img/facility/9.png", status:true},
  {id: 10, name: "Dining Area", type :"", url : "assets/img/facility/10.png", status:true},
  {id: 11, name: "Baby Room", type :"", url : "assets/img/facility/11.jpg"},
  {id: 12, name: "Smoking Room", type :"", url : "assets/img/facility/12.png", status:true},
  {id: 13, name: "Surau", type :"", url : "assets/img/facility/13.png", status:true}
  ]

}
