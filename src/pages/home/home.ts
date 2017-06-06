import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';
import { pubilcService } from '../../service/public';

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
    public menuCtrl: MenuController,
    public pubilcService: pubilcService
  ) {
    this.pubilcService.presentLoadingDefault();
  }

  openMenu() {
    this.menuCtrl.open();
  }

  open(name, banner, url) {
    this.navCtrl.push('ComicsPage', {
      name: name,
      banner: banner,
      url: url,

    })
  }

  search() {
    this.navCtrl.push('SearchPage');
  }

  ionViewDidLoad() {

    var _thst = this;
    var pages = {
      'tj': [],
      'rm': [],
      'gm': [],
      'new': [],
      'banner': []
    };

    document.getElementById("ikmhome").onload = function () {

      var oframe = $("#ikmhome");
      var ifobj = oframe.contents();
      oframe.remove();
      var ibanner = ifobj.find('.swiper-slide');
      ibanner.each(function (index) {
        pages['banner'].push($(this).find('img').attr('src'));
      });
      _thst.data['banner'] = pages['banner'];

      var tuijian = ifobj.find("#main-jinrituijian li");
      tuijian.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('p').text();
        pages['tj'].push(iobj);

      });
      _thst.data['tj'] = pages['tj'];

      var remen = ifobj.find("#main-rimanlianzai li");
      remen.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('p').text();
        pages['rm'].push(iobj);

      });
      _thst.data['rm'] = pages['rm'];
      var gm = ifobj.find("#main-guomanlianzai li");
      gm.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('p').text();
        pages['gm'].push(iobj);

      });
      _thst.data['gm'] = pages['gm'];
      var inew = ifobj.find("#main-shangjia li");
      inew.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('p').text();
        pages['new'].push(iobj);

      });
      _thst.data['new'] = pages['new'];
      setTimeout(() => {
        var swiper = new Swiper('.swiper-container', {
          loop: true,
          autoplay: 3000,
        });
      }, 1000);

      _thst.pubilcService.presentLoadingDismiss();

    };

  }

}
