import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-see',
  templateUrl: 'see.html',
})
export class SeePage {

  imgs = 'http://im1.56zzw.com/7/2225.jpg';
  br;

  constructor(
    public navCtrl: NavController,
    public iab: InAppBrowser,
    public navParams: NavParams
  ) {
    this.open(this.navParams.get('url'));
  }

  open(url) {
    this.br = this.iab.create('http://m.57mh.com' + url, '_blank', 'location=no,hardwareback=no,hidden=yes');
    this.br.on('loadstart').subscribe(() => {
      this.br.hide();
    });

    this.br.on('exit').subscribe(() => {
      this.navCtrl.pop();
    });

    this.br.on('loaderror').subscribe(() => {
      alert('加载出错...');
      this.navCtrl.pop();
    });

    this.br.on('loadstop').subscribe(() => {
      this.br.insertCSS({ code: "body {display: block;" });
      var jscode = "$('body').children().css('display','none'); $('.title').css('display','block'); $('.main-bar').css('display','block'); $('#mangaTitle a').attr('href',''); var allpage = $('#pageNo').text().split('/')[1];  var ihtml = ''; var iurl = 'http://' + window.location.host + window.location.pathname + '?p='; for(var i=0; i<allpage; i++){ var ips = i+1; ihtml+='<a class=\"dv_a\" href=\"' + iurl+ ips + '\">'+ ips +' 页</a>'; }; $('body').append(ihtml+'<i class=\"dv_bar\"></i>');";
      this.br.executeScript({ code: jscode });
      this.br.insertCSS({ code: ".dv_bar { clear: both; width: 100px; height: 20px; display: block; } .dv_a { float: left; display: block; padding: 20px; } #pb {width: 100% !important;} #pb a {display: none !important;}" });
      this.br.show();
    });
  }

  ionViewWillLeave(){
    this.br.close();
  }

}
