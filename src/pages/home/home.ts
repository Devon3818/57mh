import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';

declare var $: any;
declare var Swiper: any;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data = {
    'tj': [],
    'rm': [],
    'gm': [],
    'new': [],
    'banner': []
  };

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {

  }

  openMenu() {
    this.menuCtrl.open();
  }

  openComics() {

    this.navCtrl.push('ComicsPage');
  }

  search() {
    this.navCtrl.push('SearchPage');
  }

  ionViewDidLoad() {

    var _thst = this;

    var link  = $("<iframe/>");
    link.attr('id','ikmhome');  
    link.attr('src','http://m.57mh.com');
    link.appendTo('body')    

    document.getElementById("ikmhome").onload = function () {
      alert("myframe is loaded");
      var ifobj = $("#ikmhome").contents();

      var ibanner = ifobj.find('.swiper-slide');
      ibanner.each(function (index) {
        _thst.data['banner'].push($(this).find('img').attr('src'));
      })

      var tuijian = ifobj.find("#main-jinrituijian li");
      tuijian.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('p').text();
        iobj['cod'] = 0.0;
        iobj['class'] = ['日本'];
        _thst.data['tj'].push(iobj);

      });

      var remen = ifobj.find("#main-rimanlianzai li");
      remen.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('p').text();
        iobj['cod'] = 0.0;
        iobj['class'] = ['日本'];
        _thst.data['rm'].push(iobj);

      });

      var gm = ifobj.find("#main-guomanlianzai li");
      gm.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('p').text();
        iobj['cod'] = 0.0;
        iobj['class'] = ['日本'];
        _thst.data['gm'].push(iobj);

      });

      var inew = ifobj.find("#main-shangjia li");
      inew.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('p').text();
        iobj['cod'] = 0.0;
        iobj['class'] = ['日本'];
        _thst.data['new'].push(iobj);

      });

      var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 3000,
      });

    };

  }

}
