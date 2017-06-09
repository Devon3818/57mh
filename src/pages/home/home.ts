import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, IonicPage, Content } from 'ionic-angular';
import { pubilcService } from '../../service/public';
import { CodePush } from '@ionic-native/code-push';

declare var $: any;
declare var Swiper: any;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;
  data = {
    'tj': [],
    'rm': [],
    'gm': [],
    'new': [],
    'banner': []
  };
  Swiperobj: any = null;
  itimer: any = null;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public pubilcService: pubilcService,
    private codePush: CodePush
  ) {
    this.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));
    this.pubilcService.presentLoadingDefault();
  }

  openMenu() {
    if( this.pubilcService.user._id ){
      this.menuCtrl.open();
    }else{
      this.navCtrl.push('LoginPage');
    }
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

    var link = $("<iframe/>");
    link.attr('id', 'ikmhome');
    link.attr('src', "http://m.57mh.com");
    link.appendTo('body');

    var _thst = this;
    var pages = {
      'tj': [],
      'rm': [],
      'gm': [],
      'new': [],
      'banner': []
    };
    var oframe = $("#ikmhome");

    oframe[0].onload = function () {
      
      var ifobj = oframe.contents();
      oframe[0].src = 'about:blank';
      oframe.remove();
      var ibanner = ifobj.find('.swiper-slide');

      ibanner.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['banner'] = ot.find('img').attr('src');
        iobj['name'] = ot.find('h2').text();
        iobj['url'] = 'http://m.57mh.com/' + ot.find('a').attr('href');
        pages['banner'].push(iobj);
      });
      _thst.data['banner'] = pages['banner'];

      var tuijian = ifobj.find("#main-jinrituijian li");
      tuijian.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        
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
        
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('p').text();
        pages['new'].push(iobj);

      });
      _thst.data['new'] = pages['new'];

      _thst.itimer = setTimeout(() => {
        clearTimeout(_thst.itimer);
        _thst.Swiperobj = new Swiper('.swiper-container', {
          loop: true,
          autoplay: 3000,
        });
      }, 1000);


      _thst.pubilcService.presentLoadingDismiss();

    };

  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
