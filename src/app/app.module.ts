import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MealOfferingPage } from '../pages/meal-offering/meal-offering';
import { OurFacilityPage } from '../pages/our-facility/our-facility';
import { LoginPage } from '../pages/login/login';
import { SampleComponentPage } from '../pages/sample-component/sample-component';
import { MealDetailAndOrderPage } from '../pages/meal-detail-and-order/meal-detail-and-order';
import { FacilityDetailAndOrderPage } from '../pages/facility-detail-and-order/facility-detail-and-order';
import { FlightPage } from '../pages/flight/flight';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BaseurlProvider } from '../providers/baseurl/baseurl';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MealOfferingPage,
    OurFacilityPage,
    LoginPage,
    SampleComponentPage,
    MealDetailAndOrderPage,
    FacilityDetailAndOrderPage,
    FlightPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MealOfferingPage,
    OurFacilityPage,
    LoginPage,
    SampleComponentPage,
    MealDetailAndOrderPage,
    FacilityDetailAndOrderPage,
    FlightPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseurlProvider
  ]
})
export class AppModule {}