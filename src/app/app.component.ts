import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MealOfferingPage } from '../pages/meal-offering/meal-offering';
import { MealDetailAndOrderPage } from '../pages/meal-detail-and-order/meal-detail-and-order';
import { OurFacilityPage } from '../pages/our-facility/our-facility';
import { FacilityDetailAndOrderPage } from '../pages/facility-detail-and-order/facility-detail-and-order';
import { SampleComponentPage } from '../pages/sample-component/sample-component';
import { FeedbackPage } from '../pages/feedback/feedback';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToMealOffering(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MealOfferingPage);
  }goToMealDetailAndOrder(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MealDetailAndOrderPage);
  }goToOurFacility(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OurFacilityPage);
  }goToFacilityDetailAndOrder(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FacilityDetailAndOrderPage);
  }goToSampleComponent(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SampleComponentPage);
  }goToFeedback(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FeedbackPage);
  }
}
