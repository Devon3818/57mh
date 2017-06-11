webpackJsonp([2],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__see__ = __webpack_require__(300);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeePageModule", function() { return SeePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeePageModule = (function () {
    function SeePageModule() {
    }
    return SeePageModule;
}());
SeePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__see__["a" /* SeePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__see__["a" /* SeePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__see__["a" /* SeePage */]
        ]
    })
], SeePageModule);

//# sourceMappingURL=see.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_public__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SeePage = (function () {
    function SeePage(navCtrl, iab, pubilcService, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.pubilcService = pubilcService;
        this.navParams = navParams;
        this.imgs = 'http://im1.56zzw.com/7/2225.jpg';
        this.isshow = false;
        this.open(this.navParams.get('url'));
    }
    SeePage.prototype.open = function (url) {
        var _this = this;
        this.br = this.iab.create('http://m.57mh.com' + url, '_blank', 'location=no,hardwareback=no');
        this.pubilcService.br = this.br;
        this.br.on('loadstart').subscribe(function () {
            _this.br.hide();
        });
        this.br.on('exit').subscribe(function () {
            if (_this.isshow) {
                _this.navCtrl.pop();
            }
        });
        this.br.on('loaderror').subscribe(function () {
            alert('加载出错...');
        });
        this.br.on('loadstop').subscribe(function () {
            _this.br.insertCSS({ code: "body {display: block;" });
            var jscode = "$('body').children().css('display','none'); $('.title').css('display','block'); $('.main-bar').css('display','block'); $('#mangaTitle a').attr('href',''); var allpage = $('#pageNo').text().split('/')[1];  var ihtml = ''; var iurl = 'http://' + window.location.host + window.location.pathname + '?p='; for(var i=0; i<allpage; i++){ var ips = i+1; ihtml+='<a class=\"dv_a\" href=\"' + iurl+ ips + '\">'+ ips +' 页</a>'; }; $('body').append(ihtml+'<i class=\"dv_bar\"></i>');";
            _this.br.executeScript({ code: jscode });
            _this.br.insertCSS({ code: ".dv_bar { clear: both; width: 100px; height: 20px; display: block; } .dv_a { float: left; display: block; padding: 20px; } #pb {width: 100% !important;} #pb a {display: none !important;}" });
            _this.br.show();
            _this.isshow = true;
        });
    };
    return SeePage;
}());
SeePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-see',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/see/see.html"*/'<ion-content>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/see/see.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_3__service_public__["a" /* pubilcService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SeePage);

//# sourceMappingURL=see.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map