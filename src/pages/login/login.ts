import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pubilcService } from '../../service/public';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  name= '';
  pass= '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pubilcService: pubilcService,
    public http: Http
  ) {}

  regist(){
    this.navCtrl.push( 'RegistPage' );
  }

  login(){
    if (!this.name || !this.pass) {
      return true;
    }
    let url = "http://www.devonhello.com/buka/login";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name=" + this.name + "&pass=" + this.pass, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()[0]['_id']) {
          this.navCtrl.popToRoot();
        }
      });
  }

}
