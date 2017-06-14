webpackJsonp([15],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(287);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
        ]
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, pubilcService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.pubilcService = pubilcService;
        this.menuCtrl = menuCtrl;
        this.Version = '';
        this.Version = this.pubilcService.Version;
        this.menuCtrl.close();
    }
    return AboutPage;
}());
AboutPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/about/about.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n\n    <ion-navbar color="fff">\n        <ion-title>关于57漫画</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <img class="banner" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496160217903&di=a775e7beb6fb0a81d7dd6666c4037196&imgtype=0&src=http%3A%2F%2Fpic.yesky.com%2FuploadImages%2F2014%2F345%2F07%2FK08Z64L055I5.jpg" />\n    <section class="dec">\n\n        <p>57漫画网是一家非商业性的分享交流网站，我们的本意是立足于漫画爱好者研究漫画技巧和构图方式，不仅是一个提供宣传推广全世界各种不同漫画文化的分享交流平台，更致力于推动和发展国内原创动漫。</p>\n        <p>因为网络文化作品传播受地域性、空间性等等限制，57漫画网绝大部分漫画作品均来自网友的制作分享和上传，本站未及一一审核，同时由于信息的不对称，我们在逐步建立一个版权清晰的作品库上有一定难度。所以在这里本站再次重申，如果您是版权作者或机构，对本站网友分享上传了您的作品有任何异议，请提供相关作品的版权证明，并立即联系我们删除。我们保证在第一时间内回复并按照您的要求作出相应调整！为此给您带来的不便，敬请谅解！</p>\n        <p>57漫画网网由衷地认识到知识产权是人类社会的重要财富，我们会尽一切所能在最大范围内保证版权人行使权利,保护版权人的合法利益，我们愿为优秀漫画作品的宣传推广做出应有的贡献，愿和所有漫画作品权利人共同耕耘，欢迎洽谈合作！</p>\n        <p>GITHUB：<a href="https://github.com/kongdewen1994/57mh">https://github.com/kongdewen1994/57mh</a></p>\n    </section>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar color="fff">\n        <ion-title>当前版本：V{{Version}}</ion-title>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map