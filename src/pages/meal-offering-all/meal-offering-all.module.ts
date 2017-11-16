import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealOfferingAllPage } from './meal-offering-all';

@NgModule({
  declarations: [
    MealOfferingAllPage,
  ],
  imports: [
    IonicPageModule.forChild(MealOfferingAllPage),
  ],
})
export class MealOfferingAllPageModule {}
