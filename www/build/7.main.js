webpackJsonp([7],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_code_push__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, menuCtrl, pubilcService, codePush) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.pubilcService = pubilcService;
        this.codePush = codePush;
        this.data = {
            'tj': [],
            'rm': [],
            'gm': [],
            'new': [],
            'banner': []
        };
        this.Swiperobj = null;
        this.itimer = null;
        this.codePush.sync().subscribe(function (syncStatus) { return console.log(syncStatus); });
        this.pubilcService.presentLoadingDefault();
    }
    HomePage.prototype.openMenu = function () {
        this.navCtrl.push('LoginPage');
        //this.menuCtrl.open();
    };
    HomePage.prototype.open = function (name, banner, url) {
        this.navCtrl.push('ComicsPage', {
            name: name,
            banner: banner,
            url: url,
        });
    };
    HomePage.prototype.search = function () {
        this.navCtrl.push('SearchPage');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var link = $("<iframe/>");
        link.attr('id', 'ikmhome');
        link.attr('src', "http://m.57mh.com");
        link.appendTo('body');
        var _thst = this;
        var pages = {
            'tj': [],
            'rm': [],
            'gm': [],
            'new': [],
            'banner': []
        };
        var oframe = $("#ikmhome");
        oframe[0].onload = function () {
            var ifobj = oframe.contents();
            oframe[0].src = 'about:blank';
            oframe.remove();
            var ibanner = ifobj.find('.swiper-slide');
            ibanner.each(function (index) {
                var iobj = {}, ot = $(this);
                iobj['banner'] = ot.find('img').attr('src');
                iobj['name'] = ot.find('h2').text();
                iobj['url'] = 'http://m.57mh.com/' + ot.find('a').attr('href');
                pages['banner'].push(iobj);
            });
            _thst.data['banner'] = pages['banner'];
            var tuijian = ifobj.find("#main-jinrituijian li");
            tuijian.each(function (index) {
                var iobj = {}, ot = $(this);
                iobj['name'] = ot.find('img').attr('alt');
                iobj['bannerimg'] = ot.find('img').attr('src');
                iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
                iobj['len'] = ot.find('p').text();
                pages['tj'].push(iobj);
            });
            _thst.data['tj'] = pages['tj'];
            var remen = ifobj.find("#main-rimanlianzai li");
            remen.each(function (index) {
                var iobj = {}, ot = $(this);
                iobj['name'] = ot.find('img').attr('alt');
                iobj['bannerimg'] = ot.find('img').attr('src');
                iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
                iobj['len'] = ot.find('p').text();
                pages['rm'].push(iobj);
            });
            _thst.data['rm'] = pages['rm'];
            var gm = ifobj.find("#main-guomanlianzai li");
            gm.each(function (index) {
                var iobj = {}, ot = $(this);
                iobj['name'] = ot.find('img').attr('alt');
                iobj['bannerimg'] = ot.find('img').attr('src');
                iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
                iobj['len'] = ot.find('p').text();
                pages['gm'].push(iobj);
            });
            _thst.data['gm'] = pages['gm'];
            var inew = ifobj.find("#main-shangjia li");
            inew.each(function (index) {
                var iobj = {}, ot = $(this);
                iobj['name'] = ot.find('img').attr('alt');
                iobj['bannerimg'] = ot.find('img').attr('src');
                iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
                iobj['len'] = ot.find('p').text();
                pages['new'].push(iobj);
            });
            _thst.data['new'] = pages['new'];
            _thst.itimer = setTimeout(function () {
                clearTimeout(_thst.itimer);
                _thst.Swiperobj = new Swiper('.swiper-container', {
                    loop: true,
                    autoplay: 3000,
                });
            }, 1000);
            _thst.pubilcService.presentLoadingDismiss();
        };
    };
    //点击到顶部
    HomePage.prototype.tapEvent = function (e) {
        this.content.scrollToTop();
    };
    return HomePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/home/home.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n    <ion-navbar color="fff">\n        <img (click)="openMenu();" class="headers" src="https://avatars0.githubusercontent.com/u/11835988?v=3&s=460" />\n        <ion-title>推荐</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="search();">\n              <ion-icon name="ios-search"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <!--<iframe id="ikmhome" src="http://m.57mh.com"></iframe>-->\n    <!-- Swiper -->\n    <div class="swiper-container">\n        <div class="swiper-wrapper">\n            <div (click)="open(item.name, item.banner, item.url);" class="swiper-slide" *ngFor="let item of data.banner" [style.background]="\'url(\'+item.banner+\')\'">\n                <p class="islide-p">{{item.name}}</p>\n            </div>\n        </div>\n    </div>\n\n    <section class="wrap">\n        <h6 class="title">今日推荐的漫画 (=・ω・=)</h6>\n\n        <div class="mh" *ngFor="let item of data.tj" (click)="open(item.name, item.bannerimg, item.url);">\n            <div class="mh-img" [style.background]="\'url(\'+item.bannerimg+\')\'"></div>\n            <p>{{item.name}}</p>\n            <span>{{item.len}}</span>\n        </div>\n\n\n        <i class="bar"></i>\n\n        <h6 class="title">热门连载日漫 (๑•̀ㅂ•́)و✧</h6>\n\n        <div class="mh" *ngFor="let item of data.rm" (click)="open(item.name, item.bannerimg, item.url);">\n            <div class="mh-img" [style.background]="\'url(\'+item.bannerimg+\')\'"></div>\n            <p>{{item.name}}</p>\n            <span>{{item.len}}</span>\n        </div>\n\n\n        <i class="bar"></i>\n\n        <h6 class="title">热门连载国漫 ( ˘ ³˘)♥ </h6>\n\n        <div class="mh" *ngFor="let item of data.gm" (click)="open(item.name, item.bannerimg, item.url);">\n            <div class="mh-img" [style.background]="\'url(\'+item.bannerimg+\')\'"></div>\n            <p>{{item.name}}</p>\n            <span>{{item.len}}</span>\n        </div>\n\n        <i class="bar"></i>\n\n        <h6 class="title">最新上架漫画 (ง •_•)ง</h6>\n\n        <div class="mh" *ngFor="let item of data.new" (click)="open(item.name, item.bannerimg, item.url);">\n            <div class="mh-img" [style.background]="\'url(\'+item.bannerimg+\')\'"></div>\n            <p>{{item.name}}</p>\n            <span>{{item.len}}</span>\n        </div>\n\n    </section>\n\n    <p class="no-data"> ------ 数据来源于57漫画网 ------</p>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_code_push__["a" /* CodePush */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map