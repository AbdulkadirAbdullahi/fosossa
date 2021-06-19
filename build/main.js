webpackJsonp([1],{

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		521,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseURL = 'http://localhost:3000/';
/* harmony export (immutable) */ __webpack_exports__["a"] = baseURL;

//export const baseURL = 'http://192.168.43.73:3000/';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HomePage = class HomePage {
    constructor(alertCtrl, storage, navCtrl, navParams, menuCtrl, modalCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // the root left menu should be disabled on this page
        this.menuCtrl.enable(true);
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuPage');
        //  this.presentPrompt();
    }
    presentPrompt() {
        let alert = this.alertCtrl.create({
            title: 'Login',
            cssClass: "alertb",
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Username'
                },
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        this.presentPrompt();
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: data => {
                    }
                }
            ]
        });
        alert.present();
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Abdulqadir\Desktop\ionic2\MY_FINAL_YEAR - Copy\src\pages\home\home.html"*/'<ion-header class="header">\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n<!--  <button ion-button color="danger" block (click)="openSignupModal()">Signup with slider</button>\n\n-->\n\n  \n\n    <div *ngIf="modules">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12 col-lg-4 >\n\n            <ion-card id="moduleCard" color="primary-pale" (click)="moduleSelected($event, module, module.id)">\n\n  \n\n\n\n \n\n            \n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>  \n\n      </div>\n\n      <div [hidden]="modules || errMess">\n\n        <ion-spinner></ion-spinner>\n\n        <h4>Loading . . . Please Wait</h4>\n\n      </div>\n\n      <div *ngIf="errMess">\n\n        <h2>Error</h2>\n\n        <h4>{{errMess}}</h4>\n\n      </div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Abdulqadir\Desktop\ionic2\MY_FINAL_YEAR - Copy\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the CourseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let UserProvider = class UserProvider {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        console.log('Hello CourseProvider Provider');
    }
    /*
      getmodules(): Observable<Module[]> {
        return this.http.get(baseURL + 'modules')
                  .map(res => { return this.processHTTPMsgService.extractData(res); })
                  .catch(error => { return this.processHTTPMsgService.handleError(error); });
        }
        
        getmodule(id: number): Observable<Module> {
        return  this.http.get(baseURL + 'module/'+ id)
                  .map(res => { return this.processHTTPMsgService.extractData(res); })
                  .catch(error => { return this.processHTTPMsgService.handleError(error); });
        }
        */
    adduser(user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + 'user', user)
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
};
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProcessHttpmsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let ProcessHttpmsgProvider = class ProcessHttpmsgProvider {
    constructor(http) {
        this.http = http;
        console.log('Hello ProcessHttpmsgProvider Provider');
    }
    extractData(res) {
        let body = res;
        return body || {};
    }
    handleError(error) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    }
};
ProcessHttpmsgProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], ProcessHttpmsgProvider);

//# sourceMappingURL=process-httpmsg.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_baseurl__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire___ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_storage__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_user_user__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_process_httpmsg_process_httpmsg__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { AngularFireDatabaseModule } from '@angular/fire/database';





