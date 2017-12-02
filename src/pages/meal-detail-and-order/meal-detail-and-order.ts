import { Component } from '@angular/core';
import { NavParams, NavController, LoadingController } from 'ionic-angular';
import { OrdeMenuModal } from '../order-menu-modal/order-menu-modal';
import { ModalController } from 'ionic-angular';
import { NgStyle } from '@angular/common';
import { AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,  public baseurl: BaseurlProvider, public modalCtrl: ModalController, navParams: NavParams, private alertCtrl: AlertController , private http: HttpClient, public loadingCtrl: LoadingController) {

 	let myParam = navParams.get('myParam');
 	console.log(myParam)
 	this.typeid= myParam.id;
   this.mealtype = myParam.name_type


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

  heroes = [
  {id: 1, name: "Chicken Chop", type :"", url : "assets/img/meal/1.jpg", status: true, detail: "chicken,salt,water,sos,vegatable"},
  {id: 2, name: "Steak", type :"", url : "assets/img/meal/2.jpg", status: false},
  {id: 3, name: "Fried Rice", type :"", url : "assets/img/meal/3.jpg", status: true},
  {id: 4, name: "Burger", type :"", url : "assets/img/meal/4.jpg", status: false},
  {id: 5, name: "Pizza", type :"", url : "assets/img/meal/5.jpg", status: true},
  {id: 6, name: "Fresh Salad", type :"", url : "assets/img/meal/6.jpg", status: false}
  ]
  
/*
  openBasicModal() {
	let myModal = this.modalCtrl.create(OrdeMenuModal, { 'myParam': this.param });
	myModal.present();

  }
*/
  openBasicModal(param) {
    console.log(param)
    if(param){
          let alert = this.alertCtrl.create({
    title: 'Our Staff Wiil Entertain You Soon',
    buttons: ['Ok']
  });
  alert.present();

    }

    else{
      let alert = this.alertCtrl.create({
    title: 'The Menu is not Current  Available',
    buttons: ['Ok']
  });
  alert.present();
      
    }

  }
  
  
}
