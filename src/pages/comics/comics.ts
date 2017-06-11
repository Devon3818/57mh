import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { pubilcService } from '../../service/public';
import { Headers, Http } from '@angular/http';

declare var $: any;
@IonicPage()
@Component({
  selector: 'page-comics',
  templateUrl: 'comics.html',
})
export class ComicsPage {

  @ViewChild(Content) content: Content;
  name = '';
  uptime = '-';
  banner = '';
  url = '';
  len = '-';
  cod = '0';
  iclass = [];
  dec = '';
  olddata = [];
  data = {
    'pages': []
  };
  iscollect: boolean = false;
  isrecord: boolean = false;
  recordurl = '';
  itimer = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pubilcService: pubilcService,
    public http: Http
  ) {
    this.name = this.navParams.get('name');
    this.banner = this.navParams.get('banner');
    this.url = this.navParams.get('url');
    this.pubilcService.presentLoadingDefault();
    if (this.pubilcService.user._id) {
        this.checkcollect();
      } else {
        this.itimer = setTimeout(()=>{
          clearTimeout(this.itimer);
          this.init();
        },300);
      }
  }

  checkcollect() {


    let url = "http://www.devonhello.com/buka/checkcollect";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "bookname=" + this.name + "&uid=" + this.pubilcService.user._id, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json().length != 0) {
          this.iscollect = true;
        }
        this.getrecord();
      });

  }

  //收藏
  collect() {
    if (this.pubilcService.user._id) {
      this.pubilcService.presentLoadingDefault();
      let url = "http://www.devonhello.com/buka/collect";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "name=" + this.pubilcService.user.nickname + "&uid=" + this.pubilcService.user._id + "&bookname=" + this.name + "&bookbanner=" + this.banner + "&bookpages=" + this.len + "&booktime=" + this.uptime + "&url=" + this.url, {
        headers: headers
      })
        .subscribe((res) => {
          this.pubilcService.presentLoadingDismiss();
          if (res.json()['result']['ok'] == 1) {
            this.iscollect = true; 
          }
        });
    } else {
      this.navCtrl.push('LoginPage');
    }
  }

  //取消收藏
  uncollect() {
    this.pubilcService.presentLoadingDefault();
    let url = "http://www.devonhello.com/buka/uncollect";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.pubilcService.user._id + "&bookname=" + this.name, {
      headers: headers
    })
      .subscribe((res) => {
        this.iscollect = false;
        this.pubilcService.presentLoadingDismiss();
      });
  }

  openpage(url) {
    
    if( this.pubilcService.user._id ){
      this.addrecord(url);
    }  

    this.navCtrl.push('SeePage', {
      url: url + '?p=1'
    });
  }


  getrecord(){
    let url = "http://www.devonhello.com/buka/seerecord";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "bookname=" + this.name + "&uid=" + this.pubilcService.user._id, {
      headers: headers
    })
      .subscribe((res) => {
        
        if (res.json().length != 0) {
          this.isrecord = true;
          this.recordurl = res.json()[0]['url'];
          
        }
        this.init();
      });
  }


  addrecord( iurl ){
    let url = "http://www.devonhello.com/buka/addrecord";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.pubilcService.user._id + "&bookname=" + this.name + "&url=" + iurl + "&bookbanner=" + this.banner + "&bookpages=" + this.len + "&mhurl=" + this.url, {
      headers: headers
    })
      .subscribe((res) => {
        this.recordurl = iurl;
        this.isrecord = true;
      });
  }

  init() {

    var _thst = this;
    var link = $("<iframe/>");
    link.attr('id', 'ikmfs');
    link.attr('src', this.url);
    link.appendTo('body');


    var oframe = $("#ikmfs");
    var pages = [];
    oframe[0].onload = function () {

      var ifobj = oframe.contents();
      oframe[0].src = 'about:blank';
      oframe.remove();

      var ele = ifobj.find(".chapter-list li a");
      _thst.banner = ifobj.find(".thumb img").attr('src');
      _thst.dec = ifobj.find("#bookIntro").text();
      var dds = ifobj.find("dd");
      _thst.len = dds.eq(5).text();
      _thst.cod = dds.eq(4).text();
      _thst.uptime = dds.eq(6).text();
      _thst.iclass = dds.eq(3).text().split('/');
      ele.each(function () {
        var iobj = {},
          ot = $(this);
        iobj['ititle'] = ot.attr('title');
        iobj['ihref'] = ot.attr('href');
        pages.push(iobj);
      });
      _thst.data['pages'] = pages;
      _thst.pubilcService.presentLoadingDismiss();
    };

  }

  ionViewWillLeave() {
    var ifs = $("#ikmfs");
    ifs[0].src = 'about:blank';
    ifs.remove();
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

  ionViewDidEnter(){

    if( this.pubilcService.br ){
      this.pubilcService.br.close();
      this.pubilcService.br = null;
    }

    if(this.pubilcService.user._id){
      this.olddata = this.data['pages'];
      this.data['pages'] = [];
      this.data['pages'] = this.olddata
    }
    
  }


}
