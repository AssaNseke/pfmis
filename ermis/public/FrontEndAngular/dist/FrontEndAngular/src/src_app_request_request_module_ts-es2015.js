"use strict";
(self["webpackChunkfront_end_angular"] = self["webpackChunkfront_end_angular"] || []).push([["src_app_request_request_module_ts"],{

/***/ 31027:
/*!****************************************************************************!*\
  !*** ./src/app/request/dialogs/addinstitution/addinstitution.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddinstitutionComponent": function() { return /* binding */ AddinstitutionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ 5647);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);








function AddinstitutionComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddinstitutionComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vote code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddinstitutionComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vote name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddinstitutionComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Sub Vote code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddinstitutionComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sub Vote name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddinstitutionComponent {
    constructor(matDialogRef, router, sharedService, requestService) {
        this.matDialogRef = matDialogRef;
        this.router = router;
        this.sharedService = sharedService;
        this.requestService = requestService;
    }
    ngOnInit() {
        //Form Validation
        this.instForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            vote_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            vote_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            sub_vote_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            sub_vote_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    onSubmit() {
        let date = new Date().toLocaleString();
        var formdata = new FormData();
        formdata.append("inst_name", this.instForm.value.name);
        formdata.append("vote_code", this.instForm.value.vote_code);
        formdata.append("vote_name", this.instForm.value.vote_name);
        formdata.append("sub_vote_no", this.instForm.value.sub_vote_code);
        formdata.append("sub_vote_name", this.instForm.value.sub_vote_name);
        formdata.append("created_at", date);
        formdata.append("status", "true");
        this.sharedService.isLoading.next(true);
        this.requestService.addIntitutions(formdata).subscribe(result => {
            this.sharedService.isLoading.next(false);
            console.log(result);
            if (result.data != null) {
                this.sharedService.openSnackBar("Institution successifully added!");
                //this.router.navigate(['/cms']);
                this.matDialogRef.close();
            }
            else {
                this.sharedService.openFailureSnackBar("Institution not added!");
            }
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    onClose() {
        this.matDialogRef.close();
    }
}
AddinstitutionComponent.ɵfac = function AddinstitutionComponent_Factory(t) { return new (t || AddinstitutionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
AddinstitutionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddinstitutionComponent, selectors: [["me-addinstitution"]], decls: 44, vars: 7, consts: [[3, "formGroup"], ["mat-dialog-title", ""], [1, "form-group", "col-lg-12", "col-sm-12", "form-input"], [1, "form-row"], [1, "form-group", "col"], ["type", "text", "formControlName", "name", "placeholder", "Enter Name", 1, "form-control", "form-control-sm"], ["class", "text-danger", 4, "ngIf"], ["type", "number", "formControlName", "vote_code", "placeholder", "Vote Code", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "vote_name", "placeholder", "Vote name", 1, "form-control", "form-control-sm"], ["type", "number", "formControlName", "sub_vote_code", "placeholder", "Sub Vote code", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "sub_vote_name", "placeholder", "Sub Vote name", 1, "form-control", "form-control-sm"], ["align", "end"], [1, "btn", "btn-secondary", 2, "margin-right", "10px", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-danger"]], template: function AddinstitutionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Institutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddinstitutionComponent_div_12_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Vote Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddinstitutionComponent_div_19_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Vote Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AddinstitutionComponent_div_25_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Sub Vote Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AddinstitutionComponent_div_32_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Sub Vote Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, AddinstitutionComponent_div_38_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-dialog-actions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddinstitutionComponent_Template_button_click_40_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddinstitutionComponent_Template_button_click_42_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.instForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.instForm.get("name")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.instForm.get("name")) == null ? null : tmp_1_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.instForm.get("vote_code")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.instForm.get("vote_code")) == null ? null : tmp_2_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.instForm.get("vote_name")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.instForm.get("vote_name")) == null ? null : tmp_3_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.instForm.get("sub_vote_code")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.instForm.get("sub_vote_code")) == null ? null : tmp_4_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.instForm.get("sub_vote_name")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.instForm.get("sub_vote_name")) == null ? null : tmp_5_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.instForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRpbnN0aXR1dGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 32549:
/*!****************************************************************************************!*\
  !*** ./src/app/request/dialogs/addmnrtsystem/addmnrtsystem/addmnrtsystem.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddmnrtsystemComponent": function() { return /* binding */ AddmnrtsystemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var src_app_request_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/request/services/request.service */ 5647);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);








function AddmnrtsystemComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddmnrtsystemComponent {
    constructor(matDialogRef, router, sharedService, requestService) {
        this.matDialogRef = matDialogRef;
        this.router = router;
        this.sharedService = sharedService;
        this.requestService = requestService;
    }
    ngOnInit() {
        //Form Validation
        this.mnrtsystemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            mnrtsystem_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    onSubmit() {
        let date = new Date().toLocaleString();
        var formdata = new FormData();
        formdata.append("mnrtsystem_name", this.mnrtsystemForm.value.mnrtsystem_name);
        this.sharedService.isLoading.next(true);
        this.requestService.addMnrtsystem(formdata).subscribe(result => {
            this.sharedService.isLoading.next(false);
            console.log(result);
            if (result.data != null) {
                this.sharedService.openSnackBar("Project successifully added!");
                //this.router.navigate(['/cms']);
                this.matDialogRef.close();
            }
            else {
                this.sharedService.openFailureSnackBar("Project not added!");
            }
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    onClose() {
        this.matDialogRef.close();
    }
}
AddmnrtsystemComponent.ɵfac = function AddmnrtsystemComponent_Factory(t) { return new (t || AddmnrtsystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_request_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
AddmnrtsystemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddmnrtsystemComponent, selectors: [["me-addmnrtsystem"]], decls: 18, vars: 3, consts: [[3, "formGroup"], ["mat-dialog-title", ""], [1, "form-group", "col-lg-12", "col-sm-12", "form-input"], [1, "form-row"], [1, "form-group", "col"], ["type", "text", "formControlName", "mnrtsystem_name", "placeholder", "Enter Name", 1, "form-control", "form-control-sm"], ["class", "text-danger", 4, "ngIf"], ["align", "end"], [1, "btn", "btn-secondary", 2, "margin-right", "10px", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-danger"]], template: function AddmnrtsystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Project/System");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Project/System Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddmnrtsystemComponent_div_12_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddmnrtsystemComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddmnrtsystemComponent_Template_button_click_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.mnrtsystemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.mnrtsystemForm.get("mnrtsystem_name")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.mnrtsystemForm.get("mnrtsystem_name")) == null ? null : tmp_1_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.mnrtsystemForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRtbnJ0c3lzdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 49470:
/*!**********************************************************************************!*\
  !*** ./src/app/request/dialogs/addpriority/addpriority/addpriority.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddpriorityComponent": function() { return /* binding */ AddpriorityComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var src_app_request_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/request/services/request.service */ 5647);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);








function AddpriorityComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddpriorityComponent {
    constructor(matDialogRef, router, sharedService, requestService) {
        this.matDialogRef = matDialogRef;
        this.router = router;
        this.sharedService = sharedService;
        this.requestService = requestService;
    }
    ngOnInit() {
        //Form Validation
        this.priorityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            priority_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    onSubmit() {
        let date = new Date().toLocaleString();
        var formdata = new FormData();
        formdata.append("priority_name", this.priorityForm.value.priority_name);
        this.sharedService.isLoading.next(true);
        this.requestService.addPriority(formdata).subscribe(result => {
            this.sharedService.isLoading.next(false);
            console.log(result);
            if (result.data != null) {
                this.sharedService.openSnackBar("Priority successifully added!");
                //this.router.navigate(['/cms']);
                this.matDialogRef.close();
            }
            else {
                this.sharedService.openFailureSnackBar("Priority not added!");
            }
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    onClose() {
        this.matDialogRef.close();
    }
}
AddpriorityComponent.ɵfac = function AddpriorityComponent_Factory(t) { return new (t || AddpriorityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_request_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
AddpriorityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddpriorityComponent, selectors: [["me-addpriority"]], decls: 18, vars: 3, consts: [[3, "formGroup"], ["mat-dialog-title", ""], [1, "form-group", "col-lg-12", "col-sm-12", "form-input"], [1, "form-row"], [1, "form-group", "col"], ["type", "text", "formControlName", "priority_name", "placeholder", "Enter Name", 1, "form-control", "form-control-sm"], ["class", "text-danger", 4, "ngIf"], ["align", "end"], [1, "btn", "btn-secondary", 2, "margin-right", "10px", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-danger"]], template: function AddpriorityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddpriorityComponent_div_12_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddpriorityComponent_Template_button_click_14_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddpriorityComponent_Template_button_click_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.priorityForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.priorityForm.get("priority_name")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.priorityForm.get("priority_name")) == null ? null : tmp_1_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.priorityForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRwcmlvcml0eS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 26:
/*!********************************************************************!*\
  !*** ./src/app/request/dialogs/addrequest/addrequest.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddrequestComponent": function() { return /* binding */ AddrequestComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ 5647);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);









function AddrequestComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mnrtsystem_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", mnrtsystem_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](mnrtsystem_r12.mnrtsystem_name);
} }
function AddrequestComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cannot be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddrequestComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", category_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r13.category_name);
} }
function AddrequestComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cannot be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddrequestComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddrequestComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priority_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", priority_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](priority_r14.priority_name);
} }
function AddrequestComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Priority is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddrequestComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const institution_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", institution_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](institution_r15.inst_name);
} }
function AddrequestComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Priority is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddrequestComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Deadline is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddrequestComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddrequestComponent {
    constructor(matDialogRef, router, sharedService, authService) {
        this.matDialogRef = matDialogRef;
        this.router = router;
        this.sharedService = sharedService;
        this.authService = authService;
        this.institutions = [];
        this.mnrtsystems = [];
        this.categories = [];
        this.priorities = [];
        this.roles = [];
    }
    ngOnInit() {
        this.getInstitutions();
        this.getProjects();
        this.getRequestcategories();
        this.getPriorities();
        this.getRoles();
        //Form Validation
        this.RequestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            mnrtsystem: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            institution: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            deadline: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    onSubmit() {
        let date = new Date().toLocaleString();
        var formdata = new FormData();
        formdata.append("mnrtsystem_id", this.RequestForm.value.mnrtsystem);
        formdata.append("request_type", this.RequestForm.value.category);
        formdata.append("request_desc", this.RequestForm.value.description);
        formdata.append("institution_id", this.RequestForm.value.institution);
        formdata.append("priority", this.RequestForm.value.priority);
        formdata.append("deadline", this.RequestForm.value.deadline.year + '-' + this.RequestForm.value.deadline.month + '-' + this.RequestForm.value.deadline.day);
        formdata.append("reason", this.RequestForm.value.reason);
        formdata.append("status", "true");
        this.sharedService.isLoading.next(true);
        this.authService.registerUser(formdata).subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result);
            if (result.status == "success") {
                this.sharedService.openSnackBar("Data saved successifully!");
                //this.router.navigate(['/cms']);
                this.matDialogRef.close();
            }
            else {
                this.sharedService.openFailureSnackBar("Request not sent!");
            }
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    onClose() {
        this.matDialogRef.close();
    }
    getInstitutions() {
        this.sharedService.isLoading.next(true);
        this.authService.getInstitutions().subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.institutions = result.data;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    getProjects() {
        this.sharedService.isLoading.next(true);
        this.authService.getProjects().subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.mnrtsystems = result.data;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    getRequestcategories() {
        this.sharedService.isLoading.next(true);
        this.authService.getRequestcategories().subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.categories = result.data;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    getPriorities() {
        this.sharedService.isLoading.next(true);
        this.authService.getPriorities().subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.priorities = result.data;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    getRoles() {
        this.sharedService.isLoading.next(true);
        this.authService.getRoles().subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.roles = result.data;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
}
AddrequestComponent.ɵfac = function AddrequestComponent_Factory(t) { return new (t || AddrequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
AddrequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddrequestComponent, selectors: [["me-addrequest"]], decls: 68, vars: 16, consts: [[3, "formGroup"], ["mat-dialog-title", ""], [1, "form-group", "col-lg-12", "col-sm-12", "form-input"], [1, "form-row"], [1, "form-group", "col"], ["formControlName", "mnrtsystem", 1, "form-control", "form-control-sm"], ["value", "", 3, "selected"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "category", 1, "form-control", "form-control-sm"], ["placeholder", "Comment", "formControlName", "description", "placeholder", "Enter Request Description", 1, "form-control", "form-control-sm"], ["formControlName", "priority", 1, "form-control", "form-control-sm"], ["formControlName", "institution", 1, "form-control", "form-control-sm"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "formControlName", "deadline", "ngbDatepicker", "", 1, "form-control", "form-control-sm"], ["d2", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["placeholder", "Comment", "formControlName", "reason", "placeholder", "Enter Request Description", 1, "form-control", "form-control-sm"], ["align", "end"], [1, "btn", "btn-secondary", 2, "margin-right", "10px", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [3, "value"], [1, "text-danger"]], template: function AddrequestComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add New Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Project/System");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddrequestComponent_option_12_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddrequestComponent_div_13_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Request Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddrequestComponent_option_19_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AddrequestComponent_div_20_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AddrequestComponent_div_28_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AddrequestComponent_option_35_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, AddrequestComponent_div_36_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Institution");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, AddrequestComponent_option_43_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, AddrequestComponent_div_44_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddrequestComponent_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](51); return _r9.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, AddrequestComponent_div_54_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, AddrequestComponent_div_62_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "mat-dialog-actions", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddrequestComponent_Template_button_click_64_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddrequestComponent_Template_button_click_66_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_10_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.RequestForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.mnrtsystems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.RequestForm.get("institution")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.RequestForm.get("institution")) == null ? null : tmp_3_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.RequestForm.get("role")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.RequestForm.get("role")) == null ? null : tmp_6_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.RequestForm.get("description")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.RequestForm.get("description")) == null ? null : tmp_7_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.priorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.RequestForm.get("institution")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx.RequestForm.get("institution")) == null ? null : tmp_10_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.institutions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.RequestForm.get("institution")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx.RequestForm.get("institution")) == null ? null : tmp_13_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.RequestForm.get("deadline")) == null ? null : tmp_14_0.touched) && ((tmp_14_0 = ctx.RequestForm.get("deadline")) == null ? null : tmp_14_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.RequestForm.get("reason")) == null ? null : tmp_15_0.touched) && ((tmp_15_0 = ctx.RequestForm.get("reason")) == null ? null : tmp_15_0.invalid));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbInputDatepicker, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRyZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 64427:
/*!**********************************************************************************!*\
  !*** ./src/app/request/dialogs/deleteinstitution/deleteinstitution.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteinstitutionComponent": function() { return /* binding */ DeleteinstitutionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ 5647);






class DeleteinstitutionComponent {
    constructor(data, matDialogRef, router, sharedService, requestService) {
        this.data = data;
        this.matDialogRef = matDialogRef;
        this.router = router;
        this.sharedService = sharedService;
        this.requestService = requestService;
        this.row = [];
    }
    ngOnInit() {
        this.row = this.data.row;
        console.log(this.data.row);
    }
    onDelete() {
        this.sharedService.isLoading.next(true);
        this.requestService.deleteinstitutionById(this.row.id).subscribe(result => {
            this.sharedService.isLoading.next(false);
            console.log(result);
            if (result.data.id == this.row.id) {
                this.sharedService.openSnackBar("Successifully deleted!");
            }
            else {
                this.sharedService.openSnackBar("Error! Not Deleted.");
            }
            //Close dialog
            this.matDialogRef.close();
        }, errorResponse => {
            this.sharedService.openSnackBar("Error! Not Deleted.");
            console.log("Error: " + errorResponse);
            //Close dialog
            this.matDialogRef.close();
        });
    }
    //Close dialog
    onClose() {
        this.matDialogRef.close();
    }
}
DeleteinstitutionComponent.ɵfac = function DeleteinstitutionComponent_Factory(t) { return new (t || DeleteinstitutionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
DeleteinstitutionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeleteinstitutionComponent, selectors: [["me-deleteinstitution"]], decls: 8, vars: 2, consts: [["mat-dialog-title", ""], ["align", "center"], [1, "btn", "btn-secondary", 2, "margin-right", "10px", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function DeleteinstitutionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteinstitutionComponent_Template_button_click_4_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteinstitutionComponent_Template_button_click_6_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Are you sure you want to delete - ", ctx.row.inst_name, "(", ctx.row.id, ")?");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGVpbnN0aXR1dGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 78230:
/*!*************************************************************************************************!*\
  !*** ./src/app/request/dialogs/deletemnrtsystem/deletemnrtsystem/deletemnrtsystem.component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletemnrtsystemComponent": function() { return /* binding */ DeletemnrtsystemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DeletemnrtsystemComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeletemnrtsystemComponent.ɵfac = function DeletemnrtsystemComponent_Factory(t) { return new (t || DeletemnrtsystemComponent)(); };
DeletemnrtsystemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeletemnrtsystemComponent, selectors: [["me-deletemnrtsystem"]], decls: 2, vars: 0, template: function DeletemnrtsystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deletemnrtsystem works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGVtbnJ0c3lzdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 65642:
/*!*******************************************************************************************!*\
  !*** ./src/app/request/dialogs/deletepriority/deletepriority/deletepriority.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletepriorityComponent": function() { return /* binding */ DeletepriorityComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DeletepriorityComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeletepriorityComponent.ɵfac = function DeletepriorityComponent_Factory(t) { return new (t || DeletepriorityComponent)(); };
DeletepriorityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeletepriorityComponent, selectors: [["me-deletepriority"]], decls: 2, vars: 0, template: function DeletepriorityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deletepriority works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGVwcmlvcml0eS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 46691:
/*!**************************************************************************!*\
  !*** ./src/app/request/dialogs/deleterequest/deleterequest.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleterequestComponent": function() { return /* binding */ DeleterequestComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DeleterequestComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeleterequestComponent.ɵfac = function DeleterequestComponent_Factory(t) { return new (t || DeleterequestComponent)(); };
DeleterequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleterequestComponent, selectors: [["me-deleterequest"]], decls: 2, vars: 0, template: function DeleterequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deleterequest works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGVyZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 32488:
/*!**********************************************************************************!*\
  !*** ./src/app/request/dialogs/updateinstitution/updateinstitution.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateinstitutionComponent": function() { return /* binding */ UpdateinstitutionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ 5647);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);









function UpdateinstitutionComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateinstitutionComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vote code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateinstitutionComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vote name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateinstitutionComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Sub Vote code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UpdateinstitutionComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sub Vote name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class UpdateinstitutionComponent {
    constructor(data, matDialogRef, router, sharedService, requestService) {
        this.data = data;
        this.matDialogRef = matDialogRef;
        this.router = router;
        this.sharedService = sharedService;
        this.requestService = requestService;
        this.record_id = null;
        this.user = "default";
    }
    ngOnInit() {
        //Get current data
        console.log(this.data.row);
        //Get record id
        this.user = localStorage.getItem('user');
        this.record_id = this.data.row.id;
        //this.getInstitutions();
        //this.getRoles();
        //Form Validation
        this.instForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            inst_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.row.inst_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)]),
            vote_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.row.vote_code, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)]),
            sub_vote_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.row.sub_vote_no, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)]),
            vote_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.row.vote_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)]),
            sub_vote_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data.row.sub_vote_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)])
        });
    }
    onSubmit() {
        let date = new Date().toLocaleString();
        var formdata = new FormData();
        //var jina=this.instForm.value.inst_name;
        formdata.append("inst_name", this.instForm.value.inst_name);
        formdata.append("vote_code", this.instForm.value.vote_code);
        formdata.append("vote_name", this.instForm.value.vote_name);
        formdata.append("sub_vote_no", this.instForm.value.sub_vote_no);
        formdata.append("sub_vote_name", this.instForm.value.sub_vote_name);
        formdata.append("updated_at", date);
        formdata.append("updated_by", this.user);
        formdata.append("status", "true");
        //console.log("Submitted data!!!!! "+ formdata)
        //console.log("Submitted data!!!!! "+ jina)
        this.sharedService.isLoading.next(true);
        this.requestService.updateInstitutionById(this.record_id, formdata).subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result);
            if (result.status == "201 Created") {
                this.sharedService.openSnackBar("Successifully registered!");
                //this.router.navigate(['/cms']);
                this.matDialogRef.close();
            }
            else {
                this.sharedService.openFailureSnackBar("Unable to register!");
            }
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    onClose() {
        this.matDialogRef.close();
    }
}
UpdateinstitutionComponent.ɵfac = function UpdateinstitutionComponent_Factory(t) { return new (t || UpdateinstitutionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_0__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService)); };
UpdateinstitutionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UpdateinstitutionComponent, selectors: [["me-updateinstitution"]], decls: 44, vars: 7, consts: [[3, "formGroup"], ["mat-dialog-title", ""], [1, "form-group", "col-lg-12", "col-sm-12", "form-input"], [1, "form-row"], [1, "form-group", "col"], ["type", "text", "formControlName", "inst_name", "placeholder", "Enter Name", 1, "form-control", "form-control-sm"], ["class", "text-danger", 4, "ngIf"], ["type", "number", "formControlName", "vote_code", "placeholder", "Vote Code", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "vote_name", "placeholder", "Vote name", 1, "form-control", "form-control-sm"], ["type", "number", "formControlName", "sub_vote_no", "placeholder", "Sub Vote code", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "sub_vote_name", "placeholder", "Sub Vote name", 1, "form-control", "form-control-sm"], ["align", "end"], [1, "btn", "btn-secondary", 2, "margin-right", "10px", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-danger"]], template: function UpdateinstitutionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Institutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, UpdateinstitutionComponent_div_12_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Vote Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, UpdateinstitutionComponent_div_19_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Vote Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, UpdateinstitutionComponent_div_25_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Sub Vote Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, UpdateinstitutionComponent_div_32_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Sub Vote Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, UpdateinstitutionComponent_div_38_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-dialog-actions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateinstitutionComponent_Template_button_click_40_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateinstitutionComponent_Template_button_click_42_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.instForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.instForm.get("inst_name")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.instForm.get("inst_name")) == null ? null : tmp_1_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.instForm.get("vote_code")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.instForm.get("vote_code")) == null ? null : tmp_2_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.instForm.get("vote_name")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.instForm.get("vote_name")) == null ? null : tmp_3_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.instForm.get("sub_vote_no")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.instForm.get("sub_vote_no")) == null ? null : tmp_4_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.instForm.get("sub_vote_name")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.instForm.get("sub_vote_name")) == null ? null : tmp_5_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.instForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVpbnN0aXR1dGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 90431:
/*!*************************************************************************************************!*\
  !*** ./src/app/request/dialogs/updatemnrtsystem/updatemnrtsystem/updatemnrtsystem.component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatemnrtsystemComponent": function() { return /* binding */ UpdatemnrtsystemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UpdatemnrtsystemComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdatemnrtsystemComponent.ɵfac = function UpdatemnrtsystemComponent_Factory(t) { return new (t || UpdatemnrtsystemComponent)(); };
UpdatemnrtsystemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatemnrtsystemComponent, selectors: [["me-updatemnrtsystem"]], decls: 2, vars: 0, template: function UpdatemnrtsystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "updatemnrtsystem works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVtbnJ0c3lzdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 10510:
/*!*******************************************************************************************!*\
  !*** ./src/app/request/dialogs/updatepriority/updatepriority/updatepriority.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatepriorityComponent": function() { return /* binding */ UpdatepriorityComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UpdatepriorityComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdatepriorityComponent.ɵfac = function UpdatepriorityComponent_Factory(t) { return new (t || UpdatepriorityComponent)(); };
UpdatepriorityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatepriorityComponent, selectors: [["me-updatepriority"]], decls: 2, vars: 0, template: function UpdatepriorityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "updatepriority works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVwcmlvcml0eS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 69643:
/*!**************************************************************************!*\
  !*** ./src/app/request/dialogs/updaterequest/updaterequest.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdaterequestComponent": function() { return /* binding */ UpdaterequestComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UpdaterequestComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdaterequestComponent.ɵfac = function UpdaterequestComponent_Factory(t) { return new (t || UpdaterequestComponent)(); };
UpdaterequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdaterequestComponent, selectors: [["me-updaterequest"]], decls: 2, vars: 0, template: function UpdaterequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "updaterequest works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVyZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 36491:
/*!**************************************************************!*\
  !*** ./src/app/request/pages/approval/approval.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalComponent": function() { return /* binding */ ApprovalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ApprovalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApprovalComponent.ɵfac = function ApprovalComponent_Factory(t) { return new (t || ApprovalComponent)(); };
ApprovalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprovalComponent, selectors: [["me-approval"]], decls: 2, vars: 0, template: function ApprovalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "approval works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9349:
/*!**********************************************************************!*\
  !*** ./src/app/request/pages/institutions/institutions.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstitutionsComponent": function() { return /* binding */ InstitutionsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _dialogs_addinstitution_addinstitution_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/addinstitution/addinstitution.component */ 31027);
/* harmony import */ var _dialogs_deleteinstitution_deleteinstitution_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/deleteinstitution/deleteinstitution.component */ 64427);
/* harmony import */ var _dialogs_updateinstitution_updateinstitution_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/updateinstitution/updateinstitution.component */ 32488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request.service */ 5647);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 80221);

















