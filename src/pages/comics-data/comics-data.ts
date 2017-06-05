import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-comics-data',
  templateUrl: 'comics-data.html',
})
export class ComicsDataPage {

  title = '';
  data = [];
  or: any = '';
  sele = 'id'
  pages = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {
    this.title = this.navParams.get('title');
    this.or = this.navParams.get('or');
  }

  presentPopover(myEvent) {

    let popover = this.popoverCtrl.create('PopOverPage', {
      _that: this.getdata,
      pthis: this,
    });
    popover.present({
      ev: myEvent
    });
  }

  getdata(data, pthis) {
    alert(data);
    pthis.data = [];
    pthis.sele = data;
    var iurls = '';
    if (isNaN(pthis.or)) {
      iurls = "http://m.57mh.com/list/area-" + pthis.or + '-order-' + pthis.sele + '-p-' + pthis.pages;;
    } else {
      iurls = "http://m.57mh.com/list/smid-" + pthis.or + '-order-' + pthis.sele + '-p-' + pthis.pages;;
    }

    var link = $("<iframe/>");
    link.attr('id', 'ikmiclass');
    link.attr('src', iurls);
    link.appendTo('body');

    document.getElementById("ikmiclass").src = iurls;
    document.getElementById("ikmiclass").onload = function () {
      alert("myframe is loaded");

      var ifobj = $("#ikmiclass").contents();

      var ele = ifobj.find("#contList li");
      ele.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['uptime'] = ot.find('.updateon').text();
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('.tt').text();
        iobj['cod'] = 0.0;
        iobj['class'] = ['日本'];
        pthis.data.push(iobj);

      });
      $("#ikmiclass").remove();
    };
  }


  doInfinite(infiniteScroll) {
    this.pages++;
    var iurls = '';
    var _that = this;
    if (isNaN(this.or)) {
      iurls = "http://m.57mh.com/list/area-" + this.or + '-order-' + this.sele + '-p-' + this.pages;;
    } else {
      iurls = "http://m.57mh.com/list/smid-" + this.or + '-order-' + this.sele + '-p-' + this.pages;;
    }
    alert(iurls);
    var link = $("<iframe/>");
    link.attr('id', 'ikmiclass');
    link.attr('src', iurls);
    link.appendTo('body');

    document.getElementById("ikmiclass").src = iurls;

    document.getElementById("ikmiclass").onload = function () {
      alert("myframe is loaded");

      var ifobj = $("#ikmiclass").contents();

      var ele = ifobj.find("#contList li");
      ele.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['uptime'] = ot.find('.updateon').text();
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('.tt').text();
        iobj['cod'] = 0.0;
        iobj['class'] = ['日本'];
        _that.data.push(iobj);

      });
      $("#ikmiclass").remove();
    };

    setTimeout(() => {
      infiniteScroll.complete();
    }, 2000);
  }

  open(name, uptime, banner, url, len, cod, iclass) {
    this.navCtrl.push('ComicsPage', {
      name: name,
      uptime: uptime,
      banner: banner,
      url: url,
      len: len,
      cod: cod,
      iclass: iclass
    })
  }

  ionViewDidLoad() {

    var _thst = this;
    var iurls = '';
    if (isNaN(this.or)) {
      iurls = "http://m.57mh.com/list/area-" + this.or + '-order-' + this.sele + '-p-' + this.pages;;
    } else {
      iurls = "http://m.57mh.com/list/smid-" + this.or + '-order-' + this.sele + '-p-' + this.pages;;
    }

    var link = $("<iframe/>");
    link.attr('id', 'ikmiclass');
    link.attr('src', iurls);
    link.appendTo('body')

    document.getElementById("ikmiclass").src = iurls;

    document.getElementById("ikmiclass").onload = function () {
      alert("myframe is loaded");

      var ifobj = $("#ikmiclass").contents();
      var ele = ifobj.find("#contList li");
      ele.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['uptime'] = ot.find('.updateon').text();
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('.tt').text();
        iobj['cod'] = 0.0;
        iobj['class'] = ['日本'];
        _thst.data.push(iobj);

      });
      $("#ikmiclass").remove();
    };

  }

}
