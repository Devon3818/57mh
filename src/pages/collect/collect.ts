import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html',
})
export class CollectPage {

  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {

  }

  openMenu() {
    this.menuCtrl.open();
  }

  search(){
    this.navCtrl.push( 'SearchPage' );
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }


}
