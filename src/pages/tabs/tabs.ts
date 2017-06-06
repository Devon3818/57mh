import { Component, ViewChild } from '@angular/core';
import { IonicPage, Platform, NavController, Tabs, ToastController } from 'ionic-angular';
import { pubilcService } from '../../service/public';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabs: Tabs;
  backButtonPressed: boolean = false;
  itimer = null;

  tab1Root = 'NewPage';
  tab2Root = 'HomePage';
  tab3Root = 'ClassifyPage';
  tab4Root = 'CollectPage';

  constructor(public navCtrl: NavController, public platform: Platform, public toastCtrl: ToastController,public pubilcService: pubilcService) {
    this.pageBack();
  }

  pageBack() {

    this.platform.registerBackButtonAction((): any => {

      let activeVC = this.navCtrl.getActive();
      let page = activeVC.instance;
      page.tabs
      if (!(page instanceof TabsPage)) {
        if (!this.navCtrl.canGoBack()) {
          return this.showExit();
        }
        this.pubilcService.presentLoadingDismiss();
        return this.navCtrl.pop();
      }
      let tabs = page.tabs;
      let activeNav = tabs.getSelected();
      if (!activeNav.canGoBack()) {
        return this.showExit();
      }
      this.pubilcService.presentLoadingDismiss();
      return activeNav.pop();

    }, 101);
  }

  //双击退出提示框
  showExit() {
    var _that = this;
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
      this.presentToast();
      this.backButtonPressed = true;
      if (this.itimer) {
        clearTimeout(this.itimer);
      }
      this.itimer = setTimeout(() => {
        _that.backButtonPressed = false
      }, 2000);
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '再次点击返回退出APP',
      duration: 2000
    });
    toast.present();
  }
}
