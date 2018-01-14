import { Component } from '@angular/core';
import { NavController, LoadingController , AlertController} from 'ionic-angular';
import { FacilityDetailAndOrderPage } from '../facility-detail-and-order/facility-detail-and-order';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from './../../providers/api/api';


@Component({
  selector: 'page-our-facility',
  templateUrl: 'our-facility.html'
})
export class OurFacilityPage {

  facility;

  constructor(public api:ApiProvider, public navCtrl: NavController, private http: HttpClient, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
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
     this.api.getdata('/api/facility_type',{} )
          .then(data => {
            this.facility = data;
            console.log(this.facility);
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
