import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pubilcService } from '../../service/public';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-regist',
  templateUrl: 'regist.html',
})
export class RegistPage {

  name= '';
  pass= '';
  nickname= '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pubilcService: pubilcService,
    public http: Http
  ) {}

  logon(){
    if (!this.name || !this.pass || !this.nickname) {
      return true;
    }
    this.pubilcService.presentLoadingDefault();
    let url = "http://www.devonhello.com/buka/regist";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name=" + this.name + "&pass=" + this.pass + "&nickname=" + this.nickname, {
      headers: headers
    })
      .subscribe((res) => {
        this.pubilcService.presentLoadingDismiss();
        if (res.json()[0]['_id']) {
          this.pubilcService.setUser( res.json()[0] );
          this.navCtrl.popToRoot();
        }else{
          //用户重复／系统错误
        }
      });
  }


}
