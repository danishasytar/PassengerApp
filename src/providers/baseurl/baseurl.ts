import { Injectable } from '@angular/core';

/*
  Generated class for the BaseurlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseurlProvider {

  constructor() {
    console.log('Hello BaseurlProvider Provider');
  }


  baseurl() {
    return 'http://unwilled-children.000webhostapp.com';
  }
}
