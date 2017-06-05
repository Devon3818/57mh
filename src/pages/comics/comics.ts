import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { pubilcService } from '../../service/public';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-comics',
  templateUrl: 'comics.html',
})
export class ComicsPage {

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
  br;

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public iab: InAppBrowser,
    public pubilcService: pubilcService
  ) {
    this.name = this.navParams.get('name');
    this.banner = this.navParams.get('banner');
    this.url = this.navParams.get('url');
    this.pubilcService.presentLoadingDefault();
  }

  open(url) {
    this.br = this.iab.create('http://m.57mh.com' + url, '_blank', 'location=no,hardwareback=no');
    //this.br.insertCSS({ code: "body {display: none !important;" });

    this.br.on('loadstart').subscribe(() => {

    });

    this.br.on('loadstop').subscribe(() => {
      this.br.insertCSS({ code: "body {display: block;" });
      var jscode = "$('body').children().css('display','none'); $('.title').css('display','block'); $('.main-bar').css('display','block'); $('#mangaTitle a').attr('href','')";
      this.br.executeScript({ code: jscode });
      this.br.insertCSS({ code: "#pb {width: 100% !important;} #pb a {display: none !important;}" });

    });
  }

  ionViewDidLoad() {

    var _thst = this;
    var link = $("<iframe/>");
    link.attr('id', 'ikmfs');
    link.attr('src', this.url);
    link.appendTo('body');


    var oframe = $("#ikmfs");
    oframe[0].onload = function () {

      var ifobj = oframe.contents();
      oframe.remove();
      var ele = ifobj.find(".chapter-list li a");
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
        _thst.data['pages'].push(iobj);

      });

      _thst.pubilcService.presentLoadingDismiss();

    };

  }


}
