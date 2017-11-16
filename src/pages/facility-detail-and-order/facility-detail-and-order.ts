import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { OrdeMenuModal } from '../order-menu-modal/order-menu-modal';
import { ModalController } from 'ionic-angular';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'page-facility-detail-and-order',
  templateUrl: 'facility-detail-and-order.html'
})
export class FacilityDetailAndOrderPage {

imageURL: string;
param: string;	
name: string;

constructor(public navCtrl: NavController,  public modalCtrl: ModalController, navParams: NavParams) {

	let myParam = navParams.get('myParam');
	this.param = navParams.get('myParam');
	console.log(myParam.url)
	this.imageURL= myParam.url;
	this.name = myParam.name

}



openBasicModal() {
let myModal = this.modalCtrl.create(OrdeMenuModal, { 'myParam': this.param });
myModal.present();
}
  
}
