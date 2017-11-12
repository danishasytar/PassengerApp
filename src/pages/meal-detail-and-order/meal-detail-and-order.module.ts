import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MealDetailAndOrderPage } from './meal-detail-and-order';

@NgModule({
  declarations: [
    MealDetailAndOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(MealDetailAndOrderPage),
  ],
  entryComponents: [
    MealDetailAndOrderPage,
  ]
})
export class PageOneModule {}
