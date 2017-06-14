import { Component, ViewChild } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { pubilcService } from '../../service/public';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  Version = '';

  constructor(
    public navCtrl: NavController,
    public pubilcService: pubilcService,
    public menuCtrl: MenuController
  ) 
  {
    this.Version = this.pubilcService.Version;
    this.menuCtrl.close();
  }

}
