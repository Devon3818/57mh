import { Component, ViewChild } from '@angular/core';
import { IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public menuCtrl: MenuController) {
    this.menuCtrl.close();
  }

}
