import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeePage } from './see';

@NgModule({
  declarations: [
    SeePage,
  ],
  imports: [
    IonicPageModule.forChild(SeePage),
  ],
  exports: [
    SeePage
  ]
})
export class SeePageModule {}
