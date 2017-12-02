import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { FacilityDetailAndOrderPage } from '../facility-detail-and-order/facility-detail-and-order';
import { HomePage } from '../home/home';
import { BaseurlProvider } from './../../providers/baseurl/baseurl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-our-facility',
  templateUrl: 'our-facility.html'
})
export class OurFacilityPage {

  facility;

  constructor(public navCtrl: NavController, public baseurl: BaseurlProvider, private http: HttpClient, public loadingCtrl: LoadingController) {
    this.getData();


  }
  goToFacilityDetailAndOrder(params){
    this.navCtrl.push(FacilityDetailAndOrderPage, {'myParam': params});
  }
  goHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }


  doRefresh(refresher) {
    this.getData();
    refresher.complete();
  }

  getData() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    var url = this.baseurl.baseurl();
     this.http.get(url + '/api/facility',{} )
          .subscribe(data => {
            this.facility = data;
            console.log(this.facility);
            loading.dismiss();
          }, err => {
            console.log(err);
            loading.dismiss();

    });
  }
}
