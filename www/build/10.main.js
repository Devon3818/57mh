webpackJsonp([10],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collect__ = __webpack_require__(276);
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
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
    function CollectPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    CollectPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    CollectPage.prototype.search = function () {
        this.navCtrl.push('SearchPage');
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-collect',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/collect/collect.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n    <ion-navbar color="fff">\n        <img (click)="openMenu();" class="headers" src="https://avatars0.githubusercontent.com/u/11835988?v=3&s=460" />\n        <ion-title>我的收藏</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="search();">\n              <ion-icon name="ios-search"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <section class="wrap">\n\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/bcover/2013/3/151540589_h.jpg\')"></div>\n            <p>一拳超人</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/jueshitangmen.jpg\')"></div>\n            <p>斗罗大陆2绝世唐门</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/chuanyuexiyuan3000hou.jpg\')"></div>\n            <p>穿越西元3000后</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/shayuhaizhige.jpg\')"></div>\n            <p>砂与海之歌</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/xuezujinyu.jpg\')"></div>\n            <p>血族禁域</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/heizhishi.jpg\')"></div>\n            <p>黑执事</p>\n            <span>更新至116话</span>\n        </div>\n\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/bcover/2013/3/151540589_h.jpg\')"></div>\n            <p>一拳超人</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/jueshitangmen.jpg\')"></div>\n            <p>斗罗大陆2绝世唐门</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/chuanyuexiyuan3000hou.jpg\')"></div>\n            <p>穿越西元3000后</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/shayuhaizhige.jpg\')"></div>\n            <p>砂与海之歌</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/xuezujinyu.jpg\')"></div>\n            <p>血族禁域</p>\n            <span>更新至116话</span>\n        </div>\n        <div class="mh">\n            <div class="mh-img" style="background: url(\'http://i.57mh.com/Uploads/vip/heizhishi.jpg\')"></div>\n            <p>黑执事</p>\n            <span>更新至116话</span>\n        </div>\n    </section>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/collect/collect.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */]])
], CollectPage);

//# sourceMappingURL=collect.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map