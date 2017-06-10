import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayPage } from './today';

@NgModule({
  declarations: [
    TodayPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayPage),
  ],
  exports: [
    TodayPage
  ]
})
export class TodayPageModule {}
