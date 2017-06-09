webpackJsonp([4],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pop_over__ = __webpack_require__(282);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOverPageModule", function() { return PopOverPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopOverPageModule = (function () {
    function PopOverPageModule() {
    }
    return PopOverPageModule;
}());
PopOverPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pop_over__["a" /* PopOverPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pop_over__["a" /* PopOverPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__pop_over__["a" /* PopOverPage */]
        ]
    })
], PopOverPageModule);

//# sourceMappingURL=pop-over.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopOverPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopOverPage = (function () {
    function PopOverPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.mod = this.navParams.data._that;
        this.pthis = this.navParams.data.pthis;
    }
    PopOverPage.prototype.close = function (data) {
        this.mod(data, this.pthis);
        this.viewCtrl.dismiss();
    };
    return PopOverPage;
}());
PopOverPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-pop-over',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/pop-over/pop-over.html"*/'<ion-content>\n    <ion-list>\n        <button ion-item (click)="close( \'id\' );">\n          最新发布\n        </button>\n        <button ion-item (click)="close( \'addtime\' );">\n          最近更新\n        </button>\n        <button ion-item (click)="close( \'hits\' );">\n          人气最旺\n        </button>\n        <button ion-item (click)="close( \'gold\' );">\n          评分最高\n        </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/pop-over/pop-over.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], PopOverPage);

//# sourceMappingURL=pop-over.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map