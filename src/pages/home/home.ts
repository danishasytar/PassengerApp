import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { MealOfferingPage } from '../meal-offering/meal-offering';
import { OurFacilityPage } from '../our-facility/our-facility';
import { FlightPage } from '../flight/flight';
import { LoginPage } from '../login/login';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HttpClient } from '@angular/common/http';



export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 flightdata;
  constructor(private http: HttpClient, public navCtrl: NavController, private menu: MenuController, private alertCtrl: AlertController, private localNotifications: LocalNotifications) {
    this.menu = menu; 
    this.menu.enable(false); 

    this.localNotifications.schedule({
      text: 'your flight is board',
      at: new Date(new Date().getTime() + 3600),
      led: 'FF0000',
      sound:null
    }) 

    
    var flightnumber = localStorage.getItem('flightnumber');
    if(flightnumber.toUpperCase() == "MH127" ){
      this.flightdata = this.flightdataall[1]
      
    }
    else if (flightnumber.toUpperCase()== "MH4") {
    this.flightdata = this.flightdataall[0]  
    }




      var data = {
        "room_name": "string",
        "passenger_name": "string",
        "time_start": "string",
        "time_end": "string",
        "remarks": "string"
      }

        this.http.post('http://unwilled-children.000webhostapp.com/api/privateroom/add', JSON.stringify(data))
        .subscribe(res => {
          console.log(res);
        }, (err) =>{
          console.log(err);
        });

  }

 flightdataall = [
  {id: "MH4", from: "Kuala Lumpur", to: "London", departure: "2017-12-11T23:30:51.01", gate: "G3"},
  {id: "MH127", from: "Kuala Lumpur", to: "Perth", departure: "2017-12-1T23:30:51.01", gate: "G7" },
  ]

logout() {
    //Api Token Logout
    localStorage.clear();
    this.menu.enable(false);
    setTimeout(() => this.navCtrl.setRoot(LoginPage), 1000);
    let alert = this.alertCtrl.create({
    title: 'Thank You ',
    subTitle: 'Please Come Again',
    buttons: ['Dismiss']
  });
  alert.present();
  this.navCtrl.setRoot(LoginPage);
 }
 

  goToMealOffering(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MealOfferingPage);
  } 

  goToOurFacility(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OurFacilityPage);
  }

    goFlight(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FlightPage);
  }

  gettime(): number {
    var d = new Date("2017-12-11T23:50:51.01");
    var d2 = new Date(); // for now
    return (d.getTime()-d2.getTime())/1000;

  }

  timeInSeconds: number = this.gettime();
  timer: CountdownTimer;

  ngOnInit() {
    this.initTimer();
    this.startTimer();
  }

  hasFinished() {
    return this.timer.hasFinished;
  }

  initTimer() {
    if (!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      } else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - (hours * 3600)) / 60);
    const seconds = secNum - (hours * 3600) - (minutes * 60);
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    hoursString = (hours < 10) ? '0' + hours : hours.toString();
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

   
}
