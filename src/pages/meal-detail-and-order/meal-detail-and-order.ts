import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { OrdeMenuModal } from '../order-menu-modal/order-menu-modal';
import { ModalController } from 'ionic-angular';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'page-meal-detail-and-order',
  templateUrl: 'meal-detail-and-order.html'
})
export class MealDetailAndOrderPage {
 
	imageURL: string;
	param: string;	

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController, navParams: NavParams) {

 	let myParam = navParams.get('myParam');
 	this.param = navParams.get('myParam');
 	console.log(myParam.url)
 	this.imageURL= myParam.url;

  }

  

  openBasicModal() {
	let myModal = this.modalCtrl.create(OrdeMenuModal, { 'myParam': this.param });
	myModal.present();
  }
  
}
