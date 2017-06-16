import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { pubilcService } from '../../service/public';

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {

  Version = '';
  img;
  name;
  itimer = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pubilcService: pubilcService,
    public menuCtrl: MenuController
  ) 
  {
    this.Version = this.pubilcService.Version;
    this.name = this.pubilcService.user.nickname;
    this.img = "https://avatars0.githubusercontent.com/u/11835988?v=3&s=460";
    this.menuCtrl.close();
  }

  out(){
    this.pubilcService.presentLoadingDefault();
    this.pubilcService.clearStorage();
    this.itimer = setTimeout(()=>{
      clearTimeout(this.itimer);
      this.pubilcService.presentLoadingDismiss();
      this.navCtrl.pop();
    },1000);
  }


}
