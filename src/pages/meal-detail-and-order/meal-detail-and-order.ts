import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { OrdeMenuModal } from '../order-menu-modal/order-menu-modal';
import { ModalController } from 'ionic-angular';
import { NgStyle } from '@angular/common';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-meal-detail-and-order',
  templateUrl: 'meal-detail-and-order.html'
})
export class MealDetailAndOrderPage {

 available: boolean;
	imageURL: string;
	param: string;	
  name: string;

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController, navParams: NavParams, private alertCtrl: AlertController) {

 	let myParam = navParams.get('myParam');
 	this.param = navParams.get('myParam');
 	console.log(myParam.url)
 	this.imageURL= myParam.url;
   this.available = myParam.status;
   this.name = myParam.name;


  }

  
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
