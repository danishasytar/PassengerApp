import { Component } from '@angular/core';
import { NavParams, NavController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BaseurlProvider } from './../../providers/baseurl/baseurl';



@Component({
  selector: 'page-meal-detail-and-order',
  templateUrl: 'meal-detail-and-order.html'
})
export class MealDetailAndOrderPage {

  typeid: string;
  meal;
  mealtype;

  constructor(public navCtrl: NavController,  public baseurl: BaseurlProvider, public modalCtrl: ModalController, navParams: NavParams,private http: HttpClient, public loadingCtrl: LoadingController) {

   	let myParam = navParams.get('myParam');
   	console.log(myParam)
   	this.typeid= myParam.id;
    this.mealtype = myParam.name_type

    this.getData();



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
    // let d = new Date();
    // console.log(d.getHours());
    var url = this.baseurl.baseurl();
     this.http.get(url + '/api/meal/type_id/' + this.typeid,{} )
          .subscribe(data => {
            this.meal = data;
            console.log(this.meal);
            loading.dismiss();
          }, err => {
            console.log(err);
            loading.dismiss();

    });
  }

}
