import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class pubilcService {

    loading: any = null;
    user: any = {};
    br:any = null;
    Version:any = '';
    checkupdate = null;

    constructor(public loadingCtrl: LoadingController, public storage: Storage) {
        this.storageGet();
    }

    presentLoadingDefault() {
        this.loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        this.loading.present();
    }

    presentLoadingDismiss() {
        this.loading.dismiss();
    }

    //更新用户数据,录入缓存
    setUser(obj) {
        this.user = obj;
        this.storage.set('user', this.user);
    }

    storageGet() {

        this.storage.get('user').then((val) => {

            if (val && val._id) {
                this.user = val;
            } else {
                //alert("未登录");
            }

        })
    }

    //清除缓存
    clearStorage() {
        this.storage.clear();
        this.user = {};
    }

}

