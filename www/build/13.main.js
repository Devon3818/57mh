webpackJsonp([13],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collect__ = __webpack_require__(285);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectPageModule", function() { return CollectPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CollectPageModule = (function () {
    function CollectPageModule() {
    }
    return CollectPageModule;
}());
CollectPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__collect__["a" /* CollectPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__collect__["a" /* CollectPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__collect__["a" /* CollectPage */]
        ]
    })
], CollectPageModule);

//# sourceMappingURL=collect.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollectPage = (function () {
    function CollectPage(navCtrl, navParams, menuCtrl, pubilcService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.pubilcService = pubilcService;
        this.http = http;
        this.data = [];
        this.pubilcService.presentLoadingDefault();
    }
    CollectPage.prototype.getclooect = function () {
        var _this = this;
        var url = "http://www.devonhello.com/buka/getcollect";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.pubilcService.user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = res.json();
            _this.pubilcService.presentLoadingDismiss();
        });
    };
    CollectPage.prototype.openMenu = function () {
        if (this.pubilcService.user._id) {
            this.menuCtrl.open();
        }
        else {
            this.navCtrl.push('LoginPage');
        }
    };
    CollectPage.prototype.ionViewDidEnter = function () {
        this.getclooect();
    };
    CollectPage.prototype.search = function () {
        this.navCtrl.push('SearchPage');
    };
    CollectPage.prototype.open = function (name, banner, url) {
        this.navCtrl.push('ComicsPage', {
            name: name,
            banner: banner,
            url: url,
        });
    };
    //点击到顶部
    CollectPage.prototype.tapEvent = function (e) {
        this.content.scrollToTop();
    };
    return CollectPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Content */])
], CollectPage.prototype, "content", void 0);
CollectPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-collect',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/collect/collect.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n    <ion-navbar color="fff">\n        <img (click)="openMenu();" class="headers" src="https://avatars0.githubusercontent.com/u/11835988?v=3&s=460" />\n        <ion-title>我的收藏</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="search();">\n              <ion-icon name="ios-search"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <section class="wrap">\n\n        <div class="mh" *ngFor="let item of data">\n            <div class="mh-img" (click)="open(item.bookname, item.bookbanner, item.url);" [style.background]="\'url(\'+item.bookbanner+\')\'"></div>\n            <p>{{item.bookname}}</p>\n            <span>更新至:{{item.bookpages}}</span>\n            <span>时间:{{item.booktime}}</span>\n        </div>\n\n    </section>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/collect/collect.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]])
], CollectPage);

//# sourceMappingURL=collect.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map