import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'order-menu-modal.html'
})
export class OrdeMenuModal {
  myParam: string;
  name: string;
  imageURL : string;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.myParam = params.get('myParam');
    let param = params.get('myParam');
    this.name = param.name;
    this.imageURL = param.url
    console.log(this.myParam)
    console.log(this.name)
    console.log(this.imageURL)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
