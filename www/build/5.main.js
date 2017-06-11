webpackJsonp([5],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record__ = __webpack_require__(297);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordPageModule", function() { return RecordPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecordPageModule = (function () {
    function RecordPageModule() {
    }
    return RecordPageModule;
}());
RecordPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__record__["a" /* RecordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__record__["a" /* RecordPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__record__["a" /* RecordPage */]
        ]
    })
], RecordPageModule);

//# sourceMappingURL=record.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordPage = (function () {
    function RecordPage(navCtrl, navParams, pubilcService, http, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pubilcService = pubilcService;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.data = [];
        this.menuCtrl.close();
        this.getdata();
    }
    RecordPage.prototype.getdata = function () {
        var _this = this;
        this.pubilcService.presentLoadingDefault();
        var url = "http://www.devonhello.com/buka/getrecord";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.pubilcService.user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.pubilcService.presentLoadingDismiss();
            _this.data = res.json();
        });
    };
    RecordPage.prototype.open = function (name, banner, url) {
        this.navCtrl.push('ComicsPage', {
            name: name,
            banner: banner,
            url: url,
        });
    };
    //点击到顶部
    RecordPage.prototype.tapEvent = function (e) {
        this.content.scrollToTop();
    };
    return RecordPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
], RecordPage.prototype, "content", void 0);
RecordPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-record',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/record/record.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n\n    <ion-navbar color="fff">\n        <ion-title>浏览记录</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <section class="wrap">\n\n        <div class="mh" *ngFor="let item of data" (click)="open(item.bookname, item.bookbanner, item.mhurl);">\n            <div class="mh-img" [style.background]="\'url(\'+item.bookbanner+\')\'"></div>\n            <p>{{item.bookname}}</p>\n            <span>{{item.bookpages}}</span>\n        </div>\n\n    </section>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/record/record.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], RecordPage);

//# sourceMappingURL=record.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map