const _c0 = ["leaderstable"];
function InstitutionsComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " SN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InstitutionsComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r18 + 1, " ");
} }
function InstitutionsComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InstitutionsComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r19.inst_name, " ");
} }
function InstitutionsComponent_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Vote Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InstitutionsComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r20.vote_code, " ");
} }
function InstitutionsComponent_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Vote Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InstitutionsComponent_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r21.vote_name, " ");
} }
function InstitutionsComponent_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Sub Vote ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InstitutionsComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r22.sub_vote_no, " ");
} }
function InstitutionsComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Sub Vote Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InstitutionsComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r23.sub_vote_name, " ");
} }
function InstitutionsComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InstitutionsComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-menu", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstitutionsComponent_mat_cell_37_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const row_r24 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.onDelete(row_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstitutionsComponent_mat_cell_37_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const row_r24 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.onUpdate(row_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r25);
} }
function InstitutionsComponent_mat_header_row_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
} }
function InstitutionsComponent_mat_row_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
} }
const _c1 = function () { return [5, 10, 15, 20]; };
class InstitutionsComponent {
    constructor(requestService, dialog, sharedService) {
        this.requestService = requestService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.data = [];
        this.instArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
        this.displayedColumns = ["sn", "inst_name", "vote_code", "vote_name", "sub_vote_no", "sub_vote_name", "action"];
    }
    ngOnInit() {
        this.getInst();
    }
    getInst() {
        this.sharedService.isLoading.next(true);
        this.requestService.getIntitutions().subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.instArray.data = result.data;
            this.instArray.sort = this.sort;
            this.instArray.paginator = this.paginator;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    onAdd() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
        this.dialog.open(_dialogs_addinstitution_addinstitution_component__WEBPACK_IMPORTED_MODULE_0__.AddinstitutionComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            this.getInst();
        });
    }
    onUpdate(row) {
        //this.messagesService.openSnackBar("Update id"+id);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
        dialogConfig.data = { "row": row };
        this.dialog.open(_dialogs_updateinstitution_updateinstitution_component__WEBPACK_IMPORTED_MODULE_2__.UpdateinstitutionComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            this.getInst();
        });
    }
    onDelete(row) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        //dialogConfig.width = "80%";
        //dialogConfig.height="90%";
        dialogConfig.data = { "row": row };
        this.dialog.open(_dialogs_deleteinstitution_deleteinstitution_component__WEBPACK_IMPORTED_MODULE_1__.DeleteinstitutionComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            this.getInst();
        });
    }
    //Filtering
    applyFilter(filtertext) {
        console.log(filtertext);
        this.instArray.filter = filtertext.trim().toLowerCase();
    }
}
InstitutionsComponent.ɵfac = function InstitutionsComponent_Factory(t) { return new (t || InstitutionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_3__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__.SharedserviceService)); };
InstitutionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InstitutionsComponent, selectors: [["me-institutions"]], viewQuery: function InstitutionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.leaderstable = _t.first);
    } }, decls: 41, vars: 8, consts: [[1, "current-route"], [1, "obj-header"], [1, "heading"], ["mat-button", "", 1, "add", 3, "click"], [2, "font-size", "xx-large !important"], [1, "filter"], ["matInput", "", "placeholder", "Search", 1, "form-control", "shadow-none", 3, "keyup"], ["matSort", "", 3, "dataSource"], ["leaderstable", ""], ["matColumnDef", "sn"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "inst_name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "vote_code"], ["matColumnDef", "vote_name"], ["matColumnDef", "sub_vote_no"], ["matColumnDef", "sub_vote_name"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSizeOptions", "pageIndex", "pageSize"], ["mat-sort-header", ""], [2, "cursor", "pointer", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [2, "color", "red !important"]], template: function InstitutionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "System Setup / Institutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Institutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InstitutionsComponent_Template_button_click_10_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function InstitutionsComponent_Template_input_keyup_14_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, InstitutionsComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, InstitutionsComponent_mat_cell_19_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, InstitutionsComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, InstitutionsComponent_mat_cell_22_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, InstitutionsComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, InstitutionsComponent_mat_cell_25_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](26, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, InstitutionsComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, InstitutionsComponent_mat_cell_28_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](29, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, InstitutionsComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, InstitutionsComponent_mat_cell_31_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](32, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, InstitutionsComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, InstitutionsComponent_mat_cell_34_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](35, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, InstitutionsComponent_mat_header_cell_36_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, InstitutionsComponent_mat_cell_37_Template, 15, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, InstitutionsComponent_mat_header_row_38_Template, 1, 0, "mat-header-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, InstitutionsComponent_mat_row_39_Template, 1, 0, "mat-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "mat-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.instArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx.instArray.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1))("pageIndex", 0)("pageSize", 10);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], styles: ["mat-icon[_ngcontent-%COMP%] {\n  color: #135029 !important;\n}\n\n.add[_ngcontent-%COMP%] {\n  border: none !important;\n  background: none !important;\n  color: #135029 !important;\n}\n\n.mat-column-id[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-sn[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-action[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RpdHV0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFLQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBRko7O0FBSUU7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQURKOztBQUdFO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFBSiIsImZpbGUiOiJpbnN0aXR1dGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbntcbiAgICBjb2xvcjogIzEzNTAyOSAhaW1wb3J0YW50O1xufVxuLmFkZHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMxMzUwMjkgIWltcG9ydGFudDtcbiAgICBcbn1cbi5maWx0ZXJ7XG4gICAgLy9wYWRkaW5nOiA1cHggMCA1cHggMDtcbn1cblxuLm1hdC1jb2x1bW4taWQsIC5tYXQtY29sdW1uLXN0YXR1cyB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAubWF0LWNvbHVtbi1zbiB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgLm1hdC1jb2x1bW4tYWN0aW9uIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9Il19 */"] });


