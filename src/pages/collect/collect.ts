import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Content } from 'ionic-angular';
import { pubilcService } from '../../service/public';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html',
})
export class CollectPage {

  @ViewChild(Content) content: Content;

  data: any = [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public pubilcService: pubilcService,
    public http: Http
  ) {
    this.pubilcService.presentLoadingDefault();
  }

  getclooect() {
    
    let url = "http://www.devonhello.com/buka/getcollect";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.pubilcService.user._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json();
        this.pubilcService.presentLoadingDismiss();
      });
  }

  openMenu() {
    if (this.pubilcService.user._id) {
      this.menuCtrl.open();
    } else {
      this.navCtrl.push('LoginPage');
    }
  }

  ionViewDidEnter() {
    this.getclooect();
  }

  search() {
    this.navCtrl.push('SearchPage');
  }

  open(name, banner, url) {
    this.navCtrl.push('ComicsPage', {
      name: name,
      banner: banner,
      url: url,

    })
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }


}
