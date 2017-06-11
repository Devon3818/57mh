webpackJsonp([14],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classify__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifyPageModule", function() { return ClassifyPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassifyPageModule = (function () {
    function ClassifyPageModule() {
    }
    return ClassifyPageModule;
}());
ClassifyPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__classify__["a" /* ClassifyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__classify__["a" /* ClassifyPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__classify__["a" /* ClassifyPage */]
        ]
    })
], ClassifyPageModule);

//# sourceMappingURL=classify.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifyPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClassifyPage = (function () {
    function ClassifyPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    ClassifyPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    ClassifyPage.prototype.search = function () {
        this.navCtrl.push('SearchPage');
    };
    ClassifyPage.prototype.openClassifyData = function (title, or) {
        this.navCtrl.push('ComicsDataPage', {
            title: title,
            or: or
        });
    };
    //点击到顶部
    ClassifyPage.prototype.tapEvent = function (e) {
        this.content.scrollToTop();
    };
    return ClassifyPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
], ClassifyPage.prototype, "content", void 0);
ClassifyPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-classify',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/classify/classify.html"*/'<ion-header no-border (tap)="tapEvent($event)">\n    <ion-navbar color="fff">\n        <img (click)="openMenu();" class="headers" src="https://avatars0.githubusercontent.com/u/11835988?v=3&s=460" />\n        <ion-title>漫画分类</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="search();">\n              <ion-icon name="ios-search"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <section class="classifys" (click)="openClassifyData(\'日本\',\'日本\');">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/bcover/2012/12/252206261_h.jpg\')"></div>\n        <p>日本</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'港台\',\'港台\');">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/manhuaxiaotuku/2016-02-06/20162610401947204.jpg\')"></div>\n        <p>港台</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'欧美\',\'欧美\');">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/webpic/16/00chaojizhizhu1022.jpg\')"></div>\n        <p>欧美</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'韩国\',\'韩国\');">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/bcover/2013/8/061157498_h.jpg\')"></div>\n        <p>韩国</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'国产\',\'国产\');">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vod/2017-05-25/5925ccda8f89e.jpg\')"></div>\n        <p>国产</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'热血\',1);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/jinjidejuren.jpg\')"></div>\n        <p>热血</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'武侠\',2);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/fengmian/720481.jpg\')"></div>\n        <p>武侠</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'搞笑\',3);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/bcover/2012/12/281619206_h.jpg\')"></div>\n        <p>搞笑</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'耽美\',4);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/heizhishi.jpg\')"></div>\n        <p>耽美</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'爱情\',5);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/wodeshuangxiudaolv.jpg\')"></div>\n        <p>爱情</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'科幻\',6);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/kunbingzhilong.jpg\')"></div>\n        <p>科幻</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'魔法\',7);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/webpic/9/170511legend.jpg\')"></div>\n        <p>魔法</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'神魔\',8);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/dongjingshishigui.jpg\')"></div>\n        <p>神魔</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'竞技\',9);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/xingmengouxiangjihua.jpg\')"></div>\n        <p>竞技</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'格斗\',10);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/webpic/16/qiuyujingying.jpg\')"></div>\n        <p>格斗</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'机战\',11);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/img/webpic/19/1024118591482917357.jpg\')"></div>\n        <p>机战</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'体育\',12);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/bcover/2012/12/262103255_h.jpg\')"></div>\n        <p>体育</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'运动\',13);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/manhuaxiaotuku/2015-09-16/201591612112385251.jpg\')"></div>\n        <p>运动</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'校园\',14);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/bcover/2012/12/252229268_h.jpg\')"></div>\n        <p>校园</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'励志\',15);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/mingxingjinpaixiaozhuli.jpg\')"></div>\n        <p>励志</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'历史\',16);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/pic/2015/07/02/ee9555ae5aba455a91e844ed93f73439.jpg\')"></div>\n        <p>历史</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'伪娘\',17);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/qishimofa.jpg\')"></div>\n        <p>伪娘</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'百合\',18);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/xuanjici.jpg\')"></div>\n        <p>百合</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'后宫\',19);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/qunxiazhishen.jpg\')"></div>\n        <p>后宫</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'治愈\',20);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/manhuaxiaotuku/2016-02-03/20162320485490646.jpg\')"></div>\n        <p>治愈</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'美食\',21);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/bcover/2013/8/221152484_h.jpg\')"></div>\n        <p>美食</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'推理\',22);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/bcover/2012/12/261802199_h.jpg\')"></div>\n        <p>推理</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'悬疑\',23);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/img/webpic/3/1016819631493374978.jpg\')"></div>\n        <p>悬疑</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'恐怖\',24);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/img/webpic/12/1041456121492155329.jpg\')"></div>\n        <p>恐怖</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'职场\',25);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/webpic/6/shezekezhangdemniang.jpg\')"></div>\n        <p>职场</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'BL\',26);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/fengmian/772801.jpg\')"></div>\n        <p>BL</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'剧情\',27);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/works/vertical/57f2517d4d76c.webp\')"></div>\n        <p>剧情</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'生活\',28);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/baiyelinglong.jpg\')"></div>\n        <p>生活</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'幻想\',29);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/vip/tianzhongshinianling.jpg\')"></div>\n        <p>幻想</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'战争\',30);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/bcover/2012/12/262050071_h.jpg\')"></div>\n        <p>战争</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'仙侠\',33);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/webpic/1/tashimofashaonv.png\')"></div>\n        <p>仙侠</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'性转换\',40);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/webpic/9/shuzhihunzhiwulieren.jpg\')"></div>\n        <p>性转换</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'冒险\',41);">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/webpic/10/lurennvzhudeyangchengfangfagirlssidefengmianl.jpg\')"></div>\n        <p>冒险</p>\n    </section>\n    <section class="classifys" (click)="openClassifyData(\'其他\',\'其他\');">\n        <div class="classimg" style="background: url(\'http://i.57mh.com/Uploads/webpic/18/godfingerxunfengmianl.jpg\')"></div>\n        <p>其他</p>\n    </section>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/classify/classify.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], ClassifyPage);

//# sourceMappingURL=classify.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map