/***/ }),

/***/ 56284:
/*!******************************************************************!*\
  !*** ./src/app/request/pages/mnrtsystem/mnrtsystem.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MnrtsystemComponent": function() { return /* binding */ MnrtsystemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _dialogs_addmnrtsystem_addmnrtsystem_addmnrtsystem_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/addmnrtsystem/addmnrtsystem/addmnrtsystem.component */ 32549);
/* harmony import */ var _dialogs_deletemnrtsystem_deletemnrtsystem_deletemnrtsystem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/deletemnrtsystem/deletemnrtsystem/deletemnrtsystem.component */ 78230);
/* harmony import */ var _dialogs_updatemnrtsystem_updatemnrtsystem_updatemnrtsystem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/updatemnrtsystem/updatemnrtsystem/updatemnrtsystem.component */ 90431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request.service */ 5647);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 80221);

















const _c0 = ["leaderstable"];
function MnrtsystemComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " SN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MnrtsystemComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r10 + 1, " ");
} }
function MnrtsystemComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Project/System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MnrtsystemComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r11.mnrtsystem_name, " ");
} }
function MnrtsystemComponent_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MnrtsystemComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-menu", null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MnrtsystemComponent_mat_cell_25_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const row_r12 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.onDelete(row_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MnrtsystemComponent_mat_cell_25_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const row_r12 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.onUpdate(row_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r13);
} }
function MnrtsystemComponent_mat_header_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
} }
function MnrtsystemComponent_mat_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
} }
const _c1 = function () { return [5, 10, 15, 20]; };
class MnrtsystemComponent {
    constructor(requestService, dialog, sharedService) {
        this.requestService = requestService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.data = [];
        this.instArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
        this.displayedColumns = ["sn", "mnrtsystem_name", "action"];
    }
    ngOnInit() {
        this.getProject();
    }
    getProject() {
        this.sharedService.isLoading.next(true);
        this.requestService.getMnrtProjects().subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.instArray.data = result.data;
            this.instArray.sort = this.sort;
            this.instArray.paginator = this.paginator;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    onAdd() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
        this.dialog.open(_dialogs_addmnrtsystem_addmnrtsystem_addmnrtsystem_component__WEBPACK_IMPORTED_MODULE_0__.AddmnrtsystemComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            this.getProject();
        });
    }
    onUpdate(row) {
        //this.messagesService.openSnackBar("Update id"+id);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
        dialogConfig.data = { "row": row };
        this.dialog.open(_dialogs_updatemnrtsystem_updatemnrtsystem_updatemnrtsystem_component__WEBPACK_IMPORTED_MODULE_2__.UpdatemnrtsystemComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            this.getProject();
        });
    }
    onDelete(row) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        //dialogConfig.width = "80%";
        //dialogConfig.height="90%";
        dialogConfig.data = { "row": row };
        this.dialog.open(_dialogs_deletemnrtsystem_deletemnrtsystem_deletemnrtsystem_component__WEBPACK_IMPORTED_MODULE_1__.DeletemnrtsystemComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            this.getProject();
        });
    }
    //Filtering
    applyFilter(filtertext) {
        console.log(filtertext);
        this.instArray.filter = filtertext.trim().toLowerCase();
    }
}
MnrtsystemComponent.ɵfac = function MnrtsystemComponent_Factory(t) { return new (t || MnrtsystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_3__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__.SharedserviceService)); };
MnrtsystemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MnrtsystemComponent, selectors: [["me-mnrtsystem"]], viewQuery: function MnrtsystemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.leaderstable = _t.first);
    } }, decls: 29, vars: 8, consts: [[1, "current-route"], [1, "obj-header"], [1, "heading"], ["mat-button", "", 1, "add", 3, "click"], [2, "font-size", "xx-large !important"], [1, "filter"], ["matInput", "", "placeholder", "Search", 1, "form-control", "shadow-none", 3, "keyup"], ["matSort", "", 3, "dataSource"], ["leaderstable", ""], ["matColumnDef", "sn"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "mnrtsystem_name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSizeOptions", "pageIndex", "pageSize"], ["mat-sort-header", ""], [2, "cursor", "pointer", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [2, "color", "red !important"]], template: function MnrtsystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Projects and Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Projects/Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MnrtsystemComponent_Template_button_click_10_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function MnrtsystemComponent_Template_input_keyup_14_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, MnrtsystemComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, MnrtsystemComponent_mat_cell_19_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, MnrtsystemComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, MnrtsystemComponent_mat_cell_22_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, MnrtsystemComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, MnrtsystemComponent_mat_cell_25_Template, 15, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, MnrtsystemComponent_mat_header_row_26_Template, 1, 0, "mat-header-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, MnrtsystemComponent_mat_row_27_Template, 1, 0, "mat-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.instArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx.instArray.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1))("pageIndex", 0)("pageSize", 10);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtbnJ0c3lzdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 20133:
/*!**************************************************************!*\
  !*** ./src/app/request/pages/priority/priority.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriorityComponent": function() { return /* binding */ PriorityComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _dialogs_addpriority_addpriority_addpriority_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/addpriority/addpriority/addpriority.component */ 49470);
/* harmony import */ var _dialogs_deletepriority_deletepriority_deletepriority_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/deletepriority/deletepriority/deletepriority.component */ 65642);
/* harmony import */ var _dialogs_updatepriority_updatepriority_updatepriority_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dialogs/updatepriority/updatepriority/updatepriority.component */ 10510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request.service */ 5647);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 80221);

















const _c0 = ["leaderstable"];
function PriorityComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " SN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PriorityComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r10 + 1, " ");
} }
function PriorityComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Project/System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PriorityComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r11.priority_name, " ");
} }
function PriorityComponent_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PriorityComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-menu", null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PriorityComponent_mat_cell_25_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const row_r12 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.onDelete(row_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PriorityComponent_mat_cell_25_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const row_r12 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.onUpdate(row_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r13);
} }
function PriorityComponent_mat_header_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-header-row");
} }
function PriorityComponent_mat_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-row");
} }
const _c1 = function () { return [5, 10, 15, 20]; };
class PriorityComponent {
    constructor(requestService, dialog, sharedService) {
        this.requestService = requestService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.data = [];
        this.instArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
        this.displayedColumns = ["sn", "priority_name", "action"];
    }
    ngOnInit() {
        this.getPriority();
    }
    getPriority() {
        this.sharedService.isLoading.next(true);
        this.requestService.getPriorities().subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.instArray.data = result.data;
            this.instArray.sort = this.sort;
            this.instArray.paginator = this.paginator;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    onAdd() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
        this.dialog.open(_dialogs_addpriority_addpriority_addpriority_component__WEBPACK_IMPORTED_MODULE_0__.AddpriorityComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            this.getPriority();
        });
    }
    onUpdate(row) {
        //this.messagesService.openSnackBar("Update id"+id);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
        dialogConfig.data = { "row": row };
        this.dialog.open(_dialogs_updatepriority_updatepriority_updatepriority_component__WEBPACK_IMPORTED_MODULE_2__.UpdatepriorityComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            this.getPriority();
        });
    }
    onDelete(row) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        //dialogConfig.width = "80%";
        //dialogConfig.height="90%";
        dialogConfig.data = { "row": row };
        this.dialog.open(_dialogs_deletepriority_deletepriority_deletepriority_component__WEBPACK_IMPORTED_MODULE_1__.DeletepriorityComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            this.getPriority();
        });
    }
    //Filtering
    applyFilter(filtertext) {
        console.log(filtertext);
        this.instArray.filter = filtertext.trim().toLowerCase();
    }
}
PriorityComponent.ɵfac = function PriorityComponent_Factory(t) { return new (t || PriorityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_3__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_4__.SharedserviceService)); };
PriorityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PriorityComponent, selectors: [["me-priority"]], viewQuery: function PriorityComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.leaderstable = _t.first);
    } }, decls: 29, vars: 8, consts: [[1, "current-route"], [1, "obj-header"], [1, "heading"], ["mat-button", "", 1, "add", 3, "click"], [2, "font-size", "xx-large !important"], [1, "filter"], ["matInput", "", "placeholder", "Search", 1, "form-control", "shadow-none", 3, "keyup"], ["matSort", "", 3, "dataSource"], ["leaderstable", ""], ["matColumnDef", "sn"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "priority_name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSizeOptions", "pageIndex", "pageSize"], ["mat-sort-header", ""], [2, "cursor", "pointer", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [2, "color", "red !important"]], template: function PriorityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Request Priorities");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Priorities");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PriorityComponent_Template_button_click_10_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function PriorityComponent_Template_input_keyup_14_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, PriorityComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, PriorityComponent_mat_cell_19_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, PriorityComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, PriorityComponent_mat_cell_22_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, PriorityComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, PriorityComponent_mat_cell_25_Template, 15, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, PriorityComponent_mat_header_row_26_Template, 1, 0, "mat-header-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, PriorityComponent_mat_row_27_Template, 1, 0, "mat-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.instArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx.instArray.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1))("pageIndex", 0)("pageSize", 10);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmlvcml0eS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 37081:
/*!************************************************************!*\
  !*** ./src/app/request/pages/request/request.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestComponent": function() { return /* binding */ RequestComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _dialogs_addrequest_addrequest_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dialogs/addrequest/addrequest.component */ 26);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ 5647);
/* harmony import */ var src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/sharedservice.service */ 92797);
/* harmony import */ var src_app_shared_services_rolepermission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/rolepermission.service */ 85214);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 80221);

















const _c0 = ["leaderstable"];
function RequestComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " RN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" CR-000", i_r26 + 1, " ");
} }
function RequestComponent_mat_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Project/Initiative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r27.mnrtsystem.mnrtsystem_name, " ");
} }
function RequestComponent_mat_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r28.request_desc, " ");
} }
function RequestComponent_mat_header_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r29.requestcategory.category_name, " ");
} }
function RequestComponent_mat_header_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r30.priority.priority_name, " ");
} }
function RequestComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Submission Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r31.created_at, "yyyy-MM-dd"), " ");
} }
function RequestComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Deadline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r32.deadline, " ");
} }
function RequestComponent_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r33.reason, " ");
} }
function RequestComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Institution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r34.institution.inst_name, " ");
} }
function RequestComponent_mat_header_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_46_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RequestComponent_mat_cell_46_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RequestComponent_mat_cell_46_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r35.status == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r35.status == false);
} }
function RequestComponent_mat_header_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RequestComponent_mat_cell_49_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-menu", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestComponent_mat_cell_49_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41); const row_r38 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r40.onDelete(row_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r39);
} }
function RequestComponent_mat_header_row_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
} }
function RequestComponent_mat_row_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
} }
const _c1 = function () { return [5, 10, 15, 20]; };
class RequestComponent {
    constructor(authService, dialog, sharedService, rolepermissionService) {
        this.authService = authService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.rolepermissionService = rolepermissionService;
        this.data = [];
        this.leadersArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
        this.leadersdisplayedColumns = ["id", "mnrtsystem_name", "request_desc", "category_name", "priority", "created_at", "deadline", "reason", "institution", "status", "action"];
        this.permissions = { "institutionadmin": false, "superadmin": false };
        this.userrolepermissionArray = [];
    }
    ngOnInit() {
        this.checklist_rolepermission(localStorage.getItem('role_id'));
    }
    getRegisteredUsers() {
        this.sharedService.isLoading.next(true);
        this.authService.getRegisteredUsers().subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.leadersArray.data = result.data;
            this.leadersArray.sort = this.sort;
            this.leadersArray.paginator = this.paginator;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    getRegisteredUsersByInstID(inst_id) {
        this.sharedService.isLoading.next(true);
        this.authService.getRegisteredUsersByInstID(inst_id).subscribe(result => {
            this.sharedService.isLoading.next(false);
            //console.log(result.data);
            this.leadersArray.data = result.data;
            this.leadersArray.sort = this.sort;
            this.leadersArray.paginator = this.paginator;
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
    onAdd() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        //dialogConfig.height="90%";
        this.dialog.open(_dialogs_addrequest_addrequest_component__WEBPACK_IMPORTED_MODULE_0__.AddrequestComponent, dialogConfig).afterClosed().subscribe(dialogData => {
            if (this.permissions.superadmin) {
                this.getRegisteredUsers();
            }
            else if (this.permissions.institutionadmin) {
                this.getRegisteredUsersByInstID(localStorage.getItem('institution_id'));
            }
        });
    }
    // onUpdate(row:any){
    //  //this.messagesService.openSnackBar("Update id"+id);
    //  const dialogConfig = new MatDialogConfig();
    //       dialogConfig.disableClose = false;
    //       dialogConfig.autoFocus = true;
    //       dialogConfig.width = "80%";
    //       //dialogConfig.height="90%";
    //       dialogConfig.data = {"row":row};
    //   this.dialog.open(UpdateLeaderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    //     this.getLeaders();
    //   });
    // }
    // onDelete(row:any){
    //  const dialogConfig = new MatDialogConfig();
    //  dialogConfig.disableClose = false;
    //  dialogConfig.autoFocus = true;
    //  //dialogConfig.width = "80%";
    //  //dialogConfig.height="90%";
    //  dialogConfig.data = {"row":row};
    //   this.dialog.open(DeleteLeaderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    //   this.getLeaders();
    // });
    // }
    onDelete(row) {
        //   const dialogConfig = new MatDialogConfig();
        //   dialogConfig.disableClose = false;
        //   dialogConfig.autoFocus = true;
        //   //dialogConfig.width = "80%";
        //   //dialogConfig.height="90%";
        //   dialogConfig.data = {"row":row};
        //    this.dialog.open(DeleteroleComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
        //     this.getRegisteredUsers();
        //  });
    }
    //Filtering
    applyFilter(filtertext) {
        console.log(filtertext);
        this.leadersArray.filter = filtertext.trim().toLowerCase();
    }
    //Test method
    onTestButton() {
        //this.messagesService.openFailureSnackBar("Message!")
    }
    checklist_rolepermission(role_id) {
        this.sharedService.isLoading.next(true);
        this.rolepermissionService.getpermissionsByRoleId(role_id).subscribe(result => {
            this.sharedService.isLoading.next(false);
            this.userrolepermissionArray = result.data;
            for (var i = 0; i < this.userrolepermissionArray.length; ++i) {
                if (this.userrolepermissionArray[i].permission.permission_code == 'superadmin') {
                    this.permissions.superadmin = true;
                }
                if (this.userrolepermissionArray[i].permission.permission_code == 'institutionadmin') {
                    this.permissions.institutionadmin = true;
                }
            }
            //console.log(this.permissions.institutionadmin)
            if (this.permissions.superadmin) {
                this.getRegisteredUsers();
            }
            else if (this.permissions.institutionadmin) {
                this.getRegisteredUsersByInstID(localStorage.getItem('institution_id'));
            }
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }
}
RequestComponent.ɵfac = function RequestComponent_Factory(t) { return new (t || RequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_sharedservice_service__WEBPACK_IMPORTED_MODULE_2__.SharedserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_rolepermission_service__WEBPACK_IMPORTED_MODULE_3__.RolepermissionService)); };
RequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RequestComponent, selectors: [["me-request"]], viewQuery: function RequestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.leaderstable = _t.first);
    } }, decls: 53, vars: 8, consts: [[1, "current-route"], [1, "obj-header"], [1, "heading"], ["mat-button", "", 1, "add", 3, "click"], [2, "font-size", "xx-large !important"], [1, "filter"], ["matInput", "", "placeholder", "Search", 1, "form-control", "shadow-none", 3, "keyup"], ["matSort", "", 3, "dataSource"], ["leaderstable", ""], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "mnrtsystem_name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "request_desc"], ["matColumnDef", "category_name"], ["matColumnDef", "priority"], ["matColumnDef", "created_at"], ["matColumnDef", "deadline"], ["matColumnDef", "reason"], ["matColumnDef", "institution"], ["matColumnDef", "status"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSizeOptions", "pageIndex", "pageSize"], ["mat-sort-header", ""], [4, "ngIf"], [2, "cursor", "pointer", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function RequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Request Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Add New Change Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestComponent_Template_button_click_10_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function RequestComponent_Template_input_keyup_14_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, RequestComponent_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, RequestComponent_mat_cell_19_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, RequestComponent_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RequestComponent_mat_cell_22_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](23, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, RequestComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, RequestComponent_mat_cell_25_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](26, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, RequestComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RequestComponent_mat_cell_28_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](29, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, RequestComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, RequestComponent_mat_cell_31_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](32, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, RequestComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, RequestComponent_mat_cell_34_Template, 3, 4, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](35, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, RequestComponent_mat_header_cell_36_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, RequestComponent_mat_cell_37_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](38, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, RequestComponent_mat_header_cell_39_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, RequestComponent_mat_cell_40_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](41, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, RequestComponent_mat_header_cell_42_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, RequestComponent_mat_cell_43_Template, 2, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](44, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, RequestComponent_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, RequestComponent_mat_cell_46_Template, 3, 2, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](47, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, RequestComponent_mat_header_cell_48_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, RequestComponent_mat_cell_49_Template, 10, 1, "mat-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, RequestComponent_mat_header_row_50_Template, 1, 0, "mat-header-row", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, RequestComponent_mat_row_51_Template, 1, 0, "mat-row", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "mat-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.leadersArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.leadersdisplayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.leadersdisplayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.leadersArray.data.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1))("pageIndex", 0)("pageSize", 10);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["mat-icon[_ngcontent-%COMP%] {\n  color: #135029 !important;\n}\n\n.add[_ngcontent-%COMP%] {\n  border: none !important;\n  background: none !important;\n  color: #135029 !important;\n}\n\n.mat-column-id[_ngcontent-%COMP%], .mat-column-status[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-sn[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-action[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 4% !important;\n  width: 4% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBS0E7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUlFO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFHRTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQUoiLCJmaWxlIjoicmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1pY29ue1xuICAgIGNvbG9yOiAjMTM1MDI5ICFpbXBvcnRhbnQ7XG59XG4uYWRke1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzEzNTAyOSAhaW1wb3J0YW50O1xuICAgIFxufVxuLy8gLmZpbHRlcntcbi8vICAgICAvL3BhZGRpbmc6IDVweCAwIDVweCAwO1xuLy8gfVxuXG4ubWF0LWNvbHVtbi1pZCwgLm1hdC1jb2x1bW4tc3RhdHVzIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIC5tYXQtY29sdW1uLXNuIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAubWF0LWNvbHVtbi1hY3Rpb24ge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA0JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA0JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9Il19 */"] });


/***/ }),

/***/ 58497:
/*!***************************************************!*\
  !*** ./src/app/request/request-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestRoutingModule": function() { return /* binding */ RequestRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_request_request_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/request/request.component */ 37081);
/* harmony import */ var _pages_approval_approval_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/approval/approval.component */ 36491);
/* harmony import */ var _pages_mnrtsystem_mnrtsystem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/mnrtsystem/mnrtsystem.component */ 56284);
/* harmony import */ var _pages_priority_priority_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/priority/priority.component */ 20133);
/* harmony import */ var _pages_institutions_institutions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/institutions/institutions.component */ 9349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    { path: 'request', component: _pages_request_request_component__WEBPACK_IMPORTED_MODULE_0__.RequestComponent },
    { path: 'approval', component: _pages_approval_approval_component__WEBPACK_IMPORTED_MODULE_1__.ApprovalComponent },
    { path: 'mnrtsystem', component: _pages_mnrtsystem_mnrtsystem_component__WEBPACK_IMPORTED_MODULE_2__.MnrtsystemComponent },
    { path: 'priority', component: _pages_priority_priority_component__WEBPACK_IMPORTED_MODULE_3__.PriorityComponent },
    { path: 'institution', component: _pages_institutions_institutions_component__WEBPACK_IMPORTED_MODULE_4__.InstitutionsComponent },
];
class RequestRoutingModule {
}
RequestRoutingModule.ɵfac = function RequestRoutingModule_Factory(t) { return new (t || RequestRoutingModule)(); };
RequestRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RequestRoutingModule });
RequestRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RequestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 73692:
/*!*******************************************!*\
  !*** ./src/app/request/request.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestModule": function() { return /* binding */ RequestModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _request_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-routing.module */ 58497);
