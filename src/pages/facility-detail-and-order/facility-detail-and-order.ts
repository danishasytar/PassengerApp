import { Component, ViewChild} from '@angular/core';
import { NavParams, NavController, Slides } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { BaseurlProvider } from './../../providers/baseurl/baseurl';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-facility-detail-and-order',
  templateUrl: 'facility-detail-and-order.html'
})
export class FacilityDetailAndOrderPage {

  @ViewChild('slider') slider: Slides;



  slides = [
    {
      imageUrl: 'assets/img/lists/1.png',
    },
    {
      imageUrl: 'assets/img/lists/2.png',
    },
    {
      imageUrl: 'assets/img/lists/3.png',
    },
    {
      imageUrl: 'assets/img/lists/4.png',
    }
  ];

  onSlideChanged() {
    const currentIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', currentIndex);
  }


	imageURL: string;
	param: string;	
	name: string;
  facility;
	constructor(public navCtrl: NavController,  private http: HttpClient, public baseurl: BaseurlProvider, public modalCtrl: ModalController, navParams: NavParams) {

		let myParam = navParams.get('myParam');
		this.param = navParams.get('myParam');
		console.log(myParam)



      var url = this.baseurl.baseurl();
       this.http.get(url + '/api/facility_type/'+myParam.id,{} )
            .subscribe(data => {
              this.facility = data;
              console.log(this.facility);
                          
            }, err => {
              console.log(err);

      });

    this.name = myParam.facility_type;


      this.slides = [
        {
          imageUrl: myParam.image_url,
        }
      ]
	}


	alerMe() {
		console.log("button clicked")
	}



}
