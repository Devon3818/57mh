import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { pubilcService } from '../service/public';
import { AppVersion } from '@ionic-native/app-version';
import { Headers, Http } from '@angular/http';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController
  rootPage: any = 'TabsPage';
  apkDownloadUrl = '';
  fileTransfer: TransferObject;
  ischeck: boolean = false;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    public pubilcService: pubilcService,
    public http: Http,
    splashScreen: SplashScreen,
    public appVersion: AppVersion,
    public alertCtrl: AlertController,
    public file: File,
    public fileOpener: FileOpener,
    public transfer: Transfer,
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      var _that = this;
      appVersion.getVersionNumber().then((version) => {
        _that.pubilcService.Version = version;
        _that.getAppVersion();
      });
    });
  }

  oncheck() {
    this.ischeck = true;
    this.pubilcService.presentLoadingDefault();
    this.getAppVersion();
  }

  //app版本获取
  getAppVersion() {

    let url = "http://www.devonhello.com/buka/appversion";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "", {
      headers: headers
    })
      .subscribe((res) => {
        this.pubilcService.presentLoadingDismiss();
        //alert(res.json()[0]["v"]);
        if (res.json()[0]["v"] != this.pubilcService.Version) {
          //可升级
          this.apkDownloadUrl = res.json()[0]["url"];
          this.fileTransfer = this.transfer.create();
          this.AppV();
        } else {
          if (this.ischeck) {
            let alert = this.alertCtrl.create({
              title: '提示',
              message: '已经是最新版本...',
              buttons: [
                {
                  text: '确定',
                  role: 'cancel',
                  handler: () => {
                    //console.log('Cancel clicked');
                  }
                }
              ]
            });

            alert.present();
          }
        }

      });
  }

  //下载最新版本
  download() {
    this.pubilcService.presentLoadingDefault();
    var _that = this;
    var apkurl = this.file.externalDataDirectory + 'buka.apk';
    this.fileTransfer.download(this.apkDownloadUrl, apkurl).then((entry) => {
      this.pubilcService.presentLoadingDismiss();
      //打开apk
      this.fileOpener.open(apkurl, 'application/vnd.android.package-archive')
        .then(() => console.log('File is opened'))
        .catch(e => alert('Error：' + e));

    }, (error) => {
      this.pubilcService.presentLoadingDismiss();
      // handle error
    });

  }

  AppV() {


    let alert = this.alertCtrl.create({
      title: '提示',
      message: '是否要更新到最新版本?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.download();
          }
        }
      ]
    });
    this.pubilcService.presentLoadingDismiss();
    alert.present();
  }

  getrecord() {
    this.nav.push('RecordPage');
  }

  about() {
    this.nav.push('AboutPage');
  }

  today() {
    this.nav.push('TodayPage');
  }
}
