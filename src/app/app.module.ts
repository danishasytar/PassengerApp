import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MealOfferingPage } from '../pages/meal-offering/meal-offering';
import { OurFacilityPage } from '../pages/our-facility/our-facility';
import { LoginPage } from '../pages/login/login';
import { SampleComponentPage } from '../pages/sample-component/sample-component';
import { FeedbackPage } from '../pages/feedback/feedback';
import { MealDetailAndOrderPage } from '../pages/meal-detail-and-order/meal-detail-and-order';
import { FacilityDetailAndOrderPage } from '../pages/facility-detail-and-order/facility-detail-and-order';
import { ModalPageModule } from '../pages/modal-page/modal-page.module';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MealOfferingPage,
    OurFacilityPage,
    LoginPage,
    SampleComponentPage,
    FeedbackPage,
    MealDetailAndOrderPage,
    FacilityDetailAndOrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MealOfferingPage,
    OurFacilityPage,
    LoginPage,
    SampleComponentPage,
    FeedbackPage,
    MealDetailAndOrderPage,
    FacilityDetailAndOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}