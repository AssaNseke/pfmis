(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfront_end_angular"] = self["webpackChunkfront_end_angular"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/home/home.component */
      27372);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./authentication/authentication.module */
          41082)).then(function (module) {
            return module.AuthenticationModule;
          });
        }
      }, {
        path: '',
        component: _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        children: [{
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./home/home.module */
            3467)).then(function (module) {
              return module.HomeModule;
            });
          }
        }, {
          path: 'user',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./authentication/authentication.module */
            41082)).then(function (module) {
              return module.AuthenticationModule;
            });
          }
        }, {
          path: 'requesting',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_request_request_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./request/request.module */
            73692)).then(function (module) {
              return module.RequestModule;
            });
          }
        }, {
          path: 'contracts',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_contractmanagement_contractmanagement_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./contractmanagement/contractmanagement.module */
            57397)).then(function (module) {
              return module.ContractmanagementModule;
            });
          }
        }]
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'FrontEndAngular';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/flex-layout */
      77114);
      /* harmony import */


      var _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layouts/home/home.component */
      27372);
      /* harmony import */


      var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/auth/auth.component */
      37759);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      365);
      /* harmony import */


      var _custommaterials_custommaterials_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./custommaterials/custommaterials.module */
      26954);
      /* harmony import */


      var _shared_services_httpinterceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/services/httpinterceptor.service */
      76413);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
          useClass: _shared_services_httpinterceptor_service__WEBPACK_IMPORTED_MODULE_5__.HttpinterceptorService,
          multi: true
        }, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__.FlexLayoutModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule, _custommaterials_custommaterials_module__WEBPACK_IMPORTED_MODULE_4__.CustommaterialsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _layouts_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__.AuthComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__.FlexLayoutModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__.MatTabsModule, _custommaterials_custommaterials_module__WEBPACK_IMPORTED_MODULE_4__.CustommaterialsModule]
        });
      })();
      /***/

    },

    /***/
    47397:
    /*!***********************************************************************************!*\
      !*** ./src/app/authentication/dialogs/updatepassword/updatepassword.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UpdatepasswordComponent": function UpdatepasswordComponent() {
          return (
            /* binding */
            _UpdatepasswordComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/sharedservice.service */
      92797);
      /* harmony import */


      var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/auth-service.service */
      91208);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function UpdatepasswordComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter old password!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdatepasswordComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter new password!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UpdatepasswordComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirm password!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _UpdatepasswordComponent = /*#__PURE__*/function () {
        function _UpdatepasswordComponent(matDialogRef, sharedService, authService) {
          _classCallCheck(this, _UpdatepasswordComponent);

          this.matDialogRef = matDialogRef;
          this.sharedService = sharedService;
          this.authService = authService;
        }

        _createClass(_UpdatepasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //Form Validation
            this.ResetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              oldpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
              password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
            });
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.matDialogRef.close();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            var formdata = new FormData();
            formdata.append("email", this.ResetForm.value.email);
            this.sharedService.isLoading.next(true);
            this.authService.passResetResquest(formdata).subscribe(function (result) {
              _this.sharedService.isLoading.next(false);

              console.log(result);
            }, function (errorResponse) {
              console.log("Error: " + errorResponse);
            });
          }
        }]);

        return _UpdatepasswordComponent;
      }();

      _UpdatepasswordComponent.ɵfac = function UpdatepasswordComponent_Factory(t) {
        return new (t || _UpdatepasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService));
      };

      _UpdatepasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _UpdatepasswordComponent,
        selectors: [["me-updatepassword"]],
        decls: 32,
        vars: 5,
        consts: [[3, "formGroup"], ["mat-dialog-title", ""], [1, "form-group", "col-lg-12", "col-sm-12", "form-input"], [1, "form-row"], [1, "form-group", "col"], ["type", "text", "formControlName", "oldpassword", "placeholder", "Enter Email", 1, "form-control", "form-control-sm"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "password", "placeholder", "Enter Email", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "password2", "placeholder", "Enter Email", 1, "form-control", "form-control-sm"], ["align", "end"], [1, "btn", "btn-secondary", 2, "margin-right", "10px", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-danger"]],
        template: function UpdatepasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Old Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, UpdatepasswordComponent_div_12_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, UpdatepasswordComponent_div_19_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, UpdatepasswordComponent_div_26_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-dialog-actions", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdatepasswordComponent_Template_button_click_28_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdatepasswordComponent_Template_button_click_30_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_1_0;
            var tmp_2_0;
            var tmp_3_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ResetForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.ResetForm.get("oldpassword")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.ResetForm.get("oldpassword")) == null ? null : tmp_1_0.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.ResetForm.get("password")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.ResetForm.get("password")) == null ? null : tmp_2_0.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.ResetForm.get("password2")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.ResetForm.get("password2")) == null ? null : tmp_3_0.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.ResetForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVwYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    34093:
    /*!*****************************************************************************!*\
      !*** ./src/app/authentication/dialogs/userprofile/userprofile.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserprofileComponent": function UserprofileComponent() {
          return (
            /* binding */
            _UserprofileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/sharedservice.service */
      92797);
      /* harmony import */


      var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/auth-service.service */
      91208);

      var _UserprofileComponent = /*#__PURE__*/function () {
        function _UserprofileComponent(matDialogRef, router, sharedService, authService) {
          _classCallCheck(this, _UserprofileComponent);

          this.matDialogRef = matDialogRef;
          this.router = router;
          this.sharedService = sharedService;
          this.authService = authService;
        }

        _createClass(_UserprofileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserById();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.matDialogRef.close();
          }
        }, {
          key: "getUserById",
          value: function getUserById() {
            var _this2 = this;

            this.sharedService.isLoading.next(true);
            this.authService.getUserById(localStorage.getItem('user_id')).subscribe(function (result) {
              _this2.sharedService.isLoading.next(false);

              console.log(result[0]);
              _this2.name = result[0].name;
              _this2.email = result[0].email;
              _this2.role = result[0].role_title;
              _this2.institution = result[0].inst_name;
            }, function (errorResponse) {
              console.log("Error: " + errorResponse);
            });
          }
        }]);

        return _UserprofileComponent;
      }();

      _UserprofileComponent.ɵfac = function UserprofileComponent_Factory(t) {
        return new (t || _UserprofileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService));
      };

      _UserprofileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _UserprofileComponent,
        selectors: [["me-userprofile"]],
        decls: 28,
        vars: 4,
        consts: [["mat-dialog-title", ""], [1, "form-group", "col-lg-12", "col-sm-12", "form-input"], [1, "form-row"], [1, "form-group", "col"], ["type", "text", "disabled", "", 1, "form-control", "form-control-sm", 3, "placeholder"], ["align", "end"], [1, "btn", "btn-secondary", 2, "margin-right", "10px", 3, "click"]],
        template: function UserprofileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Institution");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-dialog-actions", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserprofileComponent_Template_button_click_26_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.institution);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VycHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    91208:
    /*!*****************************************************************!*\
      !*** ./src/app/authentication/services/auth-service.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthServiceService": function AuthServiceService() {
          return (
            /* binding */
            _AuthServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AuthServiceService = /*#__PURE__*/function () {
        function _AuthServiceService(httpClient, router) {
          _classCallCheck(this, _AuthServiceService);

          this.httpClient = httpClient;
          this.router = router; //Check if user login

          this.userinfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        }

        _createClass(_AuthServiceService, [{
          key: "handleError",
          value: function handleError(errorResponse) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorResponse.error);
          }
        }, {
          key: "getRegisteredUsers",
          value: function getRegisteredUsers() {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/users').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
          }
        }, {
          key: "getRegisteredUsersByInstID",
          value: function getRegisteredUsersByInstID(inst_id) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/user?institution_id=' + inst_id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
          }
        }, {
          key: "updatePassword",
          value: function updatePassword(form) {
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/update-password', form).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "registerUser",
          value: function registerUser(formdata) {
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/register', formdata).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "registerRole",
          value: function registerRole(formdata) {
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/insertRole', formdata).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "updateRoleById",
          value: function updateRoleById(id, formdata) {
            return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/updateRole/' + id, formdata).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
          }
        }, {
          key: "userLogin",
          value: function userLogin(formdata) {
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/login', formdata).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getInstitutions",
          value: function getInstitutions() {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/institutions').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getRoles",
          value: function getRoles() {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/roles').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "deleteroleById",
          value: function deleteroleById(id) {
            return this.httpClient["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/deleteRole/' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
          }
        }, {
          key: "getUserById",
          value: function getUserById(id) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/user/' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getallPermissions",
          value: function getallPermissions() {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/permissions').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getpermissionsByRoleId",
          value: function getpermissionsByRoleId(id) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/rolespermissions?role_id=' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "addrolespermission",
          value: function addrolespermission(id, data) {
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/insertdelete-rolepermission?role_id=' + id, data, {
              headers: {
                "Content-Type": "application/json"
              }
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "saveUserData",
          value: function saveUserData(result) {
            localStorage.setItem("token", result.token.original.token);
            localStorage.setItem("user_name", result.data.name);
            localStorage.setItem("user_id", result.data.id);
            localStorage.setItem("role_id", result.data.role_id);
            localStorage.setItem("institution_id", result.data.institution_id);
            var data = {
              token: result.token,
              user_name: result.data.name
            };
            this.userinfo.next(data);
          } //check if user is authenticated

        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            var token = localStorage.getItem("token");

            if (token) {
              return true;
            } else {
              return false;
            }
          } //logout

        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user_name');
            localStorage.removeItem('user_id');
            localStorage.removeItem('user_info');
            localStorage.removeItem("role_id");
            localStorage.removeItem("institution_id"); //console.log('localstorage remove access_token...');rgb(92, 223, 136)

            this.router.navigate(['/login']);
          }
        }, {
          key: "passResetResquest",
          value: function passResetResquest(formdata) {
            return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/req-password-reset', formdata).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }]);

        return _AuthServiceService;
      }();

      _AuthServiceService.ɵfac = function AuthServiceService_Factory(t) {
        return new (t || _AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _AuthServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AuthServiceService,
        factory: _AuthServiceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    26954:
    /*!***********************************************************!*\
      !*** ./src/app/custommaterials/custommaterials.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustommaterialsModule": function CustommaterialsModule() {
          return (
            /* binding */
            _CustommaterialsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      45381);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/stepper */
      48210);
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      80395);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/radio */
      15644);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/grid-list */
      85937);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CustommaterialsModule = function _CustommaterialsModule() {
        _classCallCheck(this, _CustommaterialsModule);
      };

      _CustommaterialsModule.ɵfac = function CustommaterialsModule_Factory(t) {
        return new (t || _CustommaterialsModule)();
      };

      _CustommaterialsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _CustommaterialsModule
      });
      _CustommaterialsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__.MatBadgeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.DragDropModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__.MatBadgeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.DragDropModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_CustommaterialsModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__.MatBadgeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.DragDropModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule],
          exports: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__.MatBadgeModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.DragDropModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__.MatGridListModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule]
        });
      })();
      /***/

    },

    /***/
    37759:
    /*!************************************************!*\
      !*** ./src/app/layouts/auth/auth.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthComponent": function AuthComponent() {
          return (
            /* binding */
            _AuthComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AuthComponent = /*#__PURE__*/function () {
        function _AuthComponent() {
          _classCallCheck(this, _AuthComponent);
        }

        _createClass(_AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AuthComponent;
      }();

      _AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || _AuthComponent)();
      };

      _AuthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AuthComponent,
        selectors: [["me-auth"]],
        decls: 2,
        vars: 0,
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auth works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    27372:
    /*!************************************************!*\
      !*** ./src/app/layouts/home/home.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      75428);
      /* harmony import */


      var src_app_authentication_dialogs_updatepassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/authentication/dialogs/updatepassword/updatepassword.component */
      47397);
      /* harmony import */


      var src_app_authentication_dialogs_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/authentication/dialogs/userprofile/userprofile.component */
      34093);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/layout */
      66883);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/sharedservice.service */
      92797);
      /* harmony import */


      var src_app_authentication_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/authentication/services/auth-service.service */
      91208);
      /* harmony import */


      var src_app_shared_services_rolepermission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/rolepermission.service */
      85214);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/divider */
      1124);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      55434);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      365);

      function HomeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-bar", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_button_4_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_button_4_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](31);

            return _r3.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeComponent_button_4_mat_icon_1_Template, 2, 0, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomeComponent_button_4_mat_icon_2_Template, 2, 0, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_r3.opened);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.opened);
        }
      }

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent(observer, router, sharedService, authService, dialog, rolepermissionService) {
          _classCallCheck(this, _HomeComponent);

          this.observer = observer;
          this.router = router;
          this.sharedService = sharedService;
          this.authService = authService;
          this.dialog = dialog;
          this.rolepermissionService = rolepermissionService;
          this.currentYear = new Date().getFullYear();
          this.user = "default";
          this.pending_approval_count = 0;
          this.permissions = {
            "viewchecklist": false,
            "reportactivityprogress": false,
            "viewactivityprogress": false,
            "manageusersrolespermissions": false,
            "registeruser": false,
            "rolesandpermissons": false,
            "systemsetup": false,
            "reportconsolidation": false,
            "addfunddisbursement": false,
            "reportcontract": false,
            "viewcontract": false,
            "addgfscode": false,
            "setupmilestone": false,
            "addinstitution": false
          };
          this.userrolepermissionArray = [];
          this.activityprogressmilestone = [];
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.isAuthenticated() == false) {
              this.router.navigate(['/login']);
            } else {
              //set username
              this.user = localStorage.getItem('user_name'); //get activity progress milestone

              this.getActProgressMilestoneByInstitution_Id(localStorage.getItem('institution_id'));
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            this.observer.observe(['(max-width: 800px)']).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(1)).subscribe(function (res) {
              if (res.matches) {
                _this3.sidenav.mode = 'over';

                _this3.sidenav.close();
              } else {
                _this3.sidenav.mode = 'side';

                _this3.sidenav.open();
              }
            });
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.authService.logout();
          }
        }, {
          key: "showProfile",
          value: function showProfile() {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "50%"; //dialogConfig.height="90%";

            this.dialog.open(src_app_authentication_dialogs_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_1__.UserprofileComponent, dialogConfig).afterClosed().subscribe(function (dialogData) {});
          }
        }, {
          key: "onChangePassword",
          value: function onChangePassword() {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.width = "50%"; //dialogConfig.height="90%";

            this.dialog.open(src_app_authentication_dialogs_updatepassword_updatepassword_component__WEBPACK_IMPORTED_MODULE_0__.UpdatepasswordComponent, dialogConfig).afterClosed().subscribe(function (dialogData) {});
          }
        }, {
          key: "getActProgressMilestoneByInstitution_Id",
          value: function getActProgressMilestoneByInstitution_Id(inst_id) {
            var _this4 = this;

            this.sharedService.isLoading.next(true);
            this.sharedService.getProgressMilestoneByInstitution_Id(inst_id).subscribe(function (result) {
              _this4.sharedService.isLoading.next(false); //console.log(result.data);


              _this4.activityprogressmilestone = result.data; //get role and permission

              _this4.checklist_rolepermission(localStorage.getItem('role_id'));
            }, function (errorResponse) {
              console.log("Error: " + errorResponse);
            });
          }
        }, {
          key: "checklist_rolepermission",
          value: function checklist_rolepermission(role_id) {
            var _this5 = this;

            this.sharedService.isLoading.next(true);
            this.rolepermissionService.getpermissionsByRoleId(role_id).subscribe(function (result) {
              _this5.sharedService.isLoading.next(false);

              _this5.userrolepermissionArray = result.data;

              for (var i = 0; i < _this5.userrolepermissionArray.length; ++i) {
                if (_this5.userrolepermissionArray[i].permission.permission_code == 'superadmin') {
                  _this5.permissions.viewchecklist = true;
                  _this5.permissions.reportactivityprogress = true;
                  _this5.permissions.viewactivityprogress = true;
                  _this5.permissions.manageusersrolespermissions = true;
                  _this5.permissions.registeruser = true;
                  _this5.permissions.rolesandpermissons = true;
                  _this5.permissions.systemsetup = true;
                  _this5.permissions.reportconsolidation = true;
                  _this5.permissions.addfunddisbursement = true;
                  _this5.permissions.reportcontract = true;
                  _this5.permissions.viewcontract = true;
                  _this5.permissions.addgfscode = true;
                  _this5.permissions.setupmilestone = true;
                  _this5.permissions.addinstitution = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'viewchecklist') {
                  _this5.permissions.viewchecklist = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'systemsetup') {
                  _this5.permissions.systemsetup = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'reportactivityprogress') {
                  _this5.permissions.reportactivityprogress = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'viewactivityprogress') {
                  _this5.permissions.viewactivityprogress = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'manageusersrolespermissions') {
                  _this5.permissions.manageusersrolespermissions = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'registeruser') {
                  _this5.permissions.manageusersrolespermissions = true;
                  _this5.permissions.registeruser = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'rolesandpermissons') {
                  _this5.permissions.manageusersrolespermissions = true;
                  _this5.permissions.rolesandpermissons = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'reportconsolidation') {
                  _this5.permissions.reportconsolidation = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'addfunddisbursement') {
                  _this5.permissions.addfunddisbursement = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'reportcontract') {
                  _this5.permissions.reportcontract = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'viewcontract') {
                  _this5.permissions.viewcontract = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'addgfscode') {
                  _this5.permissions.addgfscode = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'setupmilestone') {
                  _this5.permissions.setupmilestone = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'addinstitution') {
                  _this5.permissions.addinstitution = true;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'approvemilestonelevel1') {
                  //this.progress_level = '1';
                  _this5.pending_approval_count = _this5.activityprogressmilestone.filter(function (item) {
                    return item.progress_level == '1';
                  }).length;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'approvemilestonelevel2') {
                  //this.progress_level = '2';
                  _this5.pending_approval_count = _this5.activityprogressmilestone.filter(function (item) {
                    return item.progress_level == '2';
                  }).length;
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'approvemilestonelevel3') {//this.progress_level = '3';
                }

                if (_this5.userrolepermissionArray[i].permission.permission_code == 'addactualprogress') {
                  //this.progress_level = '0';
                  _this5.pending_approval_count = _this5.activityprogressmilestone.filter(function (item) {
                    return item.progress_level == '0';
                  }).length;
                }
              }
            }, function (errorResponse) {
              console.log("Error: " + errorResponse);
            });
          }
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_2__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_authentication_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_rolepermission_service__WEBPACK_IMPORTED_MODULE_4__.RolepermissionService));
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        viewQuery: function HomeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
          }
        },
        decls: 97,
        vars: 7,
        consts: [[1, "spinner-container"], [4, "ngIf"], [1, "mat-elevation-z8"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "example-spacer"], [1, "user-menu", 3, "matMenuTriggerFor"], [1, "fa", "fa-caret-down"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["sidenav", "matSidenav"], [1, "logo-image", "d-none", "d-md-block"], ["src", "/assets/images/logo.png", "alt", "", 1, "log-img"], ["fxLayout", "column", 1, "navigation-menu"], ["id", "MainMenu"], [1, "list-group", "panel", "menu-items"], ["routerLink", "/dashboard", "data-parent", "#MainMenu", 1, "list-group-item", "list-group-item-success", "menu-button"], ["routerLink", "/user/register", "data-parent", "#MainMenu", 1, "list-group-item", "list-group-item-success", "menu-button"], ["href", "#progress", "data-toggle", "collapse", "data-parent", "#MainMenu", 1, "list-group-item", "list-group-item-success", "menu-button"], ["id", "progress", 1, "collapse"], ["routerLink", "/requesting/request", 1, "list-group-item", "sub-menu-button"], [1, "fa", "fa-caret-right"], ["routerLink", "#", 1, "list-group-item", "sub-menu-button"], ["routerLink", "/reports/logs", 1, "list-group-item", "sub-menu-button"], ["href", "#config", "data-toggle", "collapse", "data-parent", "#MainMenu", 1, "list-group-item", "list-group-item-success", "menu-button"], ["id", "config", 1, "collapse"], ["routerLink", "/user/rolesandpermissions", 1, "list-group-item", "sub-menu-button"], ["routerLink", "/requesting/mnrtsystem", 1, "list-group-item", "sub-menu-button"], ["routerLink", "/requesting/institution", 1, "list-group-item", "sub-menu-button"], ["routerLink", "/requesting/priority", 1, "list-group-item", "sub-menu-button"], ["mat-button", "", 1, "menu-button"], [2, "padding", "8px"], ["mat-footer", "", 1, "footer"], ["mode", "indeterminate", 2, "color", "goldenrod"], ["mat-icon-button", "", 3, "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomeComponent_button_4_Template, 3, 2, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-menu", null, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_14_listener() {
              return ctx.showProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_19_listener() {
              return ctx.onChangePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "loop");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_24_listener() {
              return ctx.onLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "power_settings_new");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-sidenav", 2, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Change Request Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "people");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Registered Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "track_changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Change Requests");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Request Logs");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Approvals");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "System Setup");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Roles and Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Projects and System");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Institutions");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Priorities");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "book");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "User Manual");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "mat-sidenav-content", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 5, ctx.sharedService.isLoading));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.mode === "over");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" All Rights Reserved \xA9 ", ctx.currentYear, " Ministry of Natural Resources and Tourism.\n");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBar],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
        styles: [".spinner-container[_ngcontent-%COMP%] {\n  height: 4px;\n  background: whitesmoke;\n}\n\n.manual-doc[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3c9640;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.log-img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 110px;\n  padding: 10px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background: whitesmoke;\n  color: #3c9640;\n  border-bottom: 1px solid #3c9640;\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: gold !important;\n}\n\n.mat-drawer-inner-container[_ngcontent-%COMP%] {\n  height: 100vh !important;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: calc(200px + 5vw);\n  height: 100% !important;\n  border-right: none;\n  background: #3c9640;\n  color: white;\n  padding: 15px;\n  text-align: center;\n}\n\n.menu-items[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  align-items: left;\n}\n\n.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: whitesmoke !important;\n}\n\n.menu-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: gold !important;\n}\n\n.panel[_ngcontent-%COMP%] {\n  background: #3c9640;\n}\n\n.list-group.panel[_ngcontent-%COMP%]    > .list-group-item[_ngcontent-%COMP%] {\n  background: #3c9640;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: #3c9640 !important;\n  padding: 8px 5px !important;\n}\n\ni[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.content[_ngcontent-%COMP%] {\n  align-items: left !important;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 100px);\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 1rem;\n}\n\n.menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.sub-menu-button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 0.9rem;\n}\n\n.sub-menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.sub-menu-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-weight: normal;\n}\n\n.designation[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 0.7rem;\n  color: lightgrey;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-top: 5px;\n  text-align: center;\n  background: whitesmoke;\n  color: #3c9640;\n  border-top: 1px solid #3c9640;\n}\n\n.user-menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  grid-gap: 5px;\n  gap: 5px;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: calc(100vw - 270px);\n  height: calc(100vh - 105px);\n  background: black;\n  opacity: 0.8;\n  z-index: 99;\n}\n\n.position[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 47%;\n}\n\n@media (max-width: 800px) {\n  .loader-container[_ngcontent-%COMP%] {\n    width: calc(100vw);\n    height: calc(100vh - 105px);\n  }\n\n  .position[_ngcontent-%COMP%] {\n    top: 50%;\n    left: 50%;\n  }\n}\n\n.lds-default[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: #3c9640;\n  border-radius: 50%;\n  -webkit-animation: lds-default 1.2s linear infinite;\n          animation: lds-default 1.2s linear infinite;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  top: 37px;\n  left: 66px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n  top: 22px;\n  left: 62px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n  top: 11px;\n  left: 52px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n  top: 7px;\n  left: 37px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n  top: 11px;\n  left: 22px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n  top: 22px;\n  left: 11px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n  top: 37px;\n  left: 7px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n  top: 52px;\n  left: 11px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n  top: 62px;\n  left: 22px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10) {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n  top: 66px;\n  left: 37px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11) {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n  top: 62px;\n  left: 52px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12) {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n  top: 52px;\n  left: 62px;\n}\n\n@-webkit-keyframes lds-default {\n  0%, 20%, 80%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n}\n\n@keyframes lds-default {\n  0%, 20%, 80%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9lbnZpcm9ubWVudHMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtFQUNBLGNDVFU7QURPZDs7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBS0k7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFGSjs7QUFLRTtFQUNJLGNBQUE7QUFGTjs7QUFLSTtFQUNFLHNCQUFBO0VBQ0EsY0M5QlE7RUQrQlIsZ0NBQUE7QUFGTjs7QUFLRTtFQUVNLHNCQUFBO0FBSFI7O0FBTUU7RUFDRSx3QkFBQTtBQUhKOztBQU1FO0VBRUksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJDaERRO0VEaURSLFlBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7QUFMTjs7QUFVRTtFQUNJLFdBQUE7RUFDRixnQkFBQTtFQUNBLGlCQUFBO0FBUEo7O0FBU0k7RUFDSSxxQkFBQTtFQUNBLDRCQUFBO0FBUFI7O0FBU0k7RUFDSSxzQkFBQTtBQVBSOztBQVVFO0VBQ0UsbUJDdkVVO0FEZ0VkOztBQVNFO0VBR0UsbUJDNUVVO0FEb0VkOztBQVVFO0VBQ0ksdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBUE47O0FBVUU7RUFDSSxrQkFBQTtBQVBOOztBQVdFO0VBQ0ksNEJBQUE7QUFSTjs7QUFXRTtFQUNJLDJCQUFBO0FBUk47O0FBV0U7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBUk47O0FBVU07RUFDSSxpQkFBQTtBQVJWOztBQVdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFTSTtFQUNJLGlCQUFBO0FBUFI7O0FBU0k7RUFDSSxrQkFBQTtBQVBSOztBQVdFO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUk47O0FBV0U7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFSTjs7QUFXRTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUk47O0FBV0U7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFSTjs7QUFVRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0N2SlE7RUR3SlIsNkJBQUE7QUFQTjs7QUFVRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUFQSjs7QUFXRTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVJOOztBQVdFO0VBQ0ksUUFBQTtFQUNBLFNBQUE7QUFSTjs7QUFXRTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSwyQkFBQTtFQVJSOztFQVdJO0lBQ0ksUUFBQTtJQUNBLFNBQUE7RUFSUjtBQUNGOztBQWFFO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWE47O0FBYUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJDM01RO0VENE1SLGtCQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQVZOOztBQVlJO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBVE47O0FBV0k7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFSTjs7QUFVSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVBOOztBQVNJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBTk47O0FBUUk7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFMTjs7QUFPSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUpOOztBQU1JO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBSE47O0FBS0k7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGTjs7QUFJSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUROOztBQUdJO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQU47O0FBRUk7RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDTjs7QUFDSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVOOztBQUFJO0VBQ0U7SUFDRSxtQkFBQTtFQUdOO0VBREk7SUFDRSxxQkFBQTtFQUdOO0FBQ0Y7O0FBVEk7RUFDRTtJQUNFLG1CQUFBO0VBR047RUFESTtJQUNFLHFCQUFBO0VBR047QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2Vudmlyb25tZW50cy9fdmFyaWFibGVzJztcblxuXG4uc3Bpbm5lci1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiA0cHg7IFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIH1cbiAgXG4gIC5tYW51YWwtZG9je1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG4gICAgY29sb3I6JGdyZWVuX2NvbG9yO1xuICB9XG5cbiAgLmxvZ297XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgfVxuICAgIFxuICAgIC5sb2ctaW1ne1xuICAgIHdpZHRoOjEyMHB4OyBcbiAgICBoZWlnaHQ6MTEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIFxuICAuZXhhbXBsZS1zcGFjZXIge1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuICAgIFxuICAgIG1hdC10b29sYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZTtcbiAgICAgIGNvbG9yOiRncmVlbl9jb2xvcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JlZW5fY29sb3I7XG4gIH1cbiAgXG4gIC5zZWxlY3RlZHtcbiAgICAgIFxuICAgICAgICBjb2xvcjpnb2xkICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgfVxuICAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cbiAgXG4gIG1hdC1zaWRlbmF2IHtcbiAgICAgIC8vIG1hcmdpbjogMTZweDtcbiAgICAgIHdpZHRoOiBjYWxjKDIwMHB4ICsgNXZ3KTtcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYmFja2dyb3VuZDogJGdyZWVuX2NvbG9yO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvL21hcmdpbi10b3A6IDVweDtcbiAgfVxuXG5cbiAgLm1lbnUtaXRlbXN7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICAgIFxuICAgIGF7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDtcbiAgICB9XG4gICAgYTpob3ZlcntcbiAgICAgICAgY29sb3I6IGdvbGQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLnBhbmVse1xuICAgIGJhY2tncm91bmQ6ICRncmVlbl9jb2xvcjtcbiAgfVxuICAubGlzdC1ncm91cC5wYW5lbCA+IC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6ICRncmVlbl9jb2xvcjtcbiAgfVxuICAubGlzdC1ncm91cC1pdGVte1xuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5fY29sb3IgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDhweCA1cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgaXtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIFxuICB9XG4gIFxuICAuY29udGVudHtcbiAgICAgIGFsaWduLWl0ZW1zOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XG4gIH1cbiAgXG4gIC5tZW51LWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICBcbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgfVxuICAuc3ViLW1lbnUtYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIG1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuICAgIGl7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG59XG4gIFxuICAuYXZhdGFyIHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICAubmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAuZGVzaWduYXRpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICBjb2xvcjogbGlnaHRncmV5O1xuICB9XG4gIFxuICBtYXQtZGl2aWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuICAuZm9vdGVye1xuICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOndoaXRlc21va2U7XG4gICAgICBjb2xvcjogJGdyZWVuX2NvbG9yO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRncmVlbl9jb2xvcjtcbiAgfVxuICBcbiAgLnVzZXItbWVudXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICB9XG4gIFxuICAvLyAtLS0tLS0tLS0tLS0tLXNwaW5uZXItLS0tLS0tLS0tLS0tLS1cbiAgLmxvYWRlci1jb250YWluZXJ7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDI3MHB4KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwNXB4KTtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgei1pbmRleDogOTk7XG4gIFxuICB9XG4gIC5wb3NpdGlvbntcbiAgICAgIHRvcDogNTAlOyBcbiAgICAgIGxlZnQ6IDQ3JTtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcbiAgICAgIC5sb2FkZXItY29udGFpbmVye1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3KTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDVweCk7XG4gICAgICBcbiAgICAgIH1cbiAgICAgIC5wb3NpdGlvbntcbiAgICAgICAgICB0b3A6IDUwJTsgXG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgfVxuICB9XG4gIFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIC5sZHMtZGVmYXVsdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICB9XG4gICAgLmxkcy1kZWZhdWx0IGRpdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW5fY29sb3I7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBhbmltYXRpb246IGxkcy1kZWZhdWx0IDEuMnMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAgICAgdG9wOiAzN3B4O1xuICAgICAgbGVmdDogNjZweDtcbiAgICB9XG4gICAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgICAgIHRvcDogMjJweDtcbiAgICAgIGxlZnQ6IDYycHg7XG4gICAgfVxuICAgIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gICAgICB0b3A6IDExcHg7XG4gICAgICBsZWZ0OiA1MnB4O1xuICAgIH1cbiAgICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuICAgICAgdG9wOiA3cHg7XG4gICAgICBsZWZ0OiAzN3B4O1xuICAgIH1cbiAgICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICAgICAgdG9wOiAxMXB4O1xuICAgICAgbGVmdDogMjJweDtcbiAgICB9XG4gICAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoNikge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgIHRvcDogMjJweDtcbiAgICAgIGxlZnQ6IDExcHg7XG4gICAgfVxuICAgIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gICAgICB0b3A6IDM3cHg7XG4gICAgICBsZWZ0OiA3cHg7XG4gICAgfVxuICAgIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XG4gICAgICB0b3A6IDUycHg7XG4gICAgICBsZWZ0OiAxMXB4O1xuICAgIH1cbiAgICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCg5KSB7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgICAgdG9wOiA2MnB4O1xuICAgICAgbGVmdDogMjJweDtcbiAgICB9XG4gICAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoMTApIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gICAgICB0b3A6IDY2cHg7XG4gICAgICBsZWZ0OiAzN3B4O1xuICAgIH1cbiAgICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxMSkge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgICB0b3A6IDYycHg7XG4gICAgICBsZWZ0OiA1MnB4O1xuICAgIH1cbiAgICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxMikge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICAgIHRvcDogNTJweDtcbiAgICAgIGxlZnQ6IDYycHg7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgbGRzLWRlZmF1bHQge1xuICAgICAgMCUsIDIwJSwgODAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIH1cbiAgICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgIiwiJGdvbGRfY29sb3I6ICNGRkFBMDA7XG4kZ3JlZW5fY29sb3I6ICMzYzk2NDA7IC8vICMxMzUwMjk7XG4kYmFja19jb2xvcjp3aGl0ZXNtb2tlO1xuJG1ucnRfZm9udF9mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4kQmViYXNfZm9udDonQmViYXMgTmV1ZScsIGN1cnNpdmU7XG4kZ3JleTFfZm9udF9jb2xvcjojMTgxOTFBO1xuJGdyZXkyX2ZvbnRfY29sb3I6IzI0MjUyNjtcbiRncmV5M19mb250X2NvbG9yOiAjM2YzZjNmO1xuIl19 */"]
      });
      /***/
    },

    /***/
    76413:
    /*!************************************************************!*\
      !*** ./src/app/shared/services/httpinterceptor.service.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpinterceptorService": function HttpinterceptorService() {
          return (
            /* binding */
            _HttpinterceptorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HttpinterceptorService = /*#__PURE__*/function () {
        function _HttpinterceptorService() {
          _classCallCheck(this, _HttpinterceptorService);
        }

        _createClass(_HttpinterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var userToken = localStorage.getItem('token');
            var modifiedReq = req.clone({
              headers: req.headers.set('Authorization', "Bearer ".concat(userToken))
            });
            return next.handle(modifiedReq);
          }
        }]);

        return _HttpinterceptorService;
      }();

      _HttpinterceptorService.ɵfac = function HttpinterceptorService_Factory(t) {
        return new (t || _HttpinterceptorService)();
      };

      _HttpinterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _HttpinterceptorService,
        factory: _HttpinterceptorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    85214:
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/rolepermission.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolepermissionService": function RolepermissionService() {
          return (
            /* binding */
            _RolepermissionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _sharedservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sharedservice.service */
      92797);

      var _RolepermissionService = /*#__PURE__*/function () {
        function _RolepermissionService(httpClient, sharedService) {
          _classCallCheck(this, _RolepermissionService);

          this.httpClient = httpClient;
          this.sharedService = sharedService; //role permission array

          this.userrolepermission = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null); //checklist progress level

          this.progress_level = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        }

        _createClass(_RolepermissionService, [{
          key: "handleError",
          value: function handleError(errorResponse) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorResponse.error);
          }
        }, {
          key: "getpermissionsByRoleId",
          value: function getpermissionsByRoleId(id) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/rolespermissions?role_id=' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getuserrolepermission",
          value: function getuserrolepermission(role_id) {
            var _this6 = this;

            this.sharedService.isLoading.next(true);
            this.getpermissionsByRoleId(role_id).subscribe(function (result) {
              _this6.sharedService.isLoading.next(false);

              _this6.userrolepermission.next(result.data); //console.log(this.userrolepermission.value);

            }, function (errorResponse) {
              console.log("Error: " + errorResponse);
            });
          }
        }]);

        return _RolepermissionService;
      }();

      _RolepermissionService.ɵfac = function RolepermissionService_Factory(t) {
        return new (t || _RolepermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_sharedservice_service__WEBPACK_IMPORTED_MODULE_1__.SharedserviceService));
      };

      _RolepermissionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _RolepermissionService,
        factory: _RolepermissionService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    92797:
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/sharedservice.service.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedserviceService": function SharedserviceService() {
          return (
            /* binding */
            _SharedserviceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _SharedserviceService = /*#__PURE__*/function () {
        function _SharedserviceService(snackBar, httpClient) {
          _classCallCheck(this, _SharedserviceService);

          this.snackBar = snackBar;
          this.httpClient = httpClient;
          this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.horizontalPosition = 'right';
          this.verticalPosition = 'top';
        }

        _createClass(_SharedserviceService, [{
          key: "handleError",
          value: function handleError(errorResponse) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorResponse.error);
          } //Success snark

        }, {
          key: "openSnackBar",
          value: function openSnackBar(message) {
            this.snackBar.open(message, 'close', {
              duration: 5000,
              panelClass: ['successSnarkBar'],
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition
            });
          } //Failure snark

        }, {
          key: "openFailureSnackBar",
          value: function openFailureSnackBar(message) {
            this.snackBar.open(message, 'close', {
              duration: 5000,
              panelClass: ['failureSnarkBar'],
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition
            });
          }
        }, {
          key: "getactivitiesByInstID",
          value: function getactivitiesByInstID(id) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/viewactivity?institution_id=' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getContractsByInstID",
          value: function getContractsByInstID(id) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/view-contract?instituion_id=' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getMilestones",
          value: function getMilestones() {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/milestones').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getProgressMilestoneByActId",
          value: function getProgressMilestoneByActId(id) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/view-activity-prog-mile?activity_id=' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getProgressMilestoneByInstitution_Id",
          value: function getProgressMilestoneByInstitution_Id(id) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/view-activity-progress-milestone?institution_id=' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getDisbursementMilestoneByActId",
          value: function getDisbursementMilestoneByActId(id) {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/view-funddisbursement-milestone?activity_id=' + id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
            ;
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/users').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
          }
        }, {
          key: "getInstitutions",
          value: function getInstitutions() {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/institutions').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
          }
        }, {
          key: "getRoles",
          value: function getRoles() {
            return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/roles').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
          }
        }]);

        return _SharedserviceService;
      }();

      _SharedserviceService.ɵfac = function SharedserviceService_Factory(t) {
        return new (t || _SharedserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
      };

      _SharedserviceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _SharedserviceService,
        factory: _SharedserviceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        // baseURL: 'http://localhost:8000/',
        // //baseURL: 'http://41.59.90.211:8000/',
        // leaderImgURL: 'http://localhost:4200/assets/images/leaders/',
        //production: false,
        baseURL: window["env"]["baseURL"] || "default",
        production: window["env"]["production"] || "default"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map