import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP} from '@ionic-native/http';
import { Device} from '@ionic-native/device';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient, public httpnative:HTTP, public device:Device) {
  }



  getdata(apiname,data){

  	let baseUrl = 'http://unwilled-children.000webhostapp.com/admin';
  	if(this.device.cordova){
	  	return new Promise((resolve, reject) => {
			this.httpnative.get(baseUrl+apiname, {}, {})
				.then(data => {
		    	    resolve(JSON.parse(data.data));
				})
				.catch(error => {
		            reject(error);


				});
		});
  	}
  	else{
		let query = "";
		for (let key in data) {
		    query += encodeURIComponent(key)+"="+encodeURIComponent(data[key])+"&";
		}

	  	return new Promise((resolve, reject) => {
  		  	this.http.get(baseUrl+apiname, {})
		        .subscribe(res => {
		    	    resolve(res);

		        }, (error) => {
		            reject(error);
		        });

  		});
      
  	}
	




  }
}
