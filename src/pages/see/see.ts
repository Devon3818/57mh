import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var $: any;
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-see',
  templateUrl: 'see.html',
})
export class SeePage {

  imgs = 'http://im1.56zzw.com/7/2225.jpg';
  isrc = ''
  iurl = '';
  allpage = 0;
  page = 1;
  ifele = null;
  ifobj = null;
  itimer = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.iurl = this.navParams.get('iurl');
    this.isrc = 'http://m.57mh.com' + this.iurl + '?p=';
    
  }

  nextpage() {
    this.page++;
    if (this.allpage >= this.page) {
      this.ifele.src = this.isrc + this.page;

      this.itimer = setTimeout(() => {
        this.ifobj = $("#ifs").contents();
        this.imgs = this.ifobj.find("#manga").attr('src');
        clearTimeout(this.itimer);
      }, 1050);
    } else {
      alert("最后一页了");
    }
  }

  ionViewDidLoad2() {
    var _thst = this;
    this.ifele = document.getElementById("ifs");
    this.ifele.src = this.isrc + this.page;

    this.ifele.onload = function () {

      //alert("myframe is loaded");
      _thst.ifobj = $("#ifs").contents();
      //_thst.allpage = _thst.ifobj.find("#pageNo").text().split('/')[1];
      //var iimg = _thst.ifobj.find("#manga").attr('src');
      //alert(_thst.ifele.src);
      //alert(_thst.ifobj.find("#manga").attr('alt'));
      //if (iimg.length > 12) {
        //_thst.imgs = iimg;
      //}


    };

  }

  ionViewWillLeave() {
    this.ifele.src = '';
    this.ifele.remove();
  }


}
