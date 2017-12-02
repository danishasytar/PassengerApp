import { Component,  } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { MealDetailAndOrderPage } from '../meal-detail-and-order/meal-detail-and-order';
import { HomePage } from '../home/home';
import { BaseurlProvider } from './../../providers/baseurl/baseurl';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-meal-offering',
  templateUrl: 'meal-offering.html'
})
export class MealOfferingPage {

  mealtype;

  constructor(public navCtrl: NavController, public baseurl: BaseurlProvider, private http: HttpClient, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
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
      var url = this.baseurl.baseurl();
       this.http.get(url + '/api/type_meal',{} )
            .subscribe(data => {
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
