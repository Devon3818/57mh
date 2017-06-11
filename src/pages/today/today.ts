import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, MenuController } from 'ionic-angular';
import { pubilcService } from '../../service/public';
import { Headers, Http } from '@angular/http';

declare var $: any;
@IonicPage()
@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
})
export class TodayPage {

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

  ionViewDidLoad() {
    
    var _thst = this;
    var link = $("<iframe/>");
    link.attr('id', 'ikmtoday');
    link.attr('src', "http://m.57mh.com/rank/");
    link.appendTo('body');


    var oframe = $("#ikmtoday");
    var pages = [];
    oframe[0].onload = function () {

      var ifobj = oframe.contents();
      oframe[0].src = 'about:blank';
      oframe.remove();

      var ele = ifobj.find("#data_list li ");
      //alert(ele.length);
      
      _thst.pubilcService.presentLoadingDismiss();
    };

  }

  ionViewWillLeave() {
    var ifs = $("#ikmtoday");
    ifs[0].src = 'about:blank';
    ifs.remove();
  }

}
