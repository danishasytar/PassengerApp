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
    this.navCtrl.push(MealDetailAndOrderPage,  {'myParam': params});
  }

  heroes = [
  {id: 1, name: "Chiken Chop", type :"", url : "assets/img/meal/1.jpg"},
  {id: 2, name: "Steak", type :"", url : "assets/img/meal/2.jpg"},
  {id: 3, name: "Fried Rice", type :"", url : "assets/img/meal/3.jpg"},
  {id: 4, name: "Burger", type :"", url : "assets/img/meal/4.jpg"},
  {id: 5, name: "Pizza", type :"", url : "assets/img/meal/5.jpg"},
  {id: 6, name: "Fresh Salad", type :"", url : "assets/img/meal/6.jpg"}
  ]
}
