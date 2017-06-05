import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage {

  mod:any;
  pthis:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
    ) {
      this.mod = this.navParams.data._that;
      this.pthis = this.navParams.data.pthis;
  }

  close( data ) {
    this.mod( data,this.pthis );
    this.viewCtrl.dismiss();
  }

}
