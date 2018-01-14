import { Component, ViewChild} from '@angular/core';
import { NavParams, NavController, Slides } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';



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
	constructor(public api:ApiProvider, public navCtrl: NavController, public modalCtrl: ModalController, navParams: NavParams) {

		let myParam = navParams.get('myParam');
		this.param = navParams.get('myParam');
		console.log(myParam)



       this.api.getdata('/api/facility_type/'+myParam.id,{} )
            .then(data => {
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
