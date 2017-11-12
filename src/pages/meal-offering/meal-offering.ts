import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MealDetailAndOrderPage } from '../meal-detail-and-order/meal-detail-and-order';

@Component({
  selector: 'page-meal-offering',
  templateUrl: 'meal-offering.html'
})
export class MealOfferingPage {

  constructor(public navCtrl: NavController) {
  }
  goToMealDetailAndOrder(params){
    if (!params) params = {};
    this.navCtrl.push(MealDetailAndOrderPage);
  }

  heroes = [
  {name: "Fresh Salad", type :"Vege"},
  {name: "Fresh Salad", type :"Vege"},
  {name: "Fresh Salad", type :"Vege"},
  {name: "Fresh Salad", type :"Vege"},
  {name: "Fresh Salad", type :"Vege"},
  {name: "Fresh Salad", type :"Vege"},
  {name: "Fresh Salad", type :"Vege"},
  {name: "Fresh Salad", type :"Vege"}
  ]
}
