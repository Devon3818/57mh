webpackJsonp([0],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
        ]
    })
], TabsModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = TabsPage_1 = (function () {
    function TabsPage(navCtrl, platform, toastCtrl, pubilcService) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.pubilcService = pubilcService;
        this.backButtonPressed = false;
        this.itimer = null;
        this.tab1Root = 'NewPage';
        this.tab2Root = 'HomePage';
        this.tab3Root = 'ClassifyPage';
        this.tab4Root = 'CollectPage';
        this.pageBack();
        codePush.sync();
        //alert(codePush.sync);
    }
    TabsPage.prototype.pageBack = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.pubilcService.presentLoadingDismiss();
            var activeVC = _this.navCtrl.getActive();
            var page = activeVC.instance;
            page.tabs;
            if (!(page instanceof TabsPage_1)) {
                if (!_this.navCtrl.canGoBack()) {
                    return _this.showExit();
                }
                return _this.navCtrl.pop();
            }
            var tabs = page.tabs;
            var activeNav = tabs.getSelected();
            if (!activeNav.canGoBack()) {
                return _this.showExit();
            }
            return activeNav.pop();
        }, 101);
    };
    //双击退出提示框
    TabsPage.prototype.showExit = function () {
        var _that = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.presentToast();
            this.backButtonPressed = true;
            if (this.itimer) {
                clearTimeout(this.itimer);
            }
            this.itimer = setTimeout(function () {
                _that.backButtonPressed = false;
            }, 2000);
        }
    };
    TabsPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: '再次点击返回退出APP',
            duration: 2000
        });
        toast.present();
    };
    return TabsPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Tabs */])
], TabsPage.prototype, "tabs", void 0);
TabsPage = TabsPage_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/tabs/tabs.html"*/'<ion-tabs #myTabs selectedIndex="1" no-border color="fff">\n    <ion-tab [root]="tab1Root" tabIcon="md-flame"></ion-tab>\n    <ion-tab [root]="tab2Root" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab3Root" tabIcon="md-color-palette"></ion-tab>\n    <ion-tab [root]="tab4Root" tabIcon="md-star"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */]])
], TabsPage);

var TabsPage_1;
//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map