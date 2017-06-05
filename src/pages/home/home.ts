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

    document.getElementById("ikmhome").onload = function () {

      var oframe = $("#ikmhome");
      var ifobj = oframe.contents();
      oframe.remove();
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
        _thst.data['new'].push(iobj);

      });

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
