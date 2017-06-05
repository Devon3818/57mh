import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPage } from './new';

@NgModule({
  declarations: [
    NewPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPage),
  ],
  exports: [
    NewPage
  ]
})
export class NewPageModule {}
