import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MealDetailAndOrderPage } from '../meal-detail-and-order/meal-detail-and-order';
import { MealOfferingAllPage } from '../meal-offering-all/meal-offering-all';

@Component({
  selector: 'page-meal-offering',
  templateUrl: 'meal-offering.html'
})
export class MealOfferingPage {

  availabletext : string;

  constructor(public navCtrl: NavController) {
    let d = new Date();
    console.log(d.getHours());

  }
  
  goToMealDetailAndOrder(params){
    this.navCtrl.push(MealDetailAndOrderPage,  {'myParam': params});
  }

  goToMealOfferingAll(params){
    if (!params) params = {};
    this.navCtrl.push(MealOfferingAllPage);
  }


  heroes = [
  {id: 1, name: "Chiken Chop", type :"", url : "assets/img/meal/1.jpg", status: true},
  {id: 2, name: "Steak", type :"", url : "assets/img/meal/2.jpg", status: false},
  {id: 3, name: "Fried Rice", type :"", url : "assets/img/meal/3.jpg", status: true},
  {id: 4, name: "Burger", type :"", url : "assets/img/meal/4.jpg", status: false},
  {id: 5, name: "Pizza", type :"", url : "assets/img/meal/5.jpg", status: true},
  {id: 6, name: "Fresh Salad", type :"", url : "assets/img/meal/6.jpg", status: false}
  ]
}
