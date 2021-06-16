webpackJsonp([0],{

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(522);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ContactPageModule = class ContactPageModule {
};
ContactPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
        ],
    })
], ContactPageModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ContactPage = class ContactPage {
    constructor(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ContactPage');
    }
};
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Abdulqadir\Desktop\ionic2\MY_FINAL_YEAR - Copy\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Contact Us</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card-content>\n\n      \n\n    <div id="formPadding">\n\n    </div>\n\n    <form  id="login-form"  color="primary">\n\n      <ion-card-header id="login-header">\n\n        <ion-label id="login-title">Contact Us</ion-label>\n\n      </ion-card-header>\n\n\n\n\n\n      <ion-item class="input"> \n\n        <ion-label floating color="primary">Full Name :</ion-label>     \n\n        <ion-input type="text" [(ngModel)]="user.name" name="name" required minlength="3" [(ngModel)]="user.name" #name="ngModel" pattern="[A-Za-z]+"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">\n\n           <div *ngIf="name.errors.required" class="error">\n\n            Name is required.\n\n           </div>\n\n            \n\n             <div *ngIf="name.errors?.pattern" class="error">\n\n                Name should contain only alphabets\n\n             </div>\n\n           \n\n            <div *ngIf="name.errors.minlength" class="error">\n\n            Name must be at least 3 characters long.\n\n            </div>\n\n        </div>\n\n  \n\n  \n\n      <ion-item class="input"> \n\n        <ion-label floating color="primary">Email address :</ion-label>     \n\n        <ion-input type="text" [(ngModel)]="user.email" name="email" required email  #email="ngModel" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="emailError && (email.dirty || email.touched)" class="alert alert-danger">\n\n        <div class="error">\n\n          {{emailError}}\n\n         </div>\n\n     </div>\n\n    \n\n      <div  *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">\n\n          <div *ngIf="email.errors.required" class="error">\n\n            Email is required.\n\n          </div>\n\n  \n\n          <div *ngIf="email.errors?.pattern" class="error">\n\n            This is not a valid Email Address \n\n          </div>\n\n      </div>\n\n  \n\n  \n\n      <ion-item  class="input">\n\n        <ion-label position="floating">Your Message: </ion-label>\n\n        <ion-textarea  [(ngModel)]="user.message" name="message" required minlength="3" autosize #message="ngModel" pattern="[A-Za-z]+"></ion-textarea>\n\n      </ion-item>\n\n      <div  *ngIf="message.invalid && (message.dirty || message.touched)" class="alert alert-danger">\n\n        <div *ngIf="message.errors.required" class="error">\n\n         Message is required.\n\n        </div>\n\n         \n\n          <div *ngIf="message.errors?.pattern" class="error">\n\n            Message seems to contain some odd characters\n\n          </div>\n\n        \n\n         <div *ngIf="message.errors.minlength" class="error">\n\n         message should be at least 3 characters long.\n\n         </div>\n\n     </div>\n\n\n\n  \n\n      <ion-item class="buttons"> \n\n        <button class="button" ion-button *ngIf="name.invalid" id="invalid" end>Send Message</button>\n\n        <button  class="button" ion-button *ngIf="name.valid" (click)="sendMessage(user)">Send Message</button>\n\n      </ion-item>\n\n    \n\n     \n\n    </form>\n\n  \n\n\n\n  </ion-card-content>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Abdulqadir\Desktop\ionic2\MY_FINAL_YEAR - Copy\src\pages\contact\contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=0.js.map