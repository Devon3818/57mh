webpackJsonp([3],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regist__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistPageModule", function() { return RegistPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistPageModule = (function () {
    function RegistPageModule() {
    }
    return RegistPageModule;
}());
RegistPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__regist__["a" /* RegistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__regist__["a" /* RegistPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__regist__["a" /* RegistPage */]
        ]
    })
], RegistPageModule);

//# sourceMappingURL=regist.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(195);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistPage = (function () {
    function RegistPage(navCtrl, navParams, pubilcService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pubilcService = pubilcService;
        this.http = http;
        this.name = '';
        this.pass = '';
        this.nickname = '';
    }
    RegistPage.prototype.logon = function () {
        var _this = this;
        if (!this.name || !this.pass || !this.nickname) {
            return true;
        }
        var url = "http://www.devonhello.com/buka/regist";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "name=" + this.name + "&pass=" + this.pass + "&nickname=" + this.nickname, {
            headers: headers
        })
            .subscribe(function (res) {
            if (res.json()[0]['_id']) {
                _this.navCtrl.popToRoot();
            }
            else {
                //用户重复／系统错误
            }
        });
    };
    return RegistPage;
}());
RegistPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-regist',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/regist/regist.html"*/'<ion-header no-border>\n\n    <ion-navbar color="fff">\n        <ion-title>注册</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list inset>\n\n        <ion-item>\n            <ion-label>&nbsp;&nbsp;账号:</ion-label>\n            <ion-input type="text" [(ngModel)]="name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>&nbsp;&nbsp;昵称:</ion-label>\n            <ion-input type="text" [(ngModel)]="nickname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>&nbsp;&nbsp;密码:</ion-label>\n            <ion-input type="password" [(ngModel)]="pass"></ion-input>\n        </ion-item>\n\n    </ion-list>\n    <br/>\n    <br/>\n    <br/>\n    <br/>\n    <button ion-button color="danger" full round (click)="logon();">注册</button>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/regist/regist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]])
], RegistPage);

//# sourceMappingURL=regist.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map