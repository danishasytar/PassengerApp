import { Component,  } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MealDetailAndOrderPage } from '../meal-detail-and-order/meal-detail-and-order';
import { MealOfferingAllPage } from '../meal-offering-all/meal-offering-all';
import { HomePage } from '../home/home';
import { BaseurlProvider } from './../../providers/baseurl/baseurl';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-meal-offering',
  templateUrl: 'meal-offering.html'
})
export class MealOfferingPage {

  mealtype;

  constructor(public navCtrl: NavController, public baseurl: BaseurlProvider, private http: HttpClient, public loadingCtrl: LoadingController) {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

    loading.present();
    // let d = new Date();
    // console.log(d.getHours());
    var url = this.baseurl.baseurl();
     this.http.get(url + '/api/type_meal',{} )
          .subscribe(data => {
            this.mealtype = data;
            console.log(this.mealtype);
            loading.dismiss();
          }, err => {
            console.log(err);
            loading.dismiss();

    });

  }
  
  goToMealDetailAndOrder(params){
    this.navCtrl.push(MealDetailAndOrderPage,  {'myParam': params});
  }

  goToMealOfferingAll(params){
    if (!params) params = {};
    this.navCtrl.push(MealOfferingAllPage);
  }
   
  goHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
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
