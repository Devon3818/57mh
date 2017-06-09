import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistPage } from './regist';

@NgModule({
  declarations: [
    RegistPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistPage),
  ],
  exports: [
    RegistPage
  ]
})
export class RegistPageModule {}
