webpackJsonp([0],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__today__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayPageModule", function() { return TodayPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TodayPageModule = (function () {
    function TodayPageModule() {
    }
    return TodayPageModule;
}());
TodayPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__today__["a" /* TodayPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__today__["a" /* TodayPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__today__["a" /* TodayPage */]
        ]
    })
], TodayPageModule);

//# sourceMappingURL=today.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodayPage = (function () {
    function TodayPage(navCtrl, navParams, pubilcService, http, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pubilcService = pubilcService;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.data = [];
        this.allpage = [];
        this.menuCtrl.close();
    }
    TodayPage.prototype.open = function (name, banner, url) {
        this.navCtrl.push('ComicsPage', {
            name: name,
            banner: banner,
            url: url,
        });
    };
    //点击到顶部
    TodayPage.prototype.tapEvent = function (e) {
        this.content.scrollToTop();
    };
    TodayPage.prototype.ionViewDidLoad = function () {
        this.pubilcService.presentLoadingDefault();
        var _thst = this;
        var link = $("<iframe/>");
        link.attr('id', 'ikmtoday');
        link.attr('src', "http://m.57mh.com/rank/");
        link.appendTo('body');
        var oframe = $("#ikmtoday");
        oframe[0].onload = function () {
            var ifobj = oframe.contents();
            oframe[0].src = 'about:blank';
            oframe.remove();
            var ele = ifobj.find("#data_list li ");
            ele.each(function (index) {
                var iobj = {}, ot = $(this);
                var oimg = ot.find('img');
                iobj['name'] = oimg.attr('alt');
                iobj['bannerimg'] = oimg.attr('data-src');
                //alert(iobj['bannerimg']);
                iobj['url'] = 'http://m.57mh.com' + ot.find('a').eq(0).attr('href');
                var odd = ot.find('dd');
                iobj['len'] = odd.eq(2).text();
                iobj['up'] = odd.eq(3).text();
                _thst.allpage.push(iobj);
            });
            _thst.data = _thst.allpage;
            _thst.pubilcService.presentLoadingDismiss();
        };
    };
    TodayPage.prototype.ionViewWillLeave = function () {
        var ifs = $("#ikmtoday");
        ifs[0].src = 'about:blank';
        ifs.remove();
    };
    return TodayPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
], TodayPage.prototype, "content", void 0);
TodayPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-today',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/today/today.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n\n    <ion-navbar color="fff">\n        <ion-title>今日排行</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <section class="today_list" *ngFor="let item of data; let i = index" (click)="open(item.name, item.bannerimg, item.url);">\n        <span class="nu">{{i+1}}</span>\n        <img [src]="item.bannerimg" />\n        <div class="dec">\n            <h5>{{item.name}}</h5>\n            <p>更新至：{{item.len}}</p>\n            <p>更新于：{{item.up}}</p>\n        </div>\n    </section>\n\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/today/today.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], TodayPage);

//# sourceMappingURL=today.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map