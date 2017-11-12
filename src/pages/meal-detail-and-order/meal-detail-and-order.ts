import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-meal-detail-and-order',
  templateUrl: 'meal-detail-and-order.html'
})
export class MealDetailAndOrderPage {

  constructor(public navCtrl: NavController) {
  }


  openBasicModal() {
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }
  
}
