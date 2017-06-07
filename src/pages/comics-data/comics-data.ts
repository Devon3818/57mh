import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Content } from 'ionic-angular';
import { pubilcService } from '../../service/public';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-comics-data',
  templateUrl: 'comics-data.html',
})
export class ComicsDataPage {

  @ViewChild(Content) content: Content;
  title = '';
  data = [];
  allpage = [];
  or: any = '';
  pages = 1;
  itimer;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public pubilcService: pubilcService
  ) {
    this.title = this.navParams.get('title');
    this.or = this.navParams.get('or');

  }

  doInfinite(infiniteScroll) {

    this.pages++;
    this.creatFrame();

    this.itimer = setTimeout(() => {
      clearTimeout(this.itimer);
      infiniteScroll.complete();
    }, 1000);
  }

  open(name, banner, url) {
    this.navCtrl.push('ComicsPage', {
      name: name,
      banner: banner,
      url: url,
    })
  }

  ionViewDidLoad() {
    this.creatFrame();
  }

  creatFrame(){
    this.pubilcService.presentLoadingDefault();
    var _thst = this;
    var iurls = '';
    if (isNaN(this.or)) {
      iurls = "http://m.57mh.com/list/area-" + this.or + '-order-hits-p-' + this.pages;;
    } else {
      iurls = "http://m.57mh.com/list/smid-" + this.or + '-order-hits-p-' + this.pages;;
    }

    var link = $("<iframe/>");
    link.attr('id', 'ikmiclass');
    link.attr('src', iurls);
    link.appendTo('body');

    var oframe = $("#ikmiclass");
    oframe[0].src = iurls;
    oframe[0].onload = function () {

      var ifobj = oframe.contents();
      oframe[0].src = 'about:blank';
      oframe.remove();
      var ele = ifobj.find("#contList li");
      ele.each(function (index) {
        var iobj = {},
          ot = $(this);
        iobj['name'] = ot.find('img').attr('alt');
        iobj['bannerimg'] = ot.find('img').attr('src');
        //alert(iobj['bannerimg']);
        iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
        iobj['len'] = ot.find('.tt').text();
        _thst.allpage.push(iobj);

      });
       _thst.data = _thst.allpage;
      _thst.pubilcService.presentLoadingDismiss();
    };
  }

  ionViewWillLeave() {
    var ifs = $("#ikmiclass");
    ifs[0].src = 'about:blank';
    ifs.remove();
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
