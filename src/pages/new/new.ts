import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Content } from 'ionic-angular';
import { pubilcService } from '../../service/public';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  @ViewChild(Content) content: Content;
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
    var oframe = $("#ikmnew");

    oframe[0].onload = function () {
      
      var ifobj = oframe.contents();
      oframe[0].src = 'about:blank';
      oframe.remove();
      var ele = ifobj.find(".cont-list #data_list li");
      ele.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('h3').text();
        iobj['bannerimg'] = ot.find('.thumb img').attr('data-src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com'+ot.find('a').eq(0).attr('href');
        iobj['len'] = ot.find('dd').eq(2).text();
        pages.push(iobj);
      });
      _thst.data = pages;
      
      _thst.pubilcService.presentLoadingDismiss();
    };

  }

  open( name, banner, url ){
    this.navCtrl.push( 'ComicsPage', {
      name: name,
      banner: banner,
      url: url,
    } )
  }

  openMenu() {
    this.menuCtrl.open();
  }

  search() {
    this.navCtrl.push('SearchPage');
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }


}
