import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrdeMenuModal } from './order-menu-modal';

@NgModule({
  declarations: [
    OrdeMenuModal,
  ],
  imports: [
    IonicPageModule.forChild(OrdeMenuModal),
  ],
  entryComponents: [
    OrdeMenuModal,
  ]
})
export class OrdeMenuModalModule {}
