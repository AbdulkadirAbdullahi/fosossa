webpackJsonp([2],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(510);
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

/***/ 199:
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
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		523,
		1
	],
	"../pages/profiledetail/profiledetail.module": [
		524,
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
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//export const baseURL = 'http://localhost:3000/';
const baseURL = 'http://192.168.43.73:3000/';
/* harmony export (immutable) */ __webpack_exports__["a"] = baseURL;

//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_firestore__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profiledetail_profiledetail__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;











let HomePage = class HomePage {
    constructor(alertCtrl, platform, statusBar, splashScreen, db, fireStorage, userservice, loadingCtrl, db2, navCtrl, afAuth) {
        //inside contructor
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.db = db;
        this.fireStorage = fireStorage;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.db2 = db2;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        //@ViewChild('myNav') nav: NavController
        this.user = {};
        this.downloadableURL = '';
        this.basePath = '/photoAlbum';
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
            const filePath = `${this.basePath}/${user.name.trim() + user.lga}`;
            this.filepath2 = filePath; // inorder to get the path to delete file
            this.task = this.fireStorage.upload(filePath, this.selectedFile);
            this.progressValue = this.task.percentageChanges(); // <<<<< Percentage of uploading is
            (await this.task).ref.getDownloadURL().then(url => {
                this.downloadableURL = url;
                user.photourl = this.downloadableURL;
                try {
                    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.phone).then((auth) => {
                        this.db2.object('photoalbum/users/' + auth.user.uid).set(user)
                            .then(() => {
                            this.afAuth.auth.signOut().then(() => {
                                let alert2 = this.alertCtrl.create({
                                    title: '<font color="green"><b> </b>Upload Successful Your unique ID = <font color="black">' + auth.user.uid + '</font></font>',
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
                            user.photourl = "";
                            try {
                                this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.phone).then((auth) => {
                                    this.db2.object('photoalbum/users/' + auth.user.uid).set(user)
                                        .then(() => {
                                        this.afAuth.auth.signOut().then(() => {
                                            let alert2 = this.alertCtrl.create({
                                                title: '<font color="green"><b> </b>Upload Successful Your unique ID = <font color="black">' + auth.user.uid + '</font></font>',
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
        // Reset the content nav to have just this pa
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
    presentPrompt() {
        let alert1 = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Email'
                },
                {
                    name: 'password',
                    placeholder: 'Phone No',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Go back',
                    role: 'cancel',
                    handler: data => {
                    }
                },
                {
                    text: 'Login',
                    handler: data => {
                        let loading = this.loadingCtrl.create({
                            spinner: 'bubbles',
                            dismissOnPageChange: true,
                            content: 'Logging Please Wait...'
                        });
                        loading.present();
                        try {
                            this.afAuth.auth.signInWithEmailAndPassword(data.username, data.password).then(() => {
                                this.afAuth.authState.take(1).subscribe(data => {
                                    if (data && data.email && data.uid) {
                                        let uid = data.uid;
                                        this.db2.object('photoalbum/users/' + data.uid).valueChanges().subscribe(data2 => {
                                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__profiledetail_profiledetail__["a" /* ProfiledetailPage */], {
                                                data2: data2
                                            });
                                            loading.dismiss();
                                            //   data2.indexOf(passNo) !== -1 ?  this.storage.set(_id, true) : alert("you cannot start this module becouse You dint passsed the previos module");
                                        });
                                        // place to add something if we need update
                                    }
                                    else
                                        this.presentPrompt();
                                }); //end of this.auth
                                //   this.nav.push(ContactPage);
                            }); //end of sign
                        }
                        catch (error) {
                            console.error(error);
                            this.errorMsg = error.message;
                            loading.dismiss();
                        } //end of try catch
                    } //end of data
                }
            ]
        });
        alert1.present();
    }
    push() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__profiledetail_profiledetail__["a" /* ProfiledetailPage */]);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" ? _a : Object)
], HomePage.prototype, "nav", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Abdulqadir\Desktop\ionic2\PHOTO_ALBUM\src\pages\home\home.html"*/'<ion-content  id="content" padding>\n\n  <ion-buttons end>\n\n\n\n    <button   ion-button icon-only  (click)="presentPrompt()">\n\n     Login\n\n    </button>\n\n  </ion-buttons>\n\n  <img class="img" item-center src="assets/imgs/unilogo.png" alt="UDUS LOGO">\n\n  <h3 id="h">The most peaceful university in Nigeria</h3>\n\n  <h4 id="h4">Photo Album Form For CMP Class Of 2021</h4>\n\n\n\n<br>\n\n\n\n\n\n      <form  id="login-form"  color="primary" method="post">\n\n<!-- Phto -->\n\n        <ion-item class="input">\n\n    \n\n          <ion-label  id="inputlabel">Photo :</ion-label>\n\n        \n\n            <ion-input type="file" name="inputFile"  accept="image/*" (change)="chooseFile($event)" id="input"></ion-input>\n\n        \n\n         \n\n       \n\n          \n\n    </ion-item>\n\n       <div id="coverImage" *ngIf="img1">\n\n   <ion-card id="coverImage">\n\n\n\n    <p>image preview</p>\n\n     \n\n      <img *ngIf="img1" [src]="img1"  onerror="this.onerror=null;this.src=\'assets/noimage.jpg\';"  width="400px" height="450px"/>\n\n      <button  class="button" ion-button  (click)="removeFile()">Remove image</button>\n\n\n\n   \n\n  \n\n  \n\n <!-- Progress Bar\n\n\n\n\n\n\n\n-->\n\n\n\n<div *ngIf="progressValue | async as val">\n\n<progress type="warning"  [value]="val" style="height: 7mm; width: 50%" max="100" ></progress>\n\n<br />\n\n  <span *ngIf="val<100" style="color:rgb(255, 60, 0); font-size: 17px; font-weight: 410;">{{ val | number}}% </span><span *ngIf="val == 100" style="color:rgb(1, 153, 34);  font-size: 17px; font-weight: 410;">Completed !</span>\n\n</div>\n\n\n\n<!-- End -->\n\n  </ion-card>\n\n</div>\n\n\n\n<ion-grid class="ion-text-center">\n\n         <ion-row >\n\n                          <ion-col *ngIf = "user.name" col-lg-1 class="header-row">\n\n                            <ion-label >Full name</ion-label>\n\n                          </ion-col>\n\n                          <ion-col col-lg-11 *ngIf = "user.name">\n\n                            <ion-label >{{user.name}}</ion-label>\n\n                          </ion-col>\n\n         </ion-row>\n\n         <ion-row >\n\n                          <ion-col  *ngIf = "user.nickname" col-lg-1 class="header-row">\n\n                            <ion-label >Nick Name</ion-label>\n\n                          </ion-col>\n\n                          <ion-col col-lg-11 *ngIf = "user.nickname">\n\n                            <ion-label >{{user.nickname}}</ion-label>\n\n                          </ion-col>\n\n        </ion-row>\n\n              <ion-row >\n\n                <ion-col  *ngIf = "user.instagram" col-lg-1 class="header-row">\n\n                  <ion-label >Instagram Handle</ion-label>\n\n                </ion-col>\n\n                <ion-col col-lg-11 *ngIf = "user.instagram">\n\n                  <ion-label >{{user.instagram}}</ion-label>\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n                  <ion-row >\n\n                    <ion-col  *ngIf = "user.facebook" col-lg-1 class="header-row">\n\n                      <ion-label >Facebook</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-lg-11 *ngIf = "user.facebook">\n\n                      <ion-label >{{user.facebook}}</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n\n\n                  <ion-row >\n\n                    <ion-col  *ngIf = "user.whatsapp" col-lg-1 class="header-row">\n\n                      <ion-label >Whatsapp</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-lg-11 *ngIf = "user.whatsapp">\n\n                      <ion-label >{{user.whatsapp}}</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n            <ion-row >\n\n\n\n                      <ion-col  *ngIf = "user.email" col-lg-1 class="header-row">\n\n                        <ion-label >Email</ion-label>\n\n                      </ion-col>\n\n                      <ion-col col-lg-11 *ngIf = "user.email">\n\n                        <ion-label >{{user.email}}</ion-label>\n\n                      </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row >\n\n                            <ion-col  *ngIf = "user.phone" col-lg-1 class="header-row">\n\n                              <ion-label >Phone No</ion-label>\n\n                            </ion-col>\n\n                            <ion-col col-lg-11 *ngIf = "user.phone">\n\n                              <ion-label >{{user.phone}}</ion-label>\n\n                             </ion-col>\n\n       </ion-row>\n\n       <ion-row >\n\n        <ion-col  *ngIf = "user.state" col-lg-1 class="header-row">\n\n                  <ion-label >State</ion-label>\n\n                </ion-col>\n\n                <ion-col col-lg-11 *ngIf = "user.state">\n\n                  <ion-label >{{user.state}}</ion-label>\n\n                </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n                <ion-col  *ngIf = "user.lga" col-lg-1 class="header-row">\n\n                  <ion-label >LGA</ion-label>\n\n                </ion-col>\n\n                <ion-col col-lg-11 *ngIf = "user.lga">\n\n                  <ion-label >{{user.lga}}</ion-label>\n\n                </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n                <ion-col  *ngIf = "user.address" col-lg-1 class="header-row">\n\n                  <ion-label >Address</ion-label>\n\n                </ion-col>\n\n                <ion-col col-lg-11 *ngIf = "user.address">\n\n                  <ion-label >{{user.address}}</ion-label>\n\n                </ion-col>\n\n     </ion-row>\n\n     <ion-row >\n\n            <ion-col  *ngIf = "user.ambition" col-lg-1 class="header-row">\n\n              <ion-label >Ambition</ion-label>\n\n            </ion-col>\n\n            <ion-col col-lg-11 *ngIf = "user.ambition">\n\n              <ion-label >{{user.ambition}}</ion-label>\n\n            </ion-col>\n\n    </ion-row>\n\n    <ion-row >\n\n          <ion-col  *ngIf = "user.bestcourse" col-lg-1 class="header-row">\n\n            <ion-label >Best Courses</ion-label>\n\n          </ion-col>\n\n          <ion-col col-lg-11 *ngIf = "user.bestcourse">\n\n            <ion-label >{{user.bestcourse}}</ion-label>\n\n          </ion-col>\n\n    </ion-row>\n\n    <ion-row >\n\n      <ion-col  *ngIf = "user.worsecourse" col-lg-1 class="header-row">\n\n        <ion-label >Worse Courses</ion-label>\n\n      </ion-col>\n\n      <ion-col col-lg-11 *ngIf = "user.worsecourse">\n\n        <ion-label >{{user.worsecourse}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row >\n\n      <ion-col  *ngIf = "user.bestfriend" col-lg-1 class="header-row">\n\n        <ion-label >Best Friends</ion-label>\n\n      </ion-col>\n\n      <ion-col col-lg-11 *ngIf = "user.bestfriend">\n\n        <ion-label >{{user.bestfriend}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row >\n\n      <ion-col  *ngIf = "user.favoritelecturer" col-lg-1 class="header-row">\n\n        <ion-label >Favorite Lecturer</ion-label>\n\n      </ion-col>\n\n      <ion-col col-lg-11 *ngIf = "user.favoritelecturer">\n\n        <ion-label >{{user.favoritelecturer}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n    <ion-col  *ngIf = "user.favoritefood" col-lg-1 class="header-row">\n\n      <ion-label >Favorite Food</ion-label>\n\n    </ion-col>\n\n    <ion-col col-lg-11 *ngIf = "user.favoritefood">\n\n      <ion-label >{{user.favoritefood}}</ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col  *ngIf = "user.favoriteqoute" col-lg-1 class="header-row">\n\n      <ion-label >Favorite qoute</ion-label>\n\n    </ion-col>\n\n    <ion-col col-lg-11 *ngIf = "user.favoriteqoute">\n\n      <ion-label >{{user.favoriteqoute}}</ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-grid>\n\n\n\n      <ion-item class="input"> \n\n        <ion-label floating id="inputlabel">Full Name :</ion-label>     \n\n        <ion-input type="text" [(ngModel)]="user.name" name="name" required minlength="4" #name="ngModel" pattern="[A-Za-z ]+"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">\n\n           <div *ngIf="name.errors.required" class="error">\n\n            Name is required.\n\n           </div>\n\n            \n\n             <div *ngIf="name.errors?.pattern" class="error">\n\n                Name should contain only alphabets\n\n             </div>\n\n           \n\n            <div *ngIf="name.errors.minlength" class="error">\n\n            Name must be at least 4 characters long.\n\n            </div>\n\n        </div>\n\n\n\n        <ion-item class="input"> \n\n          <ion-label floating id="inputlabel">Nick Name :</ion-label>     \n\n          <ion-input type="text" [(ngModel)]="user.nickname" name="nickname"  minlength="1" #nickname="ngModel" pattern="[A-Za-z 0-9._ &,]+"> </ion-input>\n\n        </ion-item>\n\n        <div  *ngIf="nickname.invalid && (nickname.dirty || nickname.touched)" class="alert alert-danger">\n\n               <div *ngIf="nickname.errors?.pattern" class="error">\n\n                  invalid characters\n\n               </div>\n\n             \n\n              <div *ngIf="nickname.errors?.minlength" class="error">\n\n              Nickname must be at least 1 characters long.\n\n              </div>\n\n        </div>\n\n        <ion-item class="input"> \n\n          <ion-label floating id="inputlabel">Instagram Handle :</ion-label>     \n\n          <ion-input type="text" [(ngModel)]="user.instagram"  name="instagram" minlength="4"  #instagram="ngModel" pattern="^[a-zA-Z0-9_.]+(,[a-zA-Z0-9_.]+)*$"> </ion-input>\n\n        </ion-item>\n\n        <div  *ngIf="instagram.invalid && (instagram.dirty || instagram.touched)" class="alert alert-danger">\n\n              <div *ngIf="instagram.errors?.pattern" class="error">\n\n                This is not  valid instagram  username\n\n            </div>\n\n              <div *ngIf="instagram.errors.minlength" class="error">\n\n              instagram must be at least 4 characters long.\n\n              </div>\n\n       </div>\n\n    \n\n       <ion-item class="input"> \n\n        <ion-label floating id="inputlabel">Facebook Username :</ion-label>     \n\n        <ion-input type="text" [(ngModel)]="user.facebook"  name="facebook" minlength="4"  #facebook="ngModel"  pattern="^[a-zA-Z0-9_.]+(,[a-zA-Z0-9_.]+)*$"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="facebook.invalid && (facebook.dirty || facebook.touched)" class="alert alert-danger">\n\n            <div *ngIf="facebook.errors?.pattern" class="error">\n\n              This is not  valid facebook username\n\n          </div>\n\n            <div *ngIf="facebook.errors.minlength" class="error">\n\n              Facebook username will have to be at least four characters in length\n\n            </div>\n\n     </div>\n\n    \n\n     <ion-item  class="inpt">\n\n                <ion-label floating id="inputlabel">Whatsapp No :</ion-label>\n\n                <ion-input type="tel" [(ngModel)]="user.whatsapp"  name="whatsapp"  minlength="11" #whatsapp="ngModel" pattern="^[0-9]*$"> </ion-input>\n\n              </ion-item>\n\n              <div  *ngIf="whatsapp.invalid && (whatsapp.dirty || whatsapp.touched)" class="alert alert-danger">\n\n                <div *ngIf="whatsapp.errors.pattern" class="error">Whatsapp should contain only Numbers</div>\n\n                \n\n                  <div *ngIf="whatsapp.errors?.minlength" class="error">\n\n                    Whatsapp must be at least 11 characters long.\n\n                  </div>\n\n              </div>\n\n    \n\n    \n\n\n\n      <ion-item class="input"> \n\n        <ion-label floating id="inputlabel">Email address :</ion-label>     \n\n        <ion-input type="text" [(ngModel)]="user.email" name="email"  email  #email="ngModel" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="emailError && (email.dirty || email.touched)" class="alert alert-danger">\n\n        <div class="error">\n\n          {{emailError}}\n\n         </div>\n\n     </div>\n\n    \n\n      <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">\n\n         <div *ngIf="email.errors.pattern" class="error">\n\n            This is not a valid Email Address \n\n          </div>\n\n      </div>\n\n\n\n\n\n      <ion-item  class="inpt">\n\n        <ion-label floating id="inputlabel">Phone No :</ion-label>\n\n        <ion-input type="tel" [(ngModel)]="user.phone"  name="phone"  minlength="11" #phone="ngModel" required pattern="^[0-9+]*$"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="alert alert-danger">\n\n        <div *ngIf="phone.errors.pattern" class="error">PhoneNo Number should contain only Numbers and +</div>\n\n      </div>\n\n      <div  *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="alert alert-danger">\n\n        <div *ngIf="phone.errors?.required" class="error">\n\n          phone is required.\n\n          </div>\n\n          <div *ngIf="phone.errors?.minlength" class="error">\n\n            phone must be at least 11 characters long.\n\n          </div>\n\n      </div>\n\n\n\n\n\n  \n\n      <ion-item class="input"> \n\n        <ion-label floating id="inputlabel">State :</ion-label>     \n\n        <ion-input type="text" [(ngModel)]="user.state"  name="state" required minlength="2"  #state="ngModel"  pattern="[A-Za-z]+"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="state.invalid && (state.dirty || state.touched)" class="alert alert-danger">\n\n            <div *ngIf="state.errors?.pattern" class="error">\n\n              State should contain only alphabets\n\n          </div>\n\n          <div *ngIf="state.errors.required" class="error">\n\n           State is required.\n\n            </div>\n\n            <div *ngIf="state.errors.minlength" class="error">\n\n            State must be at least 2 characters long.\n\n            </div>\n\n     </div>\n\n\n\n     <ion-item class="input"> \n\n      <ion-label floating id="inputlabel">LGA :</ion-label>     \n\n      <ion-input type="text" [(ngModel)]="user.lga"  name="lga" required minlength="2"  #lga="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n\n    </ion-item>\n\n    <div  *ngIf="lga.invalid && (lga.dirty || lga.touched)" class="alert alert-danger">\n\n          <div *ngIf="lga.errors?.pattern" class="error">\n\n          LGA should contain only alphabets\n\n        </div>\n\n        <div *ngIf="lga.errors.required" class="error">\n\n          LGA is required.\n\n          </div>\n\n          <div *ngIf="lga.errors.minlength" class="error">\n\n          LGA must be at least 2 characters long.\n\n          </div>\n\n   </div>\n\n\n\n   <ion-item class="input"> \n\n    <ion-label floating id="inputlabel">Address :</ion-label>     \n\n    <ion-input type="text" [(ngModel)]="user.address"  name="address" required minlength="2"  #address="ngModel"> </ion-input>\n\n  </ion-item>\n\n  <div  *ngIf="address.invalid && (address.dirty || address.touched)" class="alert alert-danger">\n\n      <div *ngIf="address.errors.required" class="error">\n\n        Address is required.\n\n        </div>\n\n        <div *ngIf="address.errors.minlength" class="error">\n\n        Address must be at least 2 characters long.\n\n        </div>\n\n </div>\n\n\n\n\n\n <ion-item class="input"> \n\n  <ion-label floating id="inputlabel">Ambition :</ion-label>     \n\n  <ion-input type="text" [(ngModel)]="user.ambition"  name="ambition"  minlength="2"  #ambition="ngModel"  pattern="[A-Za-z ,.]+"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="ambition.invalid && (ambition.dirty || ambition.touched)" class="alert alert-danger">\n\n      <div *ngIf="ambition.errors?.pattern" class="error">\n\n        Ambition should contain only alphabets\n\n    </div>\n\n   \n\n      <div *ngIf="ambition.errors.minlength" class="error">\n\n     Ambition must be at least 2 characters long.\n\n      </div>\n\n</div>\n\n\n\n<ion-item class="input"> \n\n<ion-label floating id="inputlabel">Best Courses :</ion-label>     \n\n<ion-input type="text" [(ngModel)]="user.bestcourse"  name="bestcourse"  minlength="2"  #bestcourse="ngModel" pattern="^[a-zA-Z0-9, _&]+(,[a-zA-Z0-9_, &]+)*$"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="bestcourse.invalid && (bestcourse.dirty || bestcourse.touched)" class="alert alert-danger">\n\n\n\n  <div *ngIf="bestcourse.errors?.pattern" class="error">\n\n    Invalid characters\n\n</div>\n\n    <div *ngIf="bestcourse.errors.minlength" class="error">\n\n      Best Course must be at least 2 characters long.\n\n    </div>\n\n</div>\n\n\n\n<ion-item class="input"> \n\n<ion-label floating id="inputlabel">Worse Courses :</ion-label>     \n\n<ion-input type="text" [(ngModel)]="user.worsecourse"  name="worsecourse"  minlength="2"  #worsecourse="ngModel" pattern="^[a-zA-Z0-9, _&]+(,[a-zA-Z0-9_, &]+)*$"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="worsecourse.invalid && (worsecourse.dirty || worsecourse.touched)" class="alert alert-danger">\n\n  <div *ngIf="worsecourse.errors?.pattern" class="error">\n\n    Invalid characters\n\n</div>\n\n  <div *ngIf="worsecourse.errors.minlength" class="error">\n\n    Worse Course must be at least 2 characters long.\n\n  </div>\n\n</div>\n\n\n\n<ion-item class="input"> \n\n<ion-label floating id="inputlabel">Best Friends :</ion-label>     \n\n<ion-input type="text" [(ngModel)]="user.bestfriend"  name="bestfriend"  minlength="2"  #bestfriend="ngModel"  pattern="[A-Za-z ,&]+"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="bestfriend.invalid && (bestfriend.dirty || bestfriend.touched)" class="alert alert-danger">\n\n\n\n  <div *ngIf="bestfriend.errors?.pattern" class="error">\n\n    invalid characters\n\n</div>\n\n  <div *ngIf="bestfriend.errors.minlength" class="error">\n\n    Best Friends must be at least 2 characters long.\n\n  </div>\n\n</div>\n\n\n\n<ion-item class="input"> \n\n<ion-label floating id="inputlabel">Favorite Lecturer :</ion-label>     \n\n<ion-input type="text" [(ngModel)]="user.favoritelecturer"  name="favoritelecturer"  minlength="2"  #favoritelecturer="ngModel"  pattern="[A-Za-z .]+"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="favoritelecturer.invalid && (favoritelecturer.dirty || favoritelecturer.touched)" class="alert alert-danger">\n\n  <div *ngIf="favoritelecturer.errors?.pattern" class="error">\n\n    Favorite Lecturer should contain only alphabets\n\n</div>\n\n  <div *ngIf="favoritelecturer.errors.minlength" class="error">\n\n    Favorite Lecturer must be at least 2 characters long.\n\n  </div>\n\n</div>\n\n\n\n<ion-item class="input"> \n\n<ion-label floating id="inputlabel">Favorite Food :</ion-label>     \n\n<ion-input type="text" [(ngModel)]="user.favoritefood"  name="favoritefood"  minlength="2"  #favoritefood="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="favoritefood.invalid && (favoritefood.dirty || favoritefood.touched)" class="alert alert-danger">\n\n  <div *ngIf="favoritefood.errors?.pattern" class="error">\n\n    Favorite Food should contain only alphabets\n\n</div>\n\n  <div *ngIf="favoritefood.errors.minlength" class="error">\n\n    Favorite Food must be at least 2 characters long.\n\n  </div>\n\n</div>\n\n<ion-item class="input"> \n\n<ion-label floating id="inputlabel">Favorite Quote :</ion-label>     \n\n<ion-input type="text" [(ngModel)]="user.favoriteqoute"  name="favoriteqoute"  minlength="2"  #favoriteqoute="ngModel"  pattern="[A-Za-z 0-9 , ; \'\' ?.]+"> </ion-input>\n\n</ion-item>\n\n<div  *ngIf="favoriteqoute.invalid && (favoriteqoute.dirty || favoriteqoute.touched)" class="alert alert-danger">\n\n  <div *ngIf="favoriteqoute.errors?.pattern" class="error">\n\n    invalid characters\n\n</div>\n\n  <div *ngIf="favoriteqoute.errors.minlength" class="error">\n\n    Favorite Quote must be at least 2 characters long.\n\n  </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \n\n     <div id="login-buttons">\n\n  \n\n      <button round  id="login-button" color="primary" ion-button *ngIf="name.invalid || state.invalid || lga.invalid || address.invalid || phone.invalid || email.invalid" id="invalid"  (click)="error()" end>Upload</button>\n\n      <button round  id="login-button"  color="primary" ion-button *ngIf="name.valid && state.valid && lga.valid && address.valid && phone.valid && email.valid" (click)="uploadFile(user)">Upload</button>\n\n   \n\n    </div>\n\n  \n\n     \n\n    </form>\n\n  \n\n  \n\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n\n\n'/*ion-inline-end:"C:\Users\Abdulqadir\Desktop\ionic2\PHOTO_ALBUM\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_fire_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_fire_firestore__["a" /* AngularFirestore */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_fire_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_fire_storage__["a" /* AngularFireStorage */]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _k : Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" ? _l : Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _m : Object])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(503);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__ = __webpack_require__(63);
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
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Abdulqadir\Desktop\ionic2\PHOTO_ALBUM\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Contact Us</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card-content>\n\n      \n\n    <div id="formPadding">\n\n    </div>\n\n    <form  id="login-form"  color="primary">\n\n      <ion-card-header id="login-header">\n\n        <ion-label id="login-title">Contact Us</ion-label>\n\n      </ion-card-header>\n\n\n\n\n\n      <ion-item class="input"> \n\n        <ion-label floating color="primary">Full Name :</ion-label>     \n\n        <ion-input type="text" [(ngModel)]="user.name" name="name" required minlength="3" [(ngModel)]="user.name" #name="ngModel" pattern="[A-Za-z]+"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">\n\n           <div *ngIf="name.errors.required" class="error">\n\n            Name is required.\n\n           </div>\n\n            \n\n             <div *ngIf="name.errors?.pattern" class="error">\n\n                Name should contain only alphabets\n\n             </div>\n\n           \n\n            <div *ngIf="name.errors.minlength" class="error">\n\n            Name must be at least 3 characters long.\n\n            </div>\n\n        </div>\n\n  \n\n  \n\n      <ion-item class="input"> \n\n        <ion-label floating color="primary">Email address :</ion-label>     \n\n        <ion-input type="text" [(ngModel)]="user.email" name="email" required email  #email="ngModel" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"> </ion-input>\n\n      </ion-item>\n\n      <div  *ngIf="emailError && (email.dirty || email.touched)" class="alert alert-danger">\n\n        <div class="error">\n\n          {{emailError}}\n\n         </div>\n\n     </div>\n\n    \n\n      <div  *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">\n\n          <div *ngIf="email.errors.required" class="error">\n\n            Email is required.\n\n          </div>\n\n  \n\n          <div *ngIf="email.errors?.pattern" class="error">\n\n            This is not a valid Email Address \n\n          </div>\n\n      </div>\n\n  \n\n  \n\n      <ion-item  class="input">\n\n        <ion-label position="floating">Your Message: </ion-label>\n\n        <ion-textarea  [(ngModel)]="user.message" name="message" required minlength="3" autosize #message="ngModel" pattern="[A-Za-z]+"></ion-textarea>\n\n      </ion-item>\n\n      <div  *ngIf="message.invalid && (message.dirty || message.touched)" class="alert alert-danger">\n\n        <div *ngIf="message.errors.required" class="error">\n\n         Message is required.\n\n        </div>\n\n         \n\n          <div *ngIf="message.errors?.pattern" class="error">\n\n            Message seems to contain some odd characters\n\n          </div>\n\n        \n\n         <div *ngIf="message.errors.minlength" class="error">\n\n         message should be at least 3 characters long.\n\n         </div>\n\n     </div>\n\n\n\n  \n\n      <ion-item class="buttons"> \n\n        <button class="button" ion-button *ngIf="name.invalid" id="invalid" end>Send Message</button>\n\n        <button  class="button" ion-button *ngIf="name.valid" (click)="sendMessage(user)">Send Message</button>\n\n      </ion-item>\n\n    \n\n     \n\n    </form>\n\n  \n\n\n\n  </ion-card-content>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Abdulqadir\Desktop\ionic2\PHOTO_ALBUM\src\pages\contact\contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_baseurl__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire___ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_firestore__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_user_user__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_process_httpmsg_process_httpmsg__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profiledetail_profiledetail__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contact_contact__ = __webpack_require__(301);
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
            __WEBPACK_IMPORTED_MODULE_18__pages_profiledetail_profiledetail__["a" /* ProfiledetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_contact_contact__["a" /* ContactPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profiledetail/profiledetail.module#ProfiledetailPageModule', name: 'ProfiledetailPage', segment: 'profiledetail', priority: 'low', defaultHistory: [] }
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
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profiledetail_profiledetail__["a" /* ProfiledetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_contact_contact__["a" /* ContactPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_3__shared_baseurl__["a" /* baseURL */] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__angular_fire_storage__["b" /* AngularFireStorageModule */],
            __WEBPACK_IMPORTED_MODULE_16__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_firestore__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profiledetail_profiledetail__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let MyApp = class MyApp {
    constructor(alertCtrl, platform, statusBar, splashScreen, db, fireStorage, userservice, loadingCtrl, db2, afAuth, app) {
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
        this.app = app;
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
                    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.phone).then((auth) => {
                        this.db2.object('photoalbum/users/' + auth.user.uid).set(user)
                            .then(() => {
                            this.afAuth.auth.signOut().then(() => {
                                let alert2 = this.alertCtrl.create({
                                    title: '<font color="green"><b> </b>Upload Successful Your unique ID = <font color="black">' + auth.user.uid + '</font></font>',
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
                                this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.phone).then((auth) => {
                                    this.db2.object('photoalbum/users/' + auth.user.uid).set(user)
                                        .then(() => {
                                        this.afAuth.auth.signOut().then(() => {
                                            let alert2 = this.alertCtrl.create({
                                                title: '<font color="green"><b> </b>Upload Successful Your unique ID = <font color="black">' + auth.user.uid + '</font></font>',
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
        // Reset the content nav to have just this pa
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
    presentPrompt() {
        let alert1 = this.alertCtrl.create({
            title: 'Login',
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
                    text: 'Go back',
                    role: 'cancel',
                    handler: data => {
                    }
                },
                {
                    text: 'Login',
                    handler: data => {
                        let loading = this.loadingCtrl.create({
                            spinner: 'bubbles',
                            dismissOnPageChange: true,
                            content: 'Logging Please Wait...'
                        });
                        loading.present();
                        try {
                            this.afAuth.auth.signInWithEmailAndPassword(data.username, data.password).then(() => {
                                loading.dismiss();
                                //   this.nav.push(ContactPage);
                            }); //end of sign
                        }
                        catch (error) {
                            console.error(error);
                            this.errorMsg = error.message;
                            loading.dismiss();
                        } //end of try catch
                    } //end of data
                }
            ]
        });
        alert1.present();
    }
    push() {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_profiledetail_profiledetail__["a" /* ProfiledetailPage */]);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]
    //@ViewChild(Nav) nav: Nav;
    )
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Abdulqadir\Desktop\ionic2\PHOTO_ALBUM\src\app\app.html"*/' <ion-nav #myNav  [root]="rootPage"></ion-nav>\n\n  \n\n\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n\n\n'/*ion-inline-end:"C:\Users\Abdulqadir\Desktop\ionic2\PHOTO_ALBUM\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_8__angular_fire_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_10__angular_fire_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiledetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;





/**
 * Generated class for the ProfiledetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ProfiledetailPage = class ProfiledetailPage {
    constructor(afAuth, db, alertCtrl, storage, loadingCtrl, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.downloadableURL = '';
        this.basePath = '/photoAlbum';
        this.updateDetail = false;
        this.user = {};
        this.user = this.navParams.get('data2');
        this.userData = this.user;
        if (this.user.photourl != "")
            this.enableimgupdate = false;
        else
            this.enableimgupdate = true;
    }
    ionViewDidLoad() {
        this.afAuth.authState.take(1).subscribe(data => {
            if (data && data.email && data.uid) {
                this.userId = data.uid;
            }
            else
                alert("you are not authenticated");
        }); //authstatesddd
    }
    removeFile() {
        this.img1 = "";
        this.selectedFile = "";
        /*
      \
        }
      
      */
    }
    toggleUpdateDetails() {
        this.updateDetail = !this.updateDetail;
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
    updatephoto(photourl) {
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            dismissOnPageChange: true,
            content: 'removing image in progress <br> Please Wait...'
        });
        loading.present();
        this.storage.storage.refFromURL(photourl).delete().then(async () => {
            this.user.photourl = "";
            this.db.object('photoalbum/users/' + this.userId).update(this.user)
                .then(() => {
                loading.dismiss();
                this.enableimgupdate = true;
                let alert = this.alertCtrl.create({
                    title: '<font color="green"><b> </b>Profile Image Removed</font>',
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
            }); //end od update
        }); //end of delete
    }
    error() {
        let alert = this.alertCtrl.create({
            title: '<font color="green"><b> </b> Full Name, State, Email, LGA, PhoneNo & Address are not optional</font>',
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
    async update(user) {
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            dismissOnPageChange: true,
            content: 'Data updating in progress <br> Please Wait...'
        });
        loading.present();
        if (this.selectedFile) {
            const filePath = `${this.basePath}/${user.name.trim() + user.lga}`;
            this.filepath2 = filePath; // inorder to get the path to delete file
            this.task = this.storage.upload(filePath, this.selectedFile);
            this.progressValue = this.task.percentageChanges(); // <<<<< Percentage of uploading is
            (await this.task).ref.getDownloadURL().then(url => {
                this.downloadableURL = url;
                user.photourl = this.downloadableURL;
                try {
                    this.db.object('photoalbum/users/' + this.userId).update(user)
                        .then(() => {
                        let alert2 = this.alertCtrl.create({
                            title: '<font color="green"><b> </b>Profile update Successful </font>',
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
                        alert2.present();
                        loading.dismiss();
                    });
                }
                catch (error) {
                    this.emailError = error.message;
                    alert(error.message);
                    console.error(error);
                }
            }); ///end of await  
        }
        else {
            var loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                dismissOnPageChange: true,
                content: 'Data updating in progress <br> Please Wait...'
            });
            loading.present();
            try {
                //user.photourl = "";
                this.db.object('photoalbum/users/' + this.userId).update(user)
                    .then(() => {
                    let alert2 = this.alertCtrl.create({
                        title: '<font color="green"><b> </b>Profile update Successful </font>',
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
            }
            catch (error) {
                this.emailError = error.message;
                alert(error.message);
                console.error(error);
            }
        } //end of if file selected methodd
    } //end of update
};
ProfiledetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-profiledetail',template:/*ion-inline-start:"C:\Users\Abdulqadir\Desktop\ionic2\PHOTO_ALBUM\src\pages\profiledetail\profiledetail.html"*/'<!--\n  Generated temte for the ProfiledetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <p class="title">Member CMP Class Of 2021 @UDUS</p>\n\n  </ion-navbar>\n \n  \n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf="user && !updateDetail" class="cont">\n    <img src="{{user.photourl}}">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row class="chat">\n          <ion-col col-4 class="social" *ngIf="user.whatsapp">\n            <a href=\'https://wa.me/+234{{user.whatsapp}}\'><ion-icon ios="logo-whatsapp" md="logo-whatsapp"></ion-icon></a>       \n           </ion-col>\n          <ion-col col-4 class="social" *ngIf="user.facebook">\n           <a href="https://facebook.com/{{user.facebook}}"><ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon></a>\n          </ion-col>\n          <ion-col col-4 class="social" *ngIf="user.instagram">\n           <a href="https://Instagram.com/{{user.instagram}}"><ion-icon ios="logo-instagram" md="logo-instagram"></ion-icon></a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3 class="label">\n            <p><b><font color="primary">Name: </font></b></p>\n           </ion-col>\n          <ion-col col-9 class="name">\n            <p>{{user.name}}</p>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row *ngIf="user.nickname">\n          <ion-col col-3 class="label">\n            <p><b><font color="primary">Nickname: </font></b></p>\n           </ion-col>\n          <ion-col col-9 class="name">\n            <p>{{user.nickname}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="user.state">\n          <ion-col col-3 class="label">\n            <p><b><font color="primary">State: </font></b></p>\n           </ion-col>\n          <ion-col col-9 class="name">\n            <p>{{user.state}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="user.lga">\n          <ion-col col-3 class="label">\n            <p><b><font color="primary">LGA: </font></b></p>\n           </ion-col>\n          <ion-col col-9 class="name">\n            <p>{{user.lga}}</p>\n          </ion-col>\n        </ion-row>\n      \n\n        <ion-row *ngIf="user.address">\n          <ion-col col-3 class="label">\n            <p><b><font color="primary">Address: </font></b></p>\n           </ion-col>\n          <ion-col col-9 class="name">\n            <p>{{user.address}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="user.ambition">\n          <ion-col col-3 class="label">\n            <p><b><font color="primary">Ambition: </font></b></p>\n           </ion-col>\n          <ion-col col-9 class="name">\n            <p>{{user.ambition}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="user.favoriteqoute">\n\n          <ion-col col-3 class="label">\n            <p><b><font color="primary">Favorite Quote: </font></b></p>\n           </ion-col>\n          <ion-col col-9 class="name">\n            <p>{{user.favoriteqoute}}</p>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row *ngIf="user.bestfriend">\n          <ion-col col-3 class="label">\n            <p><b><font color="primary">Best Friends:</font></b></p>\n           </ion-col>\n          <ion-col col-9 class="name">\n            <p>{{user.bestfriend}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="user.bestcourse">\n        <ion-col col-3 class="label">\n          <p><b><font color="primary">Best Courses:</font></b></p>\n         </ion-col>\n        <ion-col col-9 class="name">\n          <p>{{user.bestcourse}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="user.favoritelecturer">\n        <ion-col col-3 class="label">\n          <p><b><font color="primary">Favorite Lecturer:</font></b></p>\n         </ion-col>\n        <ion-col col-9 class="name">\n          <p>{{user.favoritelecturer}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="user.favoritefood">\n        <ion-col col-3 class="label">\n          <p><b><font color="primary">Favorite Food:</font></b></p>\n         </ion-col>\n        <ion-col col-9 class="name">\n          <p>{{user.favoritefood}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="user.email">\n        <ion-col col-3 class="label">\n          <p><b><font color="primary">Email:</font></b></p>\n         </ion-col>\n        <ion-col col-9 class="name">\n          <p>{{user.email}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="user.instagram">\n        <ion-col col-3 class="label">\n          <p><b><font color="primary">Instagram Handle:</font></b></p>\n         </ion-col>\n        <ion-col col-9 class="name">\n          <p>{{user.instagram}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="user.facebook">\n        <ion-col col-3 class="label">\n          <p><b><font color="primary">Facebook:</font></b></p>\n         </ion-col>\n        <ion-col col-9 class="name">\n          <p>{{user.facebook}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="user.whatsapp">\n        <ion-col col-3 class="label">\n          <p><b><font color="primary">Whatsapp No:</font></b></p>\n         </ion-col>\n        <ion-col col-9 class="name">\n          <p>{{user.whatsapp}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="user.phoneno">\n        <ion-col col-3 class="label">\n          <p><b><font color="primary">Phone:</font></b></p>\n         </ion-col>\n        <ion-col col-9 class="name">\n          <p>{{user.phoneno}}</p>\n        </ion-col>\n      </ion-row>\n\n\n\n\n\n      </ion-grid>\n\n        \n     \n     \n      \n    </ion-card-content>\n  </ion-card>\n  <button *ngIf="!updateDetail" ion-button icon-only (click)="toggleUpdateDetails()">\n    <ion-icon ios="ios-add-circle" md="md-add-circle" >Update profile</ion-icon>\n  </button>\n  <button *ngIf="updateDetail" ion-button icon-only (click)="toggleUpdateDetails()">\n    <ion-icon ios="ios-add-circle" md="md-add-circle" >Back to profile</ion-icon>\n  </button>\n\n<div class="update_cont" *ngIf="updateDetail"> \n\n\n<br>\n\n<ion-card *ngIf="user.photourl">\n  <img src="{{user.photourl}}">\n  <ion-card-content>\n  </ion-card-content>\n  <button  class="button" ion-button  (click)="updatephoto(user.photourl)">Change Image</button>\n</ion-card>\n\n      <form  id="login-form"  color="primary" method="post">\n<!-- Phto -->\n        <ion-item class="input" *ngIf="enableimgupdate">\n    \n          <ion-label  id="inputlabel">Photo :</ion-label>\n        \n            <ion-input type="file" name="inputFile"  accept="image/*" (change)="chooseFile($event)"></ion-input>\n        \n         \n       \n          \n    </ion-item>\n       <div id="coverImage" *ngIf="img1">\n   <ion-card id="coverImage">\n\n    <p>image preview</p>\n     \n      <img *ngIf="img1" [src]="img1"  onerror="this.onerror=null;this.src=\'assets/noimage.jpg\';"  width="350px" height="400px"/>\n      <button  class="button" ion-button  (click)="removeFile()">Drop image</button>\n\n   \n  \n  \n <!-- Progress Bar\n\n\n\n-->\n\n<div *ngIf="progressValue | async as val">\n<progress type="warning"  [value]="val" style="height: 7mm; width: 50%" max="100" ></progress>\n<br />\n  <span *ngIf="val<100" style="color:rgb(255, 60, 0); font-size: 17px; font-weight: 410;">{{ val | number}}% </span><span *ngIf="val == 100" style="color:rgb(1, 153, 34);  font-size: 17px; font-weight: 410;">Completed !</span>\n</div>\n\n<!-- End -->\n  </ion-card>\n</div>\n\n<ion-grid class="ion-text-center">\n         <ion-row >\n                          <ion-col *ngIf = "user.name" col-lg-1 class="header-row">\n                            <ion-label >Full name</ion-label>\n                          </ion-col>\n                          <ion-col col-lg-11 *ngIf = "user.name">\n                            <ion-label >{{user.name}}</ion-label>\n                          </ion-col>\n         </ion-row>\n         <ion-row >\n                          <ion-col  *ngIf = "user.nickname" col-lg-1 class="header-row">\n                            <ion-label >Nick Name</ion-label>\n                          </ion-col>\n                          <ion-col col-lg-11 *ngIf = "user.nickname">\n                            <ion-label >{{user.nickname}}</ion-label>\n                          </ion-col>\n        </ion-row>\n              <ion-row >\n                <ion-col  *ngIf = "user.instagram" col-lg-1 class="header-row">\n                  <ion-label >Instagram Handle</ion-label>\n                </ion-col>\n                <ion-col col-lg-11 *ngIf = "user.instagram">\n                  <ion-label >{{user.instagram}}</ion-label>\n                </ion-col>\n              </ion-row>\n\n                  <ion-row >\n                    <ion-col  *ngIf = "user.facebook" col-lg-1 class="header-row">\n                      <ion-label >Facebook</ion-label>\n                    </ion-col>\n                    <ion-col col-lg-11 *ngIf = "user.facebook">\n                      <ion-label >{{user.facebook}}</ion-label>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row >\n                    <ion-col  *ngIf = "user.whatsapp" col-lg-1 class="header-row">\n                      <ion-label >Whatsapp</ion-label>\n                    </ion-col>\n                    <ion-col col-lg-11 *ngIf = "user.whatsapp">\n                      <ion-label >{{user.whatsapp}}</ion-label>\n                    </ion-col>\n                  </ion-row>\n            <ion-row >\n\n                      <ion-col  *ngIf = "user.email" col-lg-1 class="header-row">\n                        <ion-label >Email</ion-label>\n                      </ion-col>\n                      <ion-col col-lg-11 *ngIf = "user.email">\n                        <ion-label >{{user.email}}</ion-label>\n                      </ion-col>\n        </ion-row>\n\n        <ion-row >\n                            <ion-col  *ngIf = "user.phone" col-lg-1 class="header-row">\n                              <ion-label >Phone No</ion-label>\n                            </ion-col>\n                            <ion-col col-lg-11 *ngIf = "user.phone">\n                              <ion-label >{{user.phone}}</ion-label>\n                             </ion-col>\n       </ion-row>\n       <ion-row >\n        <ion-col  *ngIf = "user.state" col-lg-1 class="header-row">\n                  <ion-label >State</ion-label>\n                </ion-col>\n                <ion-col col-lg-11 *ngIf = "user.state">\n                  <ion-label >{{user.state}}</ion-label>\n                </ion-col>\n      </ion-row>\n      <ion-row >\n                <ion-col  *ngIf = "user.lga" col-lg-1 class="header-row">\n                  <ion-label >LGA</ion-label>\n                </ion-col>\n                <ion-col col-lg-11 *ngIf = "user.lga">\n                  <ion-label >{{user.lga}}</ion-label>\n                </ion-col>\n      </ion-row>\n      <ion-row >\n                <ion-col  *ngIf = "user.address" col-lg-1 class="header-row">\n                  <ion-label >Address</ion-label>\n                </ion-col>\n                <ion-col col-lg-11 *ngIf = "user.address">\n                  <ion-label >{{user.address}}</ion-label>\n                </ion-col>\n     </ion-row>\n     <ion-row >\n            <ion-col  *ngIf = "user.ambition" col-lg-1 class="header-row">\n              <ion-label >Ambition</ion-label>\n            </ion-col>\n            <ion-col col-lg-11 *ngIf = "user.ambition">\n              <ion-label >{{user.ambition}}</ion-label>\n            </ion-col>\n    </ion-row>\n    <ion-row >\n          <ion-col  *ngIf = "user.bestcourse" col-lg-1 class="header-row">\n            <ion-label >Best Courses</ion-label>\n          </ion-col>\n          <ion-col col-lg-11 *ngIf = "user.bestcourse">\n            <ion-label >{{user.bestcourse}}</ion-label>\n          </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col  *ngIf = "user.worsecourse" col-lg-1 class="header-row">\n        <ion-label >Worse Course</ion-label>\n      </ion-col>\n      <ion-col col-lg-11 *ngIf = "user.worsecourse">\n        <ion-label >{{user.worsecourse}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col  *ngIf = "user.bestfriend" col-lg-1 class="header-row">\n        <ion-label >Best Friends</ion-label>\n      </ion-col>\n      <ion-col col-lg-11 *ngIf = "user.bestfriend">\n        <ion-label >{{user.bestfriend}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col  *ngIf = "user.favoritelecturer" col-lg-1 class="header-row">\n        <ion-label >Favorite Lecturer</ion-label>\n      </ion-col>\n      <ion-col col-lg-11 *ngIf = "user.favoritelecturer">\n        <ion-label >{{user.favoritelecturer}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n    <ion-col  *ngIf = "user.favoritefood" col-lg-1 class="header-row">\n      <ion-label >Favorite Food</ion-label>\n    </ion-col>\n    <ion-col col-lg-11 *ngIf = "user.favoritefood">\n      <ion-label >{{user.favoritefood}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col  *ngIf = "user.favoriteqoute" col-lg-1 class="header-row">\n      <ion-label >Favorite qoute</ion-label>\n    </ion-col>\n    <ion-col col-lg-11 *ngIf = "user.favoriteqoute">\n      <ion-label >{{user.favoriteqoute}}</ion-label>\n    </ion-col>\n  </ion-row>\n\n\n\n\n\n\n\n</ion-grid>\n\n<ion-item class="input"> \n  <ion-label floating id="inputlabel">Full Name :</ion-label>     \n  <ion-input type="text" [(ngModel)]="user.name" name="name" required minlength="4" #name="ngModel" pattern="[A-Za-z ]+"> </ion-input>\n</ion-item>\n<div  *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">\n     <div *ngIf="name.errors.required" class="error">\n      Name is required.\n     </div>\n      \n       <div *ngIf="name.errors?.pattern" class="error">\n          Name should contain only alphabets\n       </div>\n     \n      <div *ngIf="name.errors.minlength" class="error">\n      Name must be at least 4 characters long.\n      </div>\n  </div>\n\n  <ion-item class="input"> \n    <ion-label floating id="inputlabel">Nick Name :</ion-label>     \n    <ion-input type="text" [(ngModel)]="user.nickname" name="nickname"  minlength="1" #nickname="ngModel" pattern="[A-Za-z 0-9.]+"> </ion-input>\n  </ion-item>\n  <div  *ngIf="nickname.invalid && (nickname.dirty || nickname.touched)" class="alert alert-danger">\n         <div *ngIf="nickname.errors?.pattern" class="error">\n            invalid characters\n         </div>\n       \n        <div *ngIf="nickname.errors?.minlength" class="error">\n        Name must be at least 1 characters long.\n        </div>\n  </div>\n  <ion-item class="input"> \n    <ion-label floating id="inputlabel">Instagram Handle :</ion-label>     \n    <ion-input type="text" [(ngModel)]="user.instagram"  name="instagram" minlength="4"  #instagram="ngModel" pattern="^[a-zA-Z0-9_.]+(,[a-zA-Z0-9_.]+)*$"> </ion-input>\n  </ion-item>\n  <div  *ngIf="instagram.invalid && (instagram.dirty || instagram.touched)" class="alert alert-danger">\n        <div *ngIf="instagram.errors?.pattern" class="error">\n          This is not  valid instagram  username\n      </div>\n        <div *ngIf="instagram.errors.minlength" class="error">\n        instagram must be at least 4 characters long.\n        </div>\n </div>\n\n <ion-item class="input"> \n  <ion-label floating id="inputlabel">Facebook Username :</ion-label>     \n  <ion-input type="text" [(ngModel)]="user.facebook"  name="facebook" minlength="4"  #facebook="ngModel"  pattern="^[a-zA-Z0-9_.]+(,[a-zA-Z0-9_.]+)*$"> </ion-input>\n</ion-item>\n<div  *ngIf="facebook.invalid && (facebook.dirty || facebook.touched)" class="alert alert-danger">\n      <div *ngIf="facebook.errors?.pattern" class="error">\n        This is not  valid facebook username\n    </div>\n      <div *ngIf="facebook.errors.minlength" class="error">\n        Facebook username will have to be at least four characters in length\n      </div>\n</div>\n\n<ion-item  class="inpt">\n          <ion-label floating id="inputlabel">Whatsapp No :</ion-label>\n          <ion-input type="tel" [(ngModel)]="user.whatsapp"  name="whatsapp"  minlength="11" #whatsapp="ngModel" pattern="^[0-9]*$"> </ion-input>\n        </ion-item>\n        <div  *ngIf="whatsapp.invalid && (whatsapp.dirty || whatsapp.touched)" class="alert alert-danger">\n          <div *ngIf="whatsapp.errors.pattern" class="error">Whatsapp should contain only Numbers and +</div>\n          \n            <div *ngIf="whatsapp.errors?.minlength" class="error">\n              Whatsapp must be at least 11 characters long.\n            </div>\n        </div>\n\n\n\n<ion-item  class="inpt">\n  <ion-label floating id="inputlabel">Phone No :</ion-label>\n  <ion-input type="tel" [(ngModel)]="user.phone"  name="phone"  minlength="11" #phone="ngModel" required pattern="^[0-9+]*$"> </ion-input>\n</ion-item>\n<div  *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="alert alert-danger">\n  <div *ngIf="phone.errors.pattern" class="error">PhoneNo Number should contain only Numbers and +</div>\n</div>\n<div  *ngIf="phone.invalid && (phone.dirty || phone.touched)" class="alert alert-danger">\n  <div *ngIf="phone.errors?.required" class="error">\n    phone is required.\n    </div>\n    <div *ngIf="phone.errors?.minlength" class="error">\n      phone must be at least 11 characters long.\n    </div>\n</div>\n\n\n\n<ion-item class="input"> \n  <ion-label floating id="inputlabel">State :</ion-label>     \n  <ion-input type="text" [(ngModel)]="user.state"  name="state" required minlength="2"  #state="ngModel"  pattern="[A-Za-z]+"> </ion-input>\n</ion-item>\n<div  *ngIf="state.invalid && (state.dirty || state.touched)" class="alert alert-danger">\n      <div *ngIf="state.errors?.pattern" class="error">\n        State should contain only alphabets\n    </div>\n    <div *ngIf="state.errors.required" class="error">\n     State is required.\n      </div>\n      <div *ngIf="state.errors.minlength" class="error">\n      State must be at least 2 characters long.\n      </div>\n</div>\n\n<ion-item class="input"> \n<ion-label floating id="inputlabel">LGA :</ion-label>     \n<ion-input type="text" [(ngModel)]="user.lga"  name="lga" required minlength="2"  #lga="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n</ion-item>\n<div  *ngIf="lga.invalid && (lga.dirty || lga.touched)" class="alert alert-danger">\n    <div *ngIf="lga.errors?.pattern" class="error">\n    LGA should contain only alphabets\n  </div>\n  <div *ngIf="lga.errors.required" class="error">\n    LGA is required.\n    </div>\n    <div *ngIf="lga.errors.minlength" class="error">\n    LGA must be at least 2 characters long.\n    </div>\n</div>\n\n<ion-item class="input"> \n<ion-label floating id="inputlabel">Address :</ion-label>     \n<ion-input type="text" [(ngModel)]="user.address"  name="address" required minlength="2"  #address="ngModel"> </ion-input>\n</ion-item>\n<div  *ngIf="address.invalid && (address.dirty || address.touched)" class="alert alert-danger">\n<div *ngIf="address.errors.required" class="error">\n  Address is required.\n  </div>\n  <div *ngIf="address.errors.minlength" class="error">\n  Address must be at least 2 characters long.\n  </div>\n</div>\n\n\n<ion-item class="input"> \n<ion-label floating id="inputlabel">Ambition :</ion-label>     \n<ion-input type="text" [(ngModel)]="user.ambition"  name="ambition"  minlength="2"  #ambition="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n</ion-item>\n<div  *ngIf="ambition.invalid && (ambition.dirty || ambition.touched)" class="alert alert-danger">\n<div *ngIf="ambition.errors?.pattern" class="error">\n  Ambition should contain only alphabets\n</div>\n\n<div *ngIf="ambition.errors.minlength" class="error">\nAmbition must be at least 2 characters long.\n</div>\n</div>\n\n<ion-item class="input"> \n<ion-label floating id="inputlabel">Best Courses :</ion-label>     \n<ion-input type="text" [(ngModel)]="user.bestcourse"  name="bestcourse"  minlength="2"  #bestcourse="ngModel" pattern="^[a-zA-Z0-9, _ &]+(,[a-zA-Z0-9_, &]+)*$"> </ion-input>\n</ion-item>\n<div  *ngIf="bestcourse.invalid && (bestcourse.dirty || bestcourse.touched)" class="alert alert-danger">\n\n<div *ngIf="bestcourse.errors?.pattern" class="error">\nInvalid characters\n</div>\n<div *ngIf="bestcourse.errors.minlength" class="error">\nBest Course must be at least 2 characters long.\n</div>\n</div>\n\n<ion-item class="input"> \n<ion-label floating id="inputlabel">Worse Courses :</ion-label>     \n<ion-input type="text" [(ngModel)]="user.worsecourse"  name="worsecourse"  minlength="2"  #worsecourse="ngModel" pattern="^[a-zA-Z0-9, _&]+(,[a-zA-Z0-9_, &]+)*$"> </ion-input>\n</ion-item>\n<div  *ngIf="worsecourse.invalid && (worsecourse.dirty || worsecourse.touched)" class="alert alert-danger">\n<div *ngIf="worsecourse.errors?.pattern" class="error">\nInvalid characters\n</div>\n<div *ngIf="worsecourse.errors.minlength" class="error">\nWorse Course must be at least 2 characters long.\n</div>\n</div>\n\n<ion-item class="input"> \n<ion-label floating id="inputlabel">Best Friends :</ion-label>     \n<ion-input type="text" [(ngModel)]="user.bestfriend"  name="bestfriend"  minlength="2"  #bestfriend="ngModel"  pattern="[A-Za-z ,&]+"> </ion-input>\n</ion-item>\n<div  *ngIf="bestfriend.invalid && (bestfriend.dirty || bestfriend.touched)" class="alert alert-danger">\n\n<div *ngIf="bestfriend.errors?.pattern" class="error">\ninvalid characters\n</div>\n<div *ngIf="bestfriend.errors.minlength" class="error">\nBest Friends must be at least 2 characters long.\n</div>\n</div>\n\n<ion-item class="input"> \n<ion-label floating id="inputlabel">Favorite Lecturer :</ion-label>     \n<ion-input type="text" [(ngModel)]="user.favoritelecturer"  name="favoritelecturer"  minlength="2"  #favoritelecturer="ngModel"  pattern="[A-Za-z .]+"> </ion-input>\n</ion-item>\n<div  *ngIf="favoritelecturer.invalid && (favoritelecturer.dirty || favoritelecturer.touched)" class="alert alert-danger">\n<div *ngIf="favoritelecturer.errors?.pattern" class="error">\nFavorite Lecturer should contain only alphabets\n</div>\n<div *ngIf="favoritelecturer.errors.minlength" class="error">\nFavorite Lecturer must be at least 2 characters long.\n</div>\n</div>\n\n<ion-item class="input"> \n<ion-label floating id="inputlabel">Favorite Food :</ion-label>     \n<ion-input type="text" [(ngModel)]="user.favoritefood"  name="favoritefood"  minlength="2"  #favoritefood="ngModel"  pattern="[A-Za-z ]+"> </ion-input>\n</ion-item>\n<div  *ngIf="favoritefood.invalid && (favoritefood.dirty || favoritefood.touched)" class="alert alert-danger">\n<div *ngIf="favoritefood.errors?.pattern" class="error">\nFavorite Food should contain only alphabets\n</div>\n<div *ngIf="favoritefood.errors.minlength" class="error">\nFavorite Food must be at least 2 characters long.\n</div>\n</div>\n<ion-item class="input"> \n<ion-label floating id="inputlabel">Favorite Quote :</ion-label>     \n<ion-input type="text" [(ngModel)]="user.favoriteqoute"  name="favoriteqoute"  minlength="2"  #favoriteqoute="ngModel"  pattern="[A-Za-z 0-9 , ; \'\' ?.]+"> </ion-input>\n</ion-item>\n<div  *ngIf="favoriteqoute.invalid && (favoriteqoute.dirty || favoriteqoute.touched)" class="alert alert-danger">\n<div *ngIf="favoriteqoute.errors?.pattern" class="error">\ninvalid characters\n</div>\n<div *ngIf="favoriteqoute.errors.minlength" class="error">\nFavorite Quote must be at least 2 characters long.\n</div>\n</div>\n\n\n\n\n\n\n  \n     <div id="login-buttons">\n  \n      <button round  id="login-button" color="primary" ion-button *ngIf="name.invalid || state.invalid || lga.invalid || address.invalid || phone.invalid" id="invalid"  (click)="error()" end>Update</button>\n      <button round  id="login-button"  color="primary" ion-button *ngIf="name.valid && state.valid && lga.valid && address.valid && phone.valid" (click)="update(user)">Update</button>\n   \n    </div>\n  \n     \n    </form>\n  \n\n\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Abdulqadir\Desktop\ionic2\PHOTO_ALBUM\src\pages\profiledetail\profiledetail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__["a" /* AngularFireStorage */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */]) === "function" ? _g : Object])
], ProfiledetailPage);

//# sourceMappingURL=profiledetail.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map