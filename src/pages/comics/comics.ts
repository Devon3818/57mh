import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-comics',
  templateUrl: 'comics.html',
})
export class ComicsPage {

  name = '';
  uptime = '';
  banner = '';
  url = '';
  len = '';
  cod = '';
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
    public iab: InAppBrowser
  ) {
    this.name = this.navParams.get('name');
    this.uptime = this.navParams.get('uptime');
    this.banner = this.navParams.get('banner');
    this.url = this.navParams.get('url');
    this.len = this.navParams.get('len');
    this.cod = this.navParams.get('cod');
    this.iclass = this.navParams.get('iclass');
    //this.getdata()
  }

  open(url) {
    this.br = this.iab.create('http://m.57mh.com' + url,'_blank','location=no,hardwareback=no');
    //this.br.insertCSS({ code: "body {display: none !important;" });
    
    this.br.on('loadstart').subscribe(()=>{
      
    });

    this.br.on('loadstop').subscribe(()=>{
      this.br.insertCSS({ code: "body {display: block;" });
      var jscode = "$('body').children().css('display','none'); $('.title').css('display','block'); $('.main-bar').css('display','block'); $('#mangaTitle a').attr('href','')";
      this.br.executeScript({code:jscode});
      this.br.insertCSS({ code: "#pb {width: 100% !important;} #pb a {display: none !important;}" });
    });
  }

  ionViewDidLoad() {

    var _thst = this;

    document.getElementById("ikmfs").src = this.url;

    document.getElementById("ikmfs").onload = function () {
      alert("myframe is loaded");
      var ifobj = $("#ikmfs").contents();
      var ele = ifobj.find(".chapter-list li a");
      _thst.dec = ifobj.find("#bookIntro").text();
      ele.each(function () {
        var iobj = {},
          ot = $(this);
        iobj['ititle'] = ot.attr('title');
        iobj['ihref'] = ot.attr('href');
        _thst.data['pages'].push(iobj);

      });
    };

  }


}
