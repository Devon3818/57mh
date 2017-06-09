webpackJsonp([2],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]
        ]
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, pubilcService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pubilcService = pubilcService;
        this.page = 1;
        this.data = [];
        this.allpages = [];
        this.searchval = '';
    }
    SearchPage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            //alert(val.trim());
            this.searchval = val.trim();
            this.runframe();
        }
    };
    SearchPage.prototype.creatFrame = function () {
        this.pubilcService.presentLoadingDefault();
        var link = $("<iframe/>");
        link.attr('id', 'ikmsearch');
        link.attr('src', "http://m.57mh.com/search/q_" + this.searchval + "-p-" + this.page);
        link.appendTo('body');
        var _that = this;
        var iframe = $("#ikmsearch");
        iframe[0].onload = function () {
            var ifobj = iframe.contents();
            iframe[0].src = 'about:blank';
            iframe.remove();
            var ele = ifobj.find("#data_list li");
            ele.each(function (index) {
                var iobj = {}, ot = $(this);
                iobj['name'] = ot.find('h3').text();
                iobj['bannerimg'] = ot.find('.thumb img').attr('data-src');
                //alert(iobj['bannerimg']);
                iobj['url'] = 'http://m.57mh.com' + ot.find('a').eq(0).attr('href');
                iobj['len'] = ot.find('dd').eq(2).text();
                _that.allpages.push(iobj);
            });
            _that.data = _that.allpages;
            _that.pubilcService.presentLoadingDismiss();
        };
    };
    SearchPage.prototype.runframe = function () {
        this.creatFrame();
    };
    ;
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.creatFrame();
        this.itimer = setTimeout(function () {
            clearTimeout(_this.itimer);
            infiniteScroll.complete();
        }, 1000);
    };
    SearchPage.prototype.open = function (name, banner, url) {
        this.navCtrl.push('ComicsPage', {
            name: name,
            banner: banner,
            url: url,
        });
    };
    SearchPage.prototype.ionViewWillLeave = function () {
        var ifs = $("#ikmsearch");
        ifs[0].src = 'about:blank';
        ifs.remove();
    };
    //点击到顶部
    SearchPage.prototype.tapEvent = function (e) {
        this.content.scrollToTop();
    };
    return SearchPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Content */])
], SearchPage.prototype, "content", void 0);
SearchPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/search/search.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n\n    <ion-navbar color="fff">\n        <ion-title>\n            搜索\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-searchbar (ionInput)="getItems($event)" debounce="500" showCancelButton="true" placeholder="作者／漫画" animated="true"></ion-searchbar>\n\n    <section class="wrap">\n\n        <div class="mh" *ngFor="let item of data" (click)="open(item.name, item.bannerimg, item.url);">\n            <div class="mh-img" [style.background]="\'url(\'+item.bannerimg+\')\'"></div>\n            <p>{{item.name}}</p>\n            <span>{{item.len}}</span>\n        </div>\n\n    </section>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map