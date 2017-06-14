webpackJsonp([8],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new__ = __webpack_require__(294);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewPageModule = (function () {
    function NewPageModule() {
    }
    return NewPageModule;
}());
NewPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__new__["a" /* NewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new__["a" /* NewPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__new__["a" /* NewPage */]
        ]
    })
], NewPageModule);

//# sourceMappingURL=new.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPage = (function () {
    function NewPage(navCtrl, navParams, menuCtrl, pubilcService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.pubilcService = pubilcService;
        this.data = [];
        this.pubilcService.presentLoadingDefault();
    }
    NewPage.prototype.ionViewDidLoad = function () {
        var _thst = this;
        var pages = [];
        var link = $("<iframe/>");
        link.attr('id', 'ikmnew');
        link.attr('src', "http://m.57mh.com/latest/");
        link.appendTo('body');
        //document.getElementById("ikmnew").src = "http://m.57mh.com/list/order-hits";
        var oframe = $("#ikmnew");
        oframe[0].onload = function () {
            var ifobj = oframe.contents();
            oframe[0].src = 'about:blank';
            oframe.remove();
            var ele = ifobj.find(".cont-list #data_list li");
            ele.each(function (index) {
                var iobj = {}, ot = $(this);
                iobj['name'] = ot.find('h3').text();
                iobj['bannerimg'] = ot.find('.thumb img').attr('data-src');
                //alert(iobj['bannerimg']);
                iobj['url'] = 'http://m.57mh.com' + ot.find('a').eq(0).attr('href');
                iobj['len'] = ot.find('dd').eq(2).text();
                pages.push(iobj);
            });
            _thst.data = pages;
            _thst.pubilcService.presentLoadingDismiss();
        };
    };
    NewPage.prototype.open = function (name, banner, url) {
        this.navCtrl.push('ComicsPage', {
            name: name,
            banner: banner,
            url: url,
        });
    };
    NewPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    NewPage.prototype.search = function () {
        this.navCtrl.push('SearchPage');
    };
    //点击到顶部
    NewPage.prototype.tapEvent = function (e) {
        this.content.scrollToTop();
    };
    return NewPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
], NewPage.prototype, "content", void 0);
NewPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-new',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/new/new.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n    <ion-navbar color="fff">\n        <img (click)="openMenu();" class="headers" src="https://avatars0.githubusercontent.com/u/11835988?v=3&s=460" />\n        <ion-title>最新上架</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="search();">\n              <ion-icon name="ios-search"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <section class="wrap">\n        <h6 class="title">最新更新</h6>\n\n        <div class="mh" *ngFor="let item of data" (click)="open(item.name, item.bannerimg, item.url);">\n            <div class="mh-img" [style.background]="\'url(\'+item.bannerimg+\')\'"></div>\n            <p>{{item.name}}</p>\n            <span>(新){{item.len}}</span>\n        </div>\n\n    </section>\n    <!--<iframe id="ikmnew" src="http://m.57mh.com/latest/"></iframe>-->\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/new/new.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */]])
], NewPage);

//# sourceMappingURL=new.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map