const GOOGLE_CLIENT_ID = "272483367188-aeqf15c6lhe3shfrc4alqc41cc87qlgh.apps.googleusercontent.com";
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAwWjuyWO1gI_0O2D78Gi5M60uAXy2iVb4",
    authDomain: "photoalbumudus2021.firebaseapp.com",
    projectId: "photoalbumudus2021",
    storageBucket: "photoalbumudus2021.appspot.com",
    messagingSenderId: "353886356015",
    appId: "1:353886356015:web:ec1dc64de1b12c1101fcda",
    measurementId: "G-ETFQ097MNV"
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__angular_fire___["a" /* AngularFireModule */].initializeApp(FIREBASE_CONFIG),
            __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__["b" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_fire_storage__["b" /* AngularFireStorageModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseURL */] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__angular_fire_storage__["b" /* AngularFireStorageModule */],
            __WEBPACK_IMPORTED_MODULE_16__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_storage__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_firestore__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;











let MyApp = class MyApp {
    constructor(alertCtrl, platform, statusBar, splashScreen, db, fireStorage, userservice, loadingCtrl, db2, afAuth) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.db = db;
        this.fireStorage = fireStorage;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.db2 = db2;
        this.afAuth = afAuth;
        this.user = {};
        this.downloadableURL = '';
        this.basePath = '/photoAlbum';
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation  
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    chooseFile(event) {
        if (event.target.files[0].size < 303110) {
            if (event.target.files && event.target.files[0]) {
                this.selectedFile = event.target.files[0];
                let reader = new FileReader();
                reader.onload = (event) => {
                    this.img1 = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
        else {
            let alert = this.alertCtrl.create({
                title: '<font color="green"><b> </b> The image should be less then 301KB </font>',
                cssClass: "alert",
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: data => {
                            this.selectedFile = "";
                        }
                    },
                ]
            });
            alert.present();
            this.selectedFile = "";
        } //end of else state,
    }
    async uploadFile(user) {
        if (this.selectedFile) {
            var loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                dismissOnPageChange: true,
                content: 'Data uploading in progress <br> Please Wait...'
            });
            loading.present();
            const filePath = `${this.basePath}/${user.name.trim()}`;
            this.filepath2 = filePath; // inorder to get the path to delete file
            this.task = this.fireStorage.upload(filePath, this.selectedFile);
            this.progressValue = this.task.percentageChanges(); // <<<<< Percentage of uploading is
            (await this.task).ref.getDownloadURL().then(url => {
                this.downloadableURL = url;
                user.photourl = this.downloadableURL;
                try {
                    const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.phone);
                    if (result)
                        this.afAuth.authState.take(1).subscribe(auth => {
                            this.userid = auth.uid;
                            this.db2.object('photoalbum/users/' + auth.uid).set(user)
                                .then(() => {
                                this.afAuth.auth.signOut().then(() => {
                                    let alert2 = this.alertCtrl.create({
                                        title: '<font color="green"><b> </b>Upload Successful Your unique ID = <font color="black">' + this.userid + '</font></font>',
                                        cssClass: "alert",
                                        buttons: [
                                            {
                                                text: 'Ok',
                                                role: 'cancel',
                                                handler: data => {
                                                    //  this.afAuth.auth.signOut().then(()=>{})
                                                }
                                            },
                                        ]
                                    });
                                    alert2.present();
                                    loading.dismiss();
                                });
                            });
                        }); //end db.authstarte
                    //  this.itemsRef.push({ name: user.name, email : user.email, admno: user.admno, department: user.department });
                    //  this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                    //   var  userg = firebase.auth().currentUser;
                    // userg.updateProfile({
                    // displayName: "Shanwili",
                    //photoURL: "klslsls"
                    // });
                }
                catch (error) {
                    this.emailError = error.message;
                    alert(error.message);
                    console.error(error);
                }
                //end of register 
            }); ///end of await  
        }
        else {
            let alert1 = this.alertCtrl.create({
                title: '<font color="green"><b></b>No image selected, upload without image</font>',
                cssClass: "alert",
                buttons: [
                    {
                        text: 'NO',
                        role: 'cancel',
                        handler: data => {
                        }
                    },
                    {
                        text: 'Yes Continue',
                        handler: data => {
                            var loading = this.loadingCtrl.create({
                                spinner: 'bubbles',
                                dismissOnPageChange: true,
                                content: 'Uploading data is in progress <br> Please Wait...'
                            });
                            loading.present();
                            try {
                                const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.phone);
                                if (result)
                                    this.afAuth.authState.take(1).subscribe(auth => {
                                        this.userid = auth.uid;
                                        this.db2.object('photoalbum/users/' + auth.uid).set(user)
                                            .then(() => {
                                            this.afAuth.auth.signOut().then(() => {
                                                let alert2 = this.alertCtrl.create({
                                                    title: '<font color="green"><b> </b>Upload Successful Your unique ID = <font color="black">' + this.userid + '</font></font>',
                                                    cssClass: "alert",
                                                    buttons: [
                                                        {
                                                            text: 'Ok',
                                                            role: 'cancel',
                                                            handler: data => {
                                                                //  this.afAuth.auth.signOut().then(()=>{})
                                                            }
                                                        },
                                                    ]
                                                });
                                                alert2.present();
                                                loading.dismiss();
                                            });
                                        });
                                    });
                                //end db.authstarte
                                //  this.itemsRef.push({ name: user.name, email : user.email, admno: user.admno, department: user.department });
                                //  this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                                //   var  userg = firebase.auth().currentUser;
                            }
                            catch (error) {
                                this.emailError = error.message;
                                alert(error.message);
                                console.error(error);
                            }
                            //end of register 
                        }
                    }
                ]
            });
            alert1.present();
            //   alert('No images ected');
            //    loading.present();
        } //end of else
    } //end of method
    error() {
        let alert = this.alertCtrl.create({
            title: '<font color="green"><b> </b> Full Name, State, Email, LGA, PhoneNo & Address are not optional  </font>',
            cssClass: "alert",
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: data => {
                    }
                },
            ]
        });
        alert.present();
    } //end of error
    removeFile() {
        this.img1 = "";
        this.selectedFile = "";
        /*
      \
        }
      
      */
    }
    upload(user) {
        console.log(user);
    }
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" ? _a : Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Abdulqadir\Desktop\ionic2\MY_FINAL_YEAR - Copy\src\app\app.html"*/'\n\n    \n\n    <ion-content id="content" padding>\n\n      \n\n      <img class="img" item-center src="assets/imgs/unilogo.png" alt="UDUS LOGO">\n\n      <h3 id="h">The most peaceful university in Nigeria</h3>\n\n      <h4 id="h4">Photo Album Form For CMP Class Of 2021</h4>\n\n\n\n<br>\n\n\n\n\n\n\n\n          <form  id="login-form"  color="primary" method="post">\n\n  <!-- Photo -->\n\n            <ion-item class="input">\n\n        \n\n              <ion-label  id="inputlabel">Photo :</ion-label>\n\n            \n\n                <ion-input type="file" name="inputFile"  accept="image/*" (change)="chooseFile($event)"></ion-input>\n\n            \n\n             \n\n           \n\n              \n\n        </ion-item>\n\n           <div id="coverImage" *ngIf="img1">\n\n       <ion-card id="coverImage">\n\n  \n\n        <p>image preview</p>\n\n         \n\n          <img *ngIf="img1" [src]="img1"  onerror="this.onerror=null;this.src=\'assets/noimage.jpg\';"  width="450px" height="350px"/>\n\n          <button  class="button" ion-button  (click)="removeFile()">Remove image</button>\n\n    \n\n       \n\n      \n\n      \n\n     <!-- Progress Bar\n\n    \n\n    \n\n    \n\n    -->\n\n  \n\n  <div *ngIf="progressValue | async as val">\n\n    <progress type="warning"  [value]="val" style="height: 7mm; width: 50%" max="100" ></progress>\n\n    <br />\n\n      <span *ngIf="val<100" style="color:rgb(255, 60, 0); font-size: 17px; font-weight: 410;">{{ val | number}}% </span><span *ngIf="val == 100" style="color:rgb(1, 153, 34);  font-size: 17px; font-weight: 410;">Completed !</span>\n\n  </div>\n\n  \n\n  <!-- End -->\n\n      </ion-card>\n\n    </div>\n\n \n\n    <ion-grid class="ion-text-center">\n\n             <ion-row >\n\n                              <ion-col *ngIf = "user.name" col-lg-1 class="header-row">\n\n                                <ion-label >Full name</ion-label>\n\n                              </ion-col>\n\n                              <ion-col col-lg-11 *ngIf = "user.name">\n\n                                <ion-label >{{user.name}}</ion-label>\n\n                              </ion-col>\n\n             </ion-row>\n\n             <ion-row >\n\n                              <ion-col  *ngIf = "user.nickname" col-lg-1 class="header-row">\n\n                                <ion-label >Nick Name</ion-label>\n\n                              </ion-col>\n\n                              <ion-col col-lg-11 *ngIf = "user.nickname">\n\n                                <ion-label >{{user.nickname}}</ion-label>\n\n                              </ion-col>\n\n            </ion-row>\n\n                  <ion-row >\n\n                    <ion-col  *ngIf = "user.instagram" col-lg-1 class="header-row">\n\n                      <ion-label >Instagram Handle</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-lg-11 *ngIf = "user.instagram">\n\n                      <ion-label >{{user.instagram}}</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n\n\n                      <ion-row >\n\n                        <ion-col  *ngIf = "user.facebook" col-lg-1 class="header-row">\n\n                          <ion-label >Facebook</ion-label>\n\n                        </ion-col>\n\n                        <ion-col col-lg-11 *ngIf = "user.facebook">\n\n                          <ion-label >{{user.facebook}}</ion-label>\n\n                        </ion-col>\n\n                      </ion-row>\n\n\n\n                      <ion-row >\n\n                        <ion-col  *ngIf = "user.whatsapp" col-lg-1 class="header-row">\n\n                          <ion-label >Whatsapp</ion-label>\n\n                        </ion-col>\n\n                        <ion-col col-lg-11 *ngIf = "user.whatsapp">\n\n                          <ion-label >{{user.whatsapp}}</ion-label>\n\n                        </ion-col>\n\n                      </ion-row>\n\n                <ion-row >\n\n\n\n                          <ion-col  *ngIf = "user.email" col-lg-1 class="header-row">\n\n                            <ion-label >Email</ion-label>\n\n                          </ion-col>\n\n                          <ion-col col-lg-11 *ngIf = "user.email">\n\n                            <ion-label >{{user.email}}</ion-label>\n\n                          </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row >\n\n                                <ion-col  *ngIf = "user.phone" col-lg-1 class="header-row">\n\n                                  <ion-label >Phone No</ion-label>\n\n                                </ion-col>\n\n                                <ion-col col-lg-11 *ngIf = "user.phone">\n\n                                  <ion-label >{{user.phone}}</ion-label>\n\n                                 </ion-col>\n\n           </ion-row>\n\n           <ion-row >\n\n            <ion-col  *ngIf = "user.state" col-lg-1 class="header-row">\n\n                      <ion-label >State</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-lg-11 *ngIf = "user.state">\n\n                      <ion-label >{{user.state}}</ion-label>\n\n                    </ion-col>\n\n          </ion-row>\n\n          <ion-row >\n\n                    <ion-col  *ngIf = "user.lga" col-lg-1 class="header-row">\n\n                      <ion-label >LGA</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-lg-11 *ngIf = "user.lga">\n\n                      <ion-label >{{user.lga}}</ion-label>\n\n                    </ion-col>\n\n          </ion-row>\n\n          <ion-row >\n\n                    <ion-col  *ngIf = "user.address" col-lg-1 class="header-row">\n\n                      <ion-label >Address</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-lg-11 *ngIf = "user.address">\n\n                      <ion-label >{{user.address}}</ion-label>\n\n                    </ion-col>\n\n         </ion-row>\n\n         <ion-row >\n\n                <ion-col  *ngIf = "user.ambition" col-lg-1 class="header-row">\n\n                  <ion-label >Ambition</ion-label>\n\n                </ion-col>\n\n                <ion-col col-lg-11 *ngIf = "user.ambition">\n\n                  <ion-label >{{user.ambition}}</ion-label>\n\n                </ion-col>\n\n        </ion-row>\n\n        <ion-row >\n\n              <ion-col  *ngIf = "user.bestcourse" col-lg-1 class="header-row">\n\n                <ion-label >Best Course</ion-label>\n\n              </ion-col>\n\n              <ion-col col-lg-11 *ngIf = "user.bestcourse">\n\n                <ion-label >{{user.bestcourse}}</ion-label>\n\n              </ion-col>\n\n        </ion-row>\n\n        <ion-row >\n\n          <ion-col  *ngIf = "user.worsecourse" col-lg-1 class="header-row">\n\n            <ion-label >Worse Course</ion-label>\n\n          </ion-col>\n\n          <ion-col col-lg-11 *ngIf = "user.worsecourse">\n\n            <ion-label >{{user.worsecourse}}</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row >\n\n          <ion-col  *ngIf = "user.bestfriend" col-lg-1 class="header-row">\n\n            <ion-label >Best Friend</ion-label>\n\n          </ion-col>\n\n          <ion-col col-lg-11 *ngIf = "user.bestfriend">\n\n            <ion-label >{{user.bestfriend}}</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row >\n\n          <ion-col  *ngIf = "user.favoritelecturer" col-lg-1 class="header-row">\n\n            <ion-label >Favorite Lecturer</ion-label>\n\n          </ion-col>\n\n          <ion-col col-lg-11 *ngIf = "user.favoritelecturer">\n\n            <ion-label >{{user.favoritelecturer}}</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n        <ion-col  *ngIf = "user.favoritefood" col-lg-1 class="header-row">\n\n          <ion-label >Favorite Food</ion-label>\n\n        </ion-col>\n\n        <ion-col col-lg-11 *ngIf = "user.favoritefood">\n\n          <ion-label >{{user.favoritefood}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col  *ngIf = "user.favoriteqoute" col-lg-1 class="header-row">\n\n          <ion-label >Favorite qoute</ion-label>\n\n        </ion-col>\n\n        <ion-col col-lg-11 *ngIf = "user.favoriteqoute">\n\n          <ion-label >{{user.favoriteqoute}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n    </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n          <ion-item class="input"> \n\n            <ion-label floating id="inputlabel">Full Name :</ion-label>     \n\n            <ion-input type="text" [(ngModel)]="user.name" name="name" required minlength="4" #name="ngModel" pattern="[A-Za-z ]+"> </ion-input>\n\n          </ion-item>\n\n          <div  *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">\n\n               <div *ngIf="name.errors.required" class="error">\n\n                Name is required.\n\n               </div>\n\n                \n\n                 <div *ngIf="name.errors?.pattern" class="error">\n\n                    Name should contain only alphabets\n\n                 </div>\n\n               \n\n                <div *ngIf="name.errors.minlength" class="error">\n\n                Name must be at least 4 characters long.\n\n                </div>\n\n            </div>\n\n\n\n            <ion-item class="input"> \n\n              <ion-label floating id="inputlabel">Nick Name :</ion-label>     \n\n              <ion-input type="text" [(ngModel)]="user.nickname" name="nickname"  minlength="1" #nickname="ngModel" pattern="[A-Za-z ]+"> </ion-input>\n\n            </ion-item>\n\n            <div  *ngIf="nickname.invalid && (nickname.dirty || nickname.touched)" class="alert alert-danger">\n\n                   <div *ngIf="nickname.errors?.pattern" class="error">\n\n                      NickName should contain only alphabets\n\n                   </div>\n\n                 \n\n                  <div *ngIf="nickname.errors?.minlength" class="error">\n\n                  Name must be at least 1 characters long.\n\n                  </div>\n\n            </div>\n\n            <ion-item class="input"> \n\n              <ion-label floating id="inputlabel">Instagram Handle :</ion-label>     \n\n              <ion-input type="text" [(ngModel)]="user.instagram"  name="instagram" minlength="2"  #instagram="ngModel"> </ion-input>\n\n            </ion-item>\n\n            <div  *ngIf="instagram.invalid && (address.dirty || instagram.touched)" class="alert alert-danger">\n\n                  <div *ngIf="instagram.errors.minlength" class="error">\n\n                  Address must be at least 2 characters long.\n\n                  </div>\n\n           </div>\n\n        \n\n           <ion-item class="input"> \n\n            <ion-label floating id="inputlabel">Facebook :</ion-label>     \n\n            <ion-input type="text" [(ngModel)]="user.facebook"  name="facebook" minlength="2"  #facebook="ngModel"  pattern="[A-Za-z]+"> </ion-input>\n\n          </ion-item>\n\n          <div  *ngIf="facebook.invalid && (facebook.dirty || facebook.touched)" class="alert alert-danger">\n\n                <div *ngIf="facebook.errors?.pattern" class="error">\n\n                  Address should contain only alphabets\n\n              </div>\n\n                <div *ngIf="facebook.errors.minlength" class="error">\n\n                Address must be at least 2 characters long.\n\n                </div>\n\n         </div>\n\n        \n\n         <ion-item  class="inpt">\n\n                    <ion-label floating id="inputlabel">Whatsapp No :</ion-label>\n\n                    <ion-input type="tel" [(ngModel)]="user.whatsapp"  name="whatsapp"  minlength="11" #whatsapp="ngModel"> </ion-input>\n\n                  </ion-item>\n\n                  <div  *ngIf="whatsapp.invalid && (whatsapp.dirty || whatsapp.touched)" class="alert alert-danger">\n\n                    <div *ngIf="whatsapp.errors?.required" class="error">\n\n                      phone is required.\n\n                      </div>\n\n                      <div *ngIf="whatsapp.errors?.minlength" class="error">\n\n                        phone must be at least 11 characters long.\n\n                      </div>\n\n                  </div>\n\n        \n\n        \n\n\n\n          <ion-item class="input"> \n\n            <ion-label floating id="inputlabel">Email address :</ion-label>     \n\n            <ion-input type="text" [(ngModel)]="user.email" name="email"  email  #email="ngModel" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"> </ion-input>\n\n          </ion-item>\n\n          <div  *ngIf="emailError && (email.dirty || email.touched)" class="alert alert-danger">\n\n            <div class="error">\n\n              {{emailError}}\n\n             </div>\n\n         </div>\n\n        \n\n          <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">\n\n             <div *ngIf="email.errors.pattern" class="error">\n\n                This is not a valid Email Address \n\n              </div>\n\n          </div>\n\n\n\n\n\n          <ion-item  class="inpt">\n\n            <ion-label floating id="inputlabel">Phone No :</ion-label>\n\n            <ion-input type="tel" [(ngModel)]="user.phone"  name="phone"  minlength="11" #phone="ngModel" required pattern="^[0-9]*$"> </ion-input>\n\n          </ion-item>\n\n          <div  *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="alert alert-danger">\n\n            <div *ngIf="phone.errors.pattern" class="error">PhoneNo Number should contain only Numbers</div>\n\n          </div>\n\n          <div  *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="alert alert-danger">\n\n            <div *ngIf="phone.errors?.required" class="error">\n\n              phone is required.\n\n              </div>\n\n              <div *ngIf="phone.errors?.minlength" class="error">\n\n                phone must be at least 11 characters long.\n\n              </div>\n\n          </div>\n\n\n\n\n\n      \n\n          <ion-item class="input"> \n\n            <ion-label floating id="inputlabel">State :</ion-label>     \n\n            <ion-input type="text" [(ngModel)]="user.state"  name="state" required minlength="2"  #state="ngModel"  pattern="[A-Za-z]+"> </ion-input>\n\n          </ion-item>\n\n          <div  *ngIf="state.invalid && (state.dirty || state.touched)" class="alert alert-danger">\n\n                <div *ngIf="state.errors?.pattern" class="error">\n\n                  state should contain only alphabets\n\n              </div>\n\n              <div *ngIf="state.errors.required" class="error">\n\n               state is required.\n\n                </div>\n\n                <div *ngIf="state.errors.minlength" class="error">\n\n                state must be at least 2 characters long.\n\n                </div>\n\n         </div>\n\n\n\n         <ion-item class="input"> \n\n          <ion-label floating id="inputlabel">LGA :</ion-label>     \n\n          <ion-input type="text" [(ngModel)]="user.lga"  name="lga" required minlength="2"  #lga="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n\n        </ion-item>\n\n        <div  *ngIf="lga.invalid && (lga.dirty || lga.touched)" class="alert alert-danger">\n\n              <div *ngIf="lga.errors?.pattern" class="error">\n\n              LGA should contain only alphabets\n\n            </div>\n\n            <div *ngIf="lga.errors.required" class="error">\n\n              LGA is required.\n\n              </div>\n\n              <div *ngIf="lga.errors.minlength" class="error">\n\n              LGA must be at least 2 characters long.\n\n              </div>\n\n       </div>\n\n\n\n       <ion-item class="input"> \n\n        <ion-label floating id="inputlabel">Address :</ion-label>     \n\n        <ion-input type="text" [(ngModel)]="user.address"  name="address" required minlength="2"  #address="ngModel"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="address.invalid && (address.dirty || address.touched)" class="alert alert-danger">\n\n          <div *ngIf="address.errors.required" class="error">\n\n            Address is required.\n\n            </div>\n\n            <div *ngIf="address.errors.minlength" class="error">\n\n            Address must be at least 2 characters long.\n\n            </div>\n\n     </div>\n\n\n\n\n\n     <ion-item class="input"> \n\n      <ion-label floating id="inputlabel">Ambition :</ion-label>     \n\n      <ion-input type="text" [(ngModel)]="user.ambition"  name="ambition"  minlength="2"  #ambition="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n\n    </ion-item>\n\n    <div  *ngIf="ambition.invalid && (ambition.dirty || ambition.touched)" class="alert alert-danger">\n\n          <div *ngIf="ambition.errors?.pattern" class="error">\n\n            Ambition should contain only alphabets\n\n        </div>\n\n       \n\n          <div *ngIf="ambition.errors.minlength" class="error">\n\n         Ambition must be at least 2 characters long.\n\n          </div>\n\n   </div>\n\n\n\n   <ion-item class="input"> \n\n    <ion-label floating id="inputlabel">Best Course :</ion-label>     \n\n    <ion-input type="text" [(ngModel)]="user.bestcourse"  name="bestcourse"  minlength="2"  #bestcourse="ngModel"> </ion-input>\n\n  </ion-item>\n\n  <div  *ngIf="bestcourse.invalid && (bestcourse.dirty || bestcourse.touched)" class="alert alert-danger">\n\n   \n\n        <div *ngIf="bestcourse.errors.minlength" class="error">\n\n          Best Course must be at least 2 characters long.\n\n        </div>\n\n </div>\n\n\n\n <ion-item class="input"> \n\n  <ion-label floating id="inputlabel">Worse Course :</ion-label>     \n\n  <ion-input type="text" [(ngModel)]="user.worsecourse"  name="worsecourse"  minlength="2"  #worsecourse="ngModel" > </ion-input>\n\n</ion-item>\n\n<div  *ngIf="worsecourse.invalid && (worsecourse.dirty || worsecourse.touched)" class="alert alert-danger">\n\n  \n\n      <div *ngIf="worsecourse.errors.minlength" class="error">\n\n        Worse Course must be at least 2 characters long.\n\n      </div>\n\n</div>\n\n\n\n<ion-item class="input"> \n\n  <ion-label floating id="inputlabel">Best Friend :</ion-label>     \n\n  <ion-input type="text" [(ngModel)]="user.bestfriend"  name="bestfriend"  minlength="2"  #bestfriend="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="bestfriend.invalid && (bestfriend.dirty || bestfriend.touched)" class="alert alert-danger">\n\n\n\n    <div *ngIf="bestfriend.errors.required" class="error">\n\n      Best Friend is required.\n\n      </div>\n\n      <div *ngIf="bestfriend.errors.minlength" class="error">\n\n        Best Friend must be at least 2 characters long.\n\n      </div>\n\n</div>\n\n\n\n<ion-item class="input"> \n\n  <ion-label floating id="inputlabel">Favorite Lecturer :</ion-label>     \n\n  <ion-input type="text" [(ngModel)]="user.favoritelecturer"  name="favoritelecturer"  minlength="2"  #favoritelecturer="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="favoritelecturer.invalid && (favoritelecturer.dirty || favoritelecturer.touched)" class="alert alert-danger">\n\n      <div *ngIf="favoritelecturer.errors?.pattern" class="error">\n\n        Favorite Lecturer should contain only alphabets\n\n    </div>\n\n      <div *ngIf="favoritelecturer.errors.minlength" class="error">\n\n        Favorite Lecturer must be at least 2 characters long.\n\n      </div>\n\n</div>\n\n\n\n<ion-item class="input"> \n\n  <ion-label floating id="inputlabel">Favorite Food :</ion-label>     \n\n  <ion-input type="text" [(ngModel)]="user.favoritefood"  name="favoritefood"  minlength="2"  #favoritefood="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="favoritefood.invalid && (favoritefood.dirty || favoritefood.touched)" class="alert alert-danger">\n\n      <div *ngIf="favoritefood.errors?.pattern" class="error">\n\n        Favorite Food should contain only alphabets\n\n    </div>\n\n      <div *ngIf="favoritefood.errors.minlength" class="error">\n\n        Favorite Food must be at least 2 characters long.\n\n      </div>\n\n</div>\n\n<ion-item class="input"> \n\n  <ion-label floating id="inputlabel">Favorite Quote :</ion-label>     \n\n  <ion-input type="text" [(ngModel)]="user.favoriteqoute"  name="favoriteqoute"  minlength="2"  #favoriteqoute="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="favoriteqoute.invalid && (favoriteqoute.dirty || favoriteqoute.touched)" class="alert alert-danger">\n\n      <div *ngIf="favoriteqoute.errors?.pattern" class="error">\n\n        Favorite Qoute should contain only alphabets\n\n    </div>\n\n      <div *ngIf="favoriteqoute.errors.minlength" class="error">\n\n        Favorite Qoute must be at least 2 characters long.\n\n      </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      \n\n         <div id="login-buttons">\n\n      \n\n          <button round  id="login-button" color="primary" ion-button *ngIf="name.invalid || state.invalid || lga.invalid || address.invalid || phone.invalid || email.invalid" id="invalid"  (click)="error(user)" end>Upload</button>\n\n          <button round  id="login-button"  color="primary" ion-button *ngIf="name.valid && state.valid && lga.valid && address.valid && phone.valid && email.valid" (click)="uploadFile(user)">Upload</button>\n\n       \n\n        </div>\n\n      \n\n         \n\n        </form>\n\n      \n\n      \n\n    \n\n  \n\n  \n\n    </ion-content>\n\n\n\n\n\n\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n\n\n'/*ion-inline-end:"C:\Users\Abdulqadir\Desktop\ionic2\MY_FINAL_YEAR - Copy\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__angular_fire_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_fire_firestore__["a" /* AngularFirestore */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_fire_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_fire_storage__["a" /* AngularFireStorage */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _k : Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _l : Object])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[301]);
//# sourceMappingURL=main.js.map