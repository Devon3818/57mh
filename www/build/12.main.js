webpackJsonp([12],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comics_data__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsDataPageModule", function() { return ComicsDataPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComicsDataPageModule = (function () {
    function ComicsDataPageModule() {
    }
    return ComicsDataPageModule;
}());
ComicsDataPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comics_data__["a" /* ComicsDataPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comics_data__["a" /* ComicsDataPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comics_data__["a" /* ComicsDataPage */]
        ]
    })
], ComicsDataPageModule);

//# sourceMappingURL=comics-data.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicsDataPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComicsDataPage = (function () {
    function ComicsDataPage(navCtrl, navParams, popoverCtrl, pubilcService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.pubilcService = pubilcService;
        this.title = '';
        this.data = [];
        this.allpage = [];
        this.or = '';
        this.pages = 1;
        this.title = this.navParams.get('title');
        this.or = this.navParams.get('or');
    }
    ComicsDataPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.pages++;
        this.creatFrame();
        this.itimer = setTimeout(function () {
            clearTimeout(_this.itimer);
            infiniteScroll.complete();
        }, 1000);
    };
    ComicsDataPage.prototype.open = function (name, banner, url) {
        this.navCtrl.push('ComicsPage', {
            name: name,
            banner: banner,
            url: url,
        });
    };
    ComicsDataPage.prototype.ionViewDidLoad = function () {
        this.creatFrame();
    };
    ComicsDataPage.prototype.creatFrame = function () {
        this.pubilcService.presentLoadingDefault();
        var _thst = this;
        var iurls = '';
        if (isNaN(this.or)) {
            iurls = "http://m.57mh.com/list/area-" + this.or + '-order-hits-p-' + this.pages;
            ;
        }
        else {
            iurls = "http://m.57mh.com/list/smid-" + this.or + '-order-hits-p-' + this.pages;
            ;
        }
        var link = $("<iframe/>");
        link.attr('id', 'ikmiclass');
        link.attr('src', iurls);
        link.appendTo('body');
        var oframe = $("#ikmiclass");
        oframe[0].src = iurls;
        oframe[0].onload = function () {
            var ifobj = oframe.contents();
            oframe[0].src = 'about:blank';
            oframe.remove();
            var ele = ifobj.find("#contList li");
            ele.each(function (index) {
                var iobj = {}, ot = $(this);
                iobj['name'] = ot.find('img').attr('alt');
                iobj['bannerimg'] = ot.find('img').attr('src');
                //alert(iobj['bannerimg']);
                iobj['url'] = 'http://m.57mh.com' + ot.find('a').attr('href');
                iobj['len'] = ot.find('.tt').text();
                _thst.allpage.push(iobj);
            });
            _thst.data = _thst.allpage;
            _thst.pubilcService.presentLoadingDismiss();
        };
    };
    ComicsDataPage.prototype.ionViewWillLeave = function () {
        var ifs = $("#ikmiclass");
        ifs[0].src = 'about:blank';
        ifs.remove();
    };
    //点击到顶部
    ComicsDataPage.prototype.tapEvent = function (e) {
        this.content.scrollToTop();
    };
    return ComicsDataPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
], ComicsDataPage.prototype, "content", void 0);
ComicsDataPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-comics-data',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/comics-data/comics-data.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n\n    <ion-navbar color="fff">\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <!--<iframe id="ikmiclass" src="http://m.57mh.com"></iframe>-->\n    <section class="wrap">\n\n        <div class="mh" *ngFor="let item of data" (click)="open(item.name, item.bannerimg, item.url);">\n            <div class="mh-img" [style.background]="\'url(\'+item.bannerimg+\')\'"></div>\n            <p>{{item.name}}</p>\n            <span>{{item.len}}</span>\n        </div>\n\n    </section>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/comics-data/comics-data.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */]])
], ComicsDataPage);

//# sourceMappingURL=comics-data.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map