import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { pubilcService } from '../../service/public';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  data = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public pubilcService: pubilcService
  ) {
    this.pubilcService.presentLoadingDefault();
  }

  ionViewDidLoad() {

    var _thst = this;
    var pages = [];

    var link = $("<iframe/>");
    link.attr('id', 'ikmnew');
    link.attr('src', "http://m.57mh.com/latest/");
    link.appendTo('body');

    //document.getElementById("ikmnew").src = "http://m.57mh.com/list/order-hits";

    document.getElementById("ikmnew").onload = function () {
      
      var ifobj = $("#ikmnew").contents();
      var ele = ifobj.find(".cont-list #data_list li");
      ele.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('h3').text();
        iobj['uptime'] = ot.find('font').text();
        iobj['bannerimg'] = ot.find('.thumb img').attr('data-src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com'+ot.find('a').eq(0).attr('href');
        iobj['len'] = ot.find('dd').eq(2).text();
        iobj['cod'] = 0.0;
        iobj['class'] = ['日本'];
        pages.push(iobj);
      });
      _thst.data = pages;
      $("#ikmnew").remove();
      _thst.pubilcService.presentLoadingDismiss();
    };

  }

  open( name, uptime, banner, url, len, cod, iclass ){
    this.navCtrl.push( 'ComicsPage', {
      name: name,
      uptime: uptime,
      banner: banner,
      url: url,
      len: len,
      cod: cod,
      iclass: iclass
    } )
  }

  openMenu() {
    this.menuCtrl.open();
  }

  search() {
    this.navCtrl.push('SearchPage');
  }


}