/* harmony import */ var _custommaterials_custommaterials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custommaterials/custommaterials.module */ 26954);
/* harmony import */ var _pages_approval_approval_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/approval/approval.component */ 36491);
/* harmony import */ var _pages_request_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/request/request.component */ 37081);
/* harmony import */ var _dialogs_addrequest_addrequest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/addrequest/addrequest.component */ 26);
/* harmony import */ var _dialogs_updaterequest_updaterequest_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/updaterequest/updaterequest.component */ 69643);
/* harmony import */ var _dialogs_deleterequest_deleterequest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/deleterequest/deleterequest.component */ 46691);
/* harmony import */ var _pages_mnrtsystem_mnrtsystem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/mnrtsystem/mnrtsystem.component */ 56284);
/* harmony import */ var _pages_priority_priority_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/priority/priority.component */ 20133);
/* harmony import */ var _dialogs_addmnrtsystem_addmnrtsystem_addmnrtsystem_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs/addmnrtsystem/addmnrtsystem/addmnrtsystem.component */ 32549);
/* harmony import */ var _dialogs_deletemnrtsystem_deletemnrtsystem_deletemnrtsystem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialogs/deletemnrtsystem/deletemnrtsystem/deletemnrtsystem.component */ 78230);
/* harmony import */ var _dialogs_updatemnrtsystem_updatemnrtsystem_updatemnrtsystem_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/updatemnrtsystem/updatemnrtsystem/updatemnrtsystem.component */ 90431);
/* harmony import */ var _dialogs_addpriority_addpriority_addpriority_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialogs/addpriority/addpriority/addpriority.component */ 49470);
/* harmony import */ var _dialogs_updatepriority_updatepriority_updatepriority_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialogs/updatepriority/updatepriority/updatepriority.component */ 10510);
/* harmony import */ var _dialogs_deletepriority_deletepriority_deletepriority_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogs/deletepriority/deletepriority/deletepriority.component */ 65642);
/* harmony import */ var _pages_institutions_institutions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/institutions/institutions.component */ 9349);
/* harmony import */ var _dialogs_addinstitution_addinstitution_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialogs/addinstitution/addinstitution.component */ 31027);
/* harmony import */ var _dialogs_deleteinstitution_deleteinstitution_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialogs/deleteinstitution/deleteinstitution.component */ 64427);
/* harmony import */ var _dialogs_updateinstitution_updateinstitution_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialogs/updateinstitution/updateinstitution.component */ 32488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2316);





















