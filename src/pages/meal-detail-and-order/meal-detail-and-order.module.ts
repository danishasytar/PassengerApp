import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PageOne } from './page-meal-detail-and-order';

@NgModule({
  declarations: [
    PageOne,
  ],
  imports: [
    IonicPageModule.forChild(PageOne),
  ],
  entryComponents: [
    PageOne,
  ]
})
export class PageOneModule {}
