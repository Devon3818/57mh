import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifyPage } from './classify';

@NgModule({
  declarations: [
    ClassifyPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifyPage),
  ],
  exports: [
    ClassifyPage
  ]
})
export class ClassifyPageModule {}
