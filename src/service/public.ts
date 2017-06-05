import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class pubilcService {

    loading: any = null;

    constructor(public loadingCtrl: LoadingController) { }

    presentLoadingDefault() {
        this.loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        this.loading.present();
    }

    presentLoadingDismiss() {
        this.loading.dismiss();
    }
}

