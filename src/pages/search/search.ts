import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { pubilcService } from '../../service/public';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  @ViewChild(Content) content: Content;
  page = 1;
  data = [];
  allpages = [];
  searchval = '';
  itimer;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pubilcService: pubilcService
  )
  { }

  getItems(ev: any) {

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      //alert(val.trim());
      this.searchval = val.trim()
      this.runframe();
    }
  }

  creatFrame(){
    this.pubilcService.presentLoadingDefault();
    var link = $("<iframe/>");
    link.attr('id', 'ikmsearch');
    link.attr('src', "http://m.57mh.com/search/q_" + this.searchval + "-p-" + this.page);
    link.appendTo('body');
    var _that = this;

    var iframe = $("#ikmsearch");
    iframe[0].onload = function () {

      var ifobj = iframe.contents();
      iframe[0].src = 'about:blank';
      iframe.remove();
      var ele = ifobj.find("#data_list li");
      ele.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('h3').text();
        iobj['bannerimg'] = ot.find('.thumb img').attr('data-src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com'+ot.find('a').eq(0).attr('href');
        iobj['len'] = ot.find('dd').eq(2).text();
        _that.allpages.push(iobj);
      });
      _that.data = _that.allpages;
      _that.pubilcService.presentLoadingDismiss();
    };
  }

  runframe() {
    this.creatFrame();
  };

  doInfinite(infiniteScroll) {
    this.page++;
    this.creatFrame();
    this.itimer = setTimeout(() => {
      clearTimeout(this.itimer);
      infiniteScroll.complete();
    }, 1000);
  }

  open( name, banner, url ){
    this.navCtrl.push( 'ComicsPage', {
      name: name,
      banner: banner,
      url: url,
    } )
  }

  ionViewWillLeave() {
    var ifs = $("#ikmsearch");
    ifs[0].src = 'about:blank';
    ifs.remove();
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