class RequestModule {
}
RequestModule.ɵfac = function RequestModule_Factory(t) { return new (t || RequestModule)(); };
RequestModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: RequestModule });
RequestModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _request_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestRoutingModule,
            _custommaterials_custommaterials_module__WEBPACK_IMPORTED_MODULE_1__.CustommaterialsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](RequestModule, { declarations: [_pages_approval_approval_component__WEBPACK_IMPORTED_MODULE_2__.ApprovalComponent,
        _pages_request_request_component__WEBPACK_IMPORTED_MODULE_3__.RequestComponent,
        _dialogs_addrequest_addrequest_component__WEBPACK_IMPORTED_MODULE_4__.AddrequestComponent,
        _dialogs_updaterequest_updaterequest_component__WEBPACK_IMPORTED_MODULE_5__.UpdaterequestComponent,
        _dialogs_deleterequest_deleterequest_component__WEBPACK_IMPORTED_MODULE_6__.DeleterequestComponent,
        _pages_mnrtsystem_mnrtsystem_component__WEBPACK_IMPORTED_MODULE_7__.MnrtsystemComponent,
        _pages_priority_priority_component__WEBPACK_IMPORTED_MODULE_8__.PriorityComponent,
        _dialogs_addmnrtsystem_addmnrtsystem_addmnrtsystem_component__WEBPACK_IMPORTED_MODULE_9__.AddmnrtsystemComponent,
        _dialogs_deletemnrtsystem_deletemnrtsystem_deletemnrtsystem_component__WEBPACK_IMPORTED_MODULE_10__.DeletemnrtsystemComponent,
        _dialogs_updatemnrtsystem_updatemnrtsystem_updatemnrtsystem_component__WEBPACK_IMPORTED_MODULE_11__.UpdatemnrtsystemComponent,
        _dialogs_addpriority_addpriority_addpriority_component__WEBPACK_IMPORTED_MODULE_12__.AddpriorityComponent,
        _dialogs_updatepriority_updatepriority_updatepriority_component__WEBPACK_IMPORTED_MODULE_13__.UpdatepriorityComponent,
        _dialogs_deletepriority_deletepriority_deletepriority_component__WEBPACK_IMPORTED_MODULE_14__.DeletepriorityComponent,
        _pages_institutions_institutions_component__WEBPACK_IMPORTED_MODULE_15__.InstitutionsComponent,
        _dialogs_addinstitution_addinstitution_component__WEBPACK_IMPORTED_MODULE_16__.AddinstitutionComponent,
        _dialogs_deleteinstitution_deleteinstitution_component__WEBPACK_IMPORTED_MODULE_17__.DeleteinstitutionComponent,
        _dialogs_updateinstitution_updateinstitution_component__WEBPACK_IMPORTED_MODULE_18__.UpdateinstitutionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _request_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestRoutingModule,
        _custommaterials_custommaterials_module__WEBPACK_IMPORTED_MODULE_1__.CustommaterialsModule] }); })();


/***/ }),

/***/ 5647:
/*!*****************************************************!*\
  !*** ./src/app/request/services/request.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": function() { return /* binding */ RequestService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);






class RequestService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        //Check if user login
        this.userinfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    }
    handleError(errorResponse) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorResponse.error);
    }
    getIntitutions() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/institutions').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    addIntitutions(form) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/insertInstitution', form).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    deleteinstitutionById(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/deleteInstitution/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    updateInstitutionById(id, form) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/updateInstitution/' + id, form).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    getRegisteredUsers() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/requestall').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    getMnrtProjects() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/mnrtsystems').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    getMnrtPriorities() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/priorities').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    getRegisteredUsersByInstID(inst_id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/user?institution_id=' + inst_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    updatePassword(form) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/update-password', form).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    registerUser(formdata) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/request', formdata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    addMnrtsystem(formdata) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/mnrtsystem', formdata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    addPriority(formdata) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/priority', formdata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    registerRole(formdata) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/insertRole', formdata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    updateRoleById(id, formdata) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/updateRole/' + id, formdata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    userLogin(formdata) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/login', formdata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    getInstitutions() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/institutions').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    getProjects() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/mnrtsystems').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    getRequestcategories() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/categories').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    getPriorities() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/priorities').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    getRoles() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/roles').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    deleteroleById(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/deleteRole/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    getUserById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/user/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    getallPermissions() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/permissions').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    getpermissionsByRoleId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/rolespermissions?role_id=' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    addrolespermission(id, data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/insertdelete-rolepermission?role_id=' + id, data, { headers: { "Content-Type": "application/json" } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
    saveUserData(result) {
        localStorage.setItem("token", result.token.original.token);
        localStorage.setItem("user_name", result.data.name);
        localStorage.setItem("user_id", result.data.id);
        localStorage.setItem("role_id", result.data.role_id);
        localStorage.setItem("institution_id", result.data.institution_id);
        const data = {
            token: result.token,
            user_name: result.data.name
        };
        this.userinfo.next(data);
    }
    //check if user is authenticated
    isAuthenticated() {
        let token = localStorage.getItem("token");
        if (token) {
            return true;
        }
        else {
            return false;
        }
    }
    //logout
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_info');
        localStorage.removeItem("role_id");
        localStorage.removeItem("institution_id");
        //console.log('localstorage remove access_token...');rgb(92, 223, 136)
        this.router.navigate(['/login']);
    }
    passResetResquest(formdata) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseURL + 'api/req-password-reset', formdata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
        ;
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
RequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_request_request_module_ts-es2015.js.map