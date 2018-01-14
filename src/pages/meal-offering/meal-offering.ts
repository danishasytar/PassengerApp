import { Component,  } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { MealDetailAndOrderPage } from '../meal-detail-and-order/meal-detail-and-order';
import { HomePage } from '../home/home';
import { ApiProvider } from './../../providers/api/api';




@Component({
  selector: 'page-meal-offering',
  templateUrl: 'meal-offering.html'
})
export class MealOfferingPage {

  mealtype;

  constructor(public api: ApiProvider, public navCtrl: NavController, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.getData();
  }
  
  goToMealDetailAndOrder(params){
    this.navCtrl.push(MealDetailAndOrderPage,  {'myParam': params});
  }


   
  goHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  doRefresh(refresher) {
    this.getData();
    refresher.complete();
  }

  getData(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

      loading.present();
       this.api.getdata('/api/type_meal',{} )
            .then(data => {
              this.mealtype = data;
              console.log(this.mealtype);
              loading.dismiss();
                          
            }, err => {
              console.log(err);
              loading.dismiss();
              let alert = this.alertCtrl.create({
                title: 'Coonection problem, try again',
                buttons: ['Dismiss']
              });
              alert.present();

      });
  }

}
