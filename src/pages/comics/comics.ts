import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { pubilcService } from '../../service/public';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-comics',
  templateUrl: 'comics.html',
})
export class ComicsPage {

   @ViewChild(Content) content: Content;
  name = '';
  uptime = '-';
  banner = '';
  url = '';
  len = '-';
  cod = '0';
  iclass = [];
  dec = '';
  data = {
    'pages': []
  };

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public pubilcService: pubilcService
  ) {
    this.name = this.navParams.get('name');
    this.banner = this.navParams.get('banner');
    this.url = this.navParams.get('url');
    this.pubilcService.presentLoadingDefault();
  }

  openpage(url) {
    
    this.navCtrl.push('SeePage', {
      url: url+'?p=1'
    });
  }

  ionViewDidLoad() {

    var _thst = this;
    var link = $("<iframe/>");
    link.attr('id', 'ikmfs');
    link.attr('src', this.url);
    link.appendTo('body');


    var oframe = $("#ikmfs");
    var pages = [];
    oframe[0].onload = function () {

      var ifobj = oframe.contents();
      oframe[0].src = 'about:blank';
      oframe.remove();

      var ele = ifobj.find(".chapter-list li a");
      _thst.banner = ifobj.find(".thumb img").attr('src');
      _thst.dec = ifobj.find("#bookIntro").text();
      _thst.len = ifobj.find("dd").eq(5).text();
      _thst.cod = ifobj.find("dd").eq(4).text();
      _thst.uptime = ifobj.find("dd").eq(6).text();
      _thst.iclass = ifobj.find("dd").eq(3).text().split('/');
      ele.each(function () {
        var iobj = {},
          ot = $(this);
        iobj['ititle'] = ot.attr('title');
        iobj['ihref'] = ot.attr('href');
        pages.push(iobj);
      });
      _thst.data['pages'] = pages;
      _thst.pubilcService.presentLoadingDismiss();

    };

  }

  ionViewWillLeave() {
    var ifs = $("#ikmfs");
    ifs[0].src = 'about:blank';
    ifs.remove();
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }


}
