import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { pubilcService } from '../service/public';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController
  rootPage:any = 'TabsPage';

  constructor(platform: Platform, statusBar: StatusBar,public pubilcService: pubilcService, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  getrecord(){
   this.nav.push( 'RecordPage' );
  }

  about(){
    this.nav.push( 'AboutPage' );
  }

  today(){
    this.nav.push( 'TodayPage' );
  }
}
