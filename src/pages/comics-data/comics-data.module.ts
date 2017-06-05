import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComicsDataPage } from './comics-data';

@NgModule({
  declarations: [
    ComicsDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ComicsDataPage),
  ],
  exports: [
    ComicsDataPage
  ]
})
export class ComicsDataPageModule {}
