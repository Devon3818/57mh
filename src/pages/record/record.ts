import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, MenuController } from 'ionic-angular';
import { pubilcService } from '../../service/public';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

  @ViewChild(Content) content: Content;
  data: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pubilcService: pubilcService,
    public http: Http,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.close();
    this.getdata();
  }

  getdata() {
    this.pubilcService.presentLoadingDefault();
    let url = "http://www.devonhello.com/buka/getrecord";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.pubilcService.user._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.pubilcService.presentLoadingDismiss();
        this.data = res.json();
      });
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
