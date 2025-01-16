/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/classes/admin/client/admin-app-loader.ts":
/*!******************************************************!*\
  !*** ./src/classes/admin/client/admin-app-loader.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminAppLoader: () => (/* binding */ AdminAppLoader)\n/* harmony export */ });\n/* harmony import */ var _admin_client_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-client-base */ \"./src/classes/admin/client/admin-client-base.ts\");\n/* harmony import */ var _methods_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../methods/client */ \"./src/methods/client/index.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers */ \"./src/helpers/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar _a;\n\n\n\nclass AdminAppLoader extends _admin_client_base__WEBPACK_IMPORTED_MODULE_0__.AdminClientBase {\n    constructor() {\n        super(...arguments);\n        this.showNotification = (message, type) => (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.showNotification)(this.messageId, message, type);\n        this.navBack = () => (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.navBack)(this.messageId);\n    }\n}\n_a = AdminAppLoader;\nAdminAppLoader.init = () => __awaiter(void 0, void 0, void 0, function* () {\n    var _b;\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.initListener)();\n    const messageId = (_b = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParam)('messageId')) !== null && _b !== void 0 ? _b : '';\n    const payload = yield (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.getInit)(messageId);\n    return new _a({\n        messageId,\n        shopId: payload.shopId,\n        locale: payload.locale\n    });\n});\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/admin/client/admin-app-loader.ts?");

/***/ }),

/***/ "./src/classes/admin/client/admin-appointment-details.ts":
/*!***************************************************************!*\
  !*** ./src/classes/admin/client/admin-appointment-details.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminAppointmentDetails: () => (/* binding */ AdminAppointmentDetails)\n/* harmony export */ });\n/* harmony import */ var _admin_client_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-client-base */ \"./src/classes/admin/client/admin-client-base.ts\");\n/* harmony import */ var _methods_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../methods/client */ \"./src/methods/client/index.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers */ \"./src/helpers/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar _a;\n\n\n\nclass AdminAppointmentDetails extends _admin_client_base__WEBPACK_IMPORTED_MODULE_0__.AdminClientBase {\n    constructor(props) {\n        super(props);\n        this.getAppointment = () => this.appointmentId;\n        this.showNotification = (message, type) => (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.showNotification)(this.messageId, message, type);\n        this.appointmentId = props.appointmentId;\n    }\n}\n_a = AdminAppointmentDetails;\nAdminAppointmentDetails.init = () => __awaiter(void 0, void 0, void 0, function* () {\n    var _b;\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.initListener)();\n    const messageId = (_b = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParam)('messageId')) !== null && _b !== void 0 ? _b : '';\n    const payload = yield (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.getInit)(messageId);\n    return new _a({\n        messageId,\n        shopId: payload.shopId,\n        locale: payload.locale,\n        appointmentId: payload.extra.appointmentId\n    });\n});\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/admin/client/admin-appointment-details.ts?");

/***/ }),

/***/ "./src/classes/admin/client/admin-client-base.ts":
/*!*******************************************************!*\
  !*** ./src/classes/admin/client/admin-client-base.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminClientBase: () => (/* binding */ AdminClientBase)\n/* harmony export */ });\n/* harmony import */ var _methods_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../methods/client */ \"./src/methods/client/index.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ \"./src/helpers/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass AdminClientBase {\n    constructor(props) {\n        this.token = null;\n        this.getShopId = () => this.shopId;\n        this.getLocale = () => this.locale;\n        this.getToken = () => __awaiter(this, void 0, void 0, function* () {\n            if (this.token && !(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isTokenExpired)(this.token)) {\n                return this.token;\n            }\n            else {\n                const token = yield (0,_methods_client__WEBPACK_IMPORTED_MODULE_0__.getToken)(this.messageId);\n                this.token = token;\n                return this.token;\n            }\n        });\n        this.messageId = props.messageId;\n        this.shopId = props.shopId;\n        this.locale = props.locale;\n        (0,_methods_client__WEBPACK_IMPORTED_MODULE_0__.initPageSizeListener)(this.messageId);\n    }\n}\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/admin/client/admin-client-base.ts?");

/***/ }),

/***/ "./src/classes/admin/client/index.ts":
/*!*******************************************!*\
  !*** ./src/classes/admin/client/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminAppLoader: () => (/* reexport safe */ _admin_app_loader__WEBPACK_IMPORTED_MODULE_0__.AdminAppLoader),\n/* harmony export */   AdminAppointmentDetails: () => (/* reexport safe */ _admin_appointment_details__WEBPACK_IMPORTED_MODULE_1__.AdminAppointmentDetails)\n/* harmony export */ });\n/* harmony import */ var _admin_app_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-app-loader */ \"./src/classes/admin/client/admin-app-loader.ts\");\n/* harmony import */ var _admin_appointment_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-appointment-details */ \"./src/classes/admin/client/admin-appointment-details.ts\");\n\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/admin/client/index.ts?");

/***/ }),

/***/ "./src/classes/admin/host/admin-host-app-loader.ts":
/*!*********************************************************!*\
  !*** ./src/classes/admin/host/admin-host-app-loader.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminHostAppLoader: () => (/* binding */ AdminHostAppLoader)\n/* harmony export */ });\n/* harmony import */ var _admin_host_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-host-base */ \"./src/classes/admin/host/admin-host-base.ts\");\n/* harmony import */ var _methods_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../methods/host */ \"./src/methods/host/index.ts\");\n\n\nclass AdminHostAppLoader extends _admin_host_base__WEBPACK_IMPORTED_MODULE_0__.AdminHostBase {\n    constructor(props) {\n        super(props);\n        (0,_methods_host__WEBPACK_IMPORTED_MODULE_1__.onNotification)(this.messageId, props.onNotification);\n        props.onBack && (0,_methods_host__WEBPACK_IMPORTED_MODULE_1__.onBack)(this.messageId, props.onBack);\n    }\n}\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/admin/host/admin-host-app-loader.ts?");

/***/ }),

/***/ "./src/classes/admin/host/admin-host-appointment-details.ts":
/*!******************************************************************!*\
  !*** ./src/classes/admin/host/admin-host-appointment-details.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminHostAppointmentDetails: () => (/* binding */ AdminHostAppointmentDetails)\n/* harmony export */ });\n/* harmony import */ var _admin_host_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-host-base */ \"./src/classes/admin/host/admin-host-base.ts\");\n/* harmony import */ var _methods_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../methods/host */ \"./src/methods/host/index.ts\");\n\n\nclass AdminHostAppointmentDetails extends _admin_host_base__WEBPACK_IMPORTED_MODULE_0__.AdminHostBase {\n    constructor(props) {\n        super(props);\n        (0,_methods_host__WEBPACK_IMPORTED_MODULE_1__.onNotification)(this.messageId, props.onNotification);\n    }\n}\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/admin/host/admin-host-appointment-details.ts?");

/***/ }),

/***/ "./src/classes/admin/host/admin-host-base.ts":
/*!***************************************************!*\
  !*** ./src/classes/admin/host/admin-host-base.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminHostBase: () => (/* binding */ AdminHostBase)\n/* harmony export */ });\n/* harmony import */ var _methods_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../methods/host */ \"./src/methods/host/index.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ \"./src/helpers/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass AdminHostBase {\n    constructor(props) {\n        this.source = null;\n        this.timestamp = props.timestamp,\n            this.messageId = props.messageId;\n        this.shopId = props.shopId;\n        this.locale = props.locale;\n        this.extra = props.extra;\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.initListener)();\n        (0,_methods_host__WEBPACK_IMPORTED_MODULE_0__.onInit)(this.messageId, (source) => {\n            this.source = source;\n            (0,_methods_host__WEBPACK_IMPORTED_MODULE_0__.sendAdminInit)(this.messageId, this.source, this.shopId, this.locale, this.extra);\n        });\n        (0,_methods_host__WEBPACK_IMPORTED_MODULE_0__.onGetToken)(this.messageId, () => __awaiter(this, void 0, void 0, function* () {\n            const token = yield props.getToken();\n            this.source && (0,_methods_host__WEBPACK_IMPORTED_MODULE_0__.sendToken)(this.messageId, this.source, token);\n        }));\n        props.onHeightChange && (0,_methods_host__WEBPACK_IMPORTED_MODULE_0__.onHeight)(this.messageId, props.onHeightChange);\n    }\n}\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/admin/host/admin-host-base.ts?");

/***/ }),

/***/ "./src/classes/admin/host/index.ts":
/*!*****************************************!*\
  !*** ./src/classes/admin/host/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminHostAppLoader: () => (/* reexport safe */ _admin_host_app_loader__WEBPACK_IMPORTED_MODULE_0__.AdminHostAppLoader),\n/* harmony export */   AdminHostAppointmentDetails: () => (/* reexport safe */ _admin_host_appointment_details__WEBPACK_IMPORTED_MODULE_1__.AdminHostAppointmentDetails)\n/* harmony export */ });\n/* harmony import */ var _admin_host_app_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-host-app-loader */ \"./src/classes/admin/host/admin-host-app-loader.ts\");\n/* harmony import */ var _admin_host_appointment_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-host-appointment-details */ \"./src/classes/admin/host/admin-host-appointment-details.ts\");\n\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/admin/host/index.ts?");

/***/ }),

/***/ "./src/classes/experience/client/experience-client-base.ts":
/*!*****************************************************************!*\
  !*** ./src/classes/experience/client/experience-client-base.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExperienceClientBase: () => (/* binding */ ExperienceClientBase)\n/* harmony export */ });\n/* harmony import */ var _methods_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../methods/client */ \"./src/methods/client/index.ts\");\n\nclass ExperienceClientBase {\n    constructor(props) {\n        this.getSessionId = () => this.sessionId;\n        this.getShopId = () => this.shopId;\n        this.getProductId = () => this.productId;\n        this.getVariantId = () => this.variantId;\n        this.getQuantity = () => this.quantity;\n        this.getResources = () => this.resources;\n        this.getLocale = () => this.locale;\n        this.getTimezone = () => this.timezone;\n        this.getSlot = () => this.slot;\n        this.messageId = props.messageId;\n        this.sessionId = props.sessionId;\n        this.shopId = props.shopId;\n        this.productId = props.productId;\n        this.variantId = props.variantId;\n        this.quantity = props.quantity;\n        this.resources = props.resources;\n        this.locale = props.locale;\n        this.timezone = props.timezone;\n        this.slot = props.slot;\n        (0,_methods_client__WEBPACK_IMPORTED_MODULE_0__.initPageSizeListener)(this.messageId);\n    }\n}\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/experience/client/experience-client-base.ts?");

/***/ }),

/***/ "./src/classes/experience/client/experience-confirmation-page.ts":
/*!***********************************************************************!*\
  !*** ./src/classes/experience/client/experience-confirmation-page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExperienceConfirmationPage: () => (/* binding */ ExperienceConfirmationPage)\n/* harmony export */ });\n/* harmony import */ var _experience_client_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience-client-base */ \"./src/classes/experience/client/experience-client-base.ts\");\n/* harmony import */ var _methods_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../methods/client */ \"./src/methods/client/index.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers */ \"./src/helpers/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar _a;\n\n\n\nclass ExperienceConfirmationPage extends _experience_client_base__WEBPACK_IMPORTED_MODULE_0__.ExperienceClientBase {\n    constructor(props) {\n        super(props);\n        this.getAppointmentId = () => this.appointmentId;\n        this.onDone = (callback) => (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.onNext)(this.messageId, callback);\n        this.acceptDone = () => (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.acceptNext)(this.messageId);\n        this.rejectDone = () => (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.rejectNext)(this.messageId);\n        this.appointmentId = props.appointmentId;\n    }\n}\n_a = ExperienceConfirmationPage;\nExperienceConfirmationPage.init = () => __awaiter(void 0, void 0, void 0, function* () {\n    var _b;\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.initListener)();\n    const messageId = (_b = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParam)('messageId')) !== null && _b !== void 0 ? _b : '';\n    const payload = yield (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.getInit)(messageId);\n    return new _a({\n        messageId: messageId,\n        sessionId: payload.sessionId,\n        shopId: payload.shopId,\n        productId: payload.productId,\n        variantId: payload.variantId,\n        quantity: payload.quantity,\n        resources: payload.resources,\n        locale: payload.locale,\n        timezone: payload.timezone,\n        slot: payload.slot,\n        appointmentId: payload.extra.appointmentId\n    });\n});\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/experience/client/experience-confirmation-page.ts?");

/***/ }),

/***/ "./src/classes/experience/client/experience-instant-booking-form.ts":
/*!**************************************************************************!*\
  !*** ./src/classes/experience/client/experience-instant-booking-form.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExperienceInstantBookingForm: () => (/* binding */ ExperienceInstantBookingForm)\n/* harmony export */ });\n/* harmony import */ var _experience_client_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience-client-base */ \"./src/classes/experience/client/experience-client-base.ts\");\n/* harmony import */ var _methods_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../methods/client */ \"./src/methods/client/index.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers */ \"./src/helpers/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar _a;\n\n\n\nclass ExperienceInstantBookingForm extends _experience_client_base__WEBPACK_IMPORTED_MODULE_0__.ExperienceClientBase {\n    constructor() {\n        super(...arguments);\n        this.onConfirm = (callback) => (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.onNext)(this.messageId, callback);\n        this.acceptConfirm = () => (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.acceptNext)(this.messageId);\n        this.rejectConfirm = () => (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.rejectNext)(this.messageId);\n    }\n}\n_a = ExperienceInstantBookingForm;\nExperienceInstantBookingForm.init = () => __awaiter(void 0, void 0, void 0, function* () {\n    var _b;\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.initListener)();\n    const messageId = (_b = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParam)('messageId')) !== null && _b !== void 0 ? _b : '';\n    const payload = yield (0,_methods_client__WEBPACK_IMPORTED_MODULE_1__.getInit)(messageId);\n    return new _a({\n        messageId,\n        sessionId: payload.sessionId,\n        shopId: payload.shopId,\n        productId: payload.productId,\n        variantId: payload.variantId,\n        quantity: payload.quantity,\n        resources: payload.resources,\n        locale: payload.locale,\n        timezone: payload.timezone,\n        slot: payload.slot\n    });\n});\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/experience/client/experience-instant-booking-form.ts?");

/***/ }),

/***/ "./src/classes/experience/client/index.ts":
/*!************************************************!*\
  !*** ./src/classes/experience/client/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExperienceConfirmationPage: () => (/* reexport safe */ _experience_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.ExperienceConfirmationPage),\n/* harmony export */   ExperienceInstantBookingForm: () => (/* reexport safe */ _experience_instant_booking_form__WEBPACK_IMPORTED_MODULE_0__.ExperienceInstantBookingForm)\n/* harmony export */ });\n/* harmony import */ var _experience_instant_booking_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience-instant-booking-form */ \"./src/classes/experience/client/experience-instant-booking-form.ts\");\n/* harmony import */ var _experience_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience-confirmation-page */ \"./src/classes/experience/client/experience-confirmation-page.ts\");\n\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/experience/client/index.ts?");

/***/ }),

/***/ "./src/classes/experience/host/experience-host-base.ts":
/*!*************************************************************!*\
  !*** ./src/classes/experience/host/experience-host-base.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExperienceHostBase: () => (/* binding */ ExperienceHostBase)\n/* harmony export */ });\n/* harmony import */ var _methods_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../methods/host */ \"./src/methods/host/index.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ \"./src/helpers/index.ts\");\n\n\nclass ExperienceHostBase {\n    constructor(props) {\n        var _a;\n        this.source = null;\n        this.getBaseURL = () => (`${this.url}` +\n            `&sessionId=${this.sessionId}` +\n            `&shopId=${this.shopId}` +\n            `&productId=${this.productId}` +\n            `&variantId=${this.variantId}` +\n            `&quantity=${this.quantity}` +\n            `&resources=${JSON.stringify(this.resources.map(resource => resource.id))}` +\n            `&locale=${this.locale}` +\n            `&timezone=${this.timezone}` +\n            `&slot=${this.slot.getTime()}`);\n        this.messageId = (_a = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getUrlParam)('messageId', getSearchFromURL(props.url))) !== null && _a !== void 0 ? _a : '';\n        this.url = props.url;\n        this.sessionId = props.sessionId;\n        this.shopId = props.shopId;\n        this.productId = props.productId;\n        this.variantId = props.variantId;\n        this.quantity = props.quantity;\n        this.resources = props.resources;\n        this.locale = props.locale;\n        this.timezone = props.timezone;\n        this.slot = props.slot;\n        this.extra = props.extra;\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.initListener)();\n        (0,_methods_host__WEBPACK_IMPORTED_MODULE_0__.onInit)(this.messageId, (source) => {\n            this.source = source;\n            (0,_methods_host__WEBPACK_IMPORTED_MODULE_0__.sendExperienceInit)(this.messageId, this.source, this.sessionId, this.shopId, this.productId, this.variantId, this.quantity, this.resources, this.locale, this.timezone, this.slot, this.extra);\n        });\n        props.onHeightChange && (0,_methods_host__WEBPACK_IMPORTED_MODULE_0__.onHeight)(this.messageId, props.onHeightChange);\n    }\n}\nconst getSearchFromURL = (url) => {\n    const windowSearch = url.split('?');\n    if (windowSearch.length === 2) {\n        return windowSearch[1];\n    }\n    else {\n        return null;\n    }\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/experience/host/experience-host-base.ts?");

/***/ }),

/***/ "./src/classes/experience/host/experience-host-confirmation-page.ts":
/*!**************************************************************************!*\
  !*** ./src/classes/experience/host/experience-host-confirmation-page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExperienceHostConfirmationPage: () => (/* binding */ ExperienceHostConfirmationPage)\n/* harmony export */ });\n/* harmony import */ var _experience_host_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience-host-base */ \"./src/classes/experience/host/experience-host-base.ts\");\n/* harmony import */ var _methods_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../methods/host */ \"./src/methods/host/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types */ \"./src/types/index.ts\");\n\n\n\nclass ExperienceHostConfirmationPage extends _experience_host_base__WEBPACK_IMPORTED_MODULE_0__.ExperienceHostBase {\n    constructor() {\n        super(...arguments);\n        this.askForDone = () => this.source && (0,_methods_host__WEBPACK_IMPORTED_MODULE_1__.askNext)(this.messageId, this.source);\n        this.getURL = () => `${this.getBaseURL()}&target=${_types__WEBPACK_IMPORTED_MODULE_2__.AppTarget.EXPERIENCE_INSTANT_BOOKING_FORM}`;\n    }\n}\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/experience/host/experience-host-confirmation-page.ts?");

/***/ }),

/***/ "./src/classes/experience/host/experience-host-instant-booking-form.ts":
/*!*****************************************************************************!*\
  !*** ./src/classes/experience/host/experience-host-instant-booking-form.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExperienceHostInstantBookingForm: () => (/* binding */ ExperienceHostInstantBookingForm)\n/* harmony export */ });\n/* harmony import */ var _experience_host_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience-host-base */ \"./src/classes/experience/host/experience-host-base.ts\");\n/* harmony import */ var _methods_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../methods/host */ \"./src/methods/host/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types */ \"./src/types/index.ts\");\n\n\n\nclass ExperienceHostInstantBookingForm extends _experience_host_base__WEBPACK_IMPORTED_MODULE_0__.ExperienceHostBase {\n    constructor() {\n        super(...arguments);\n        this.askForConfirm = () => this.source && (0,_methods_host__WEBPACK_IMPORTED_MODULE_1__.askNext)(this.messageId, this.source);\n        this.getURL = () => `${this.getBaseURL()}&target=${_types__WEBPACK_IMPORTED_MODULE_2__.AppTarget.EXPERIENCE_INSTANT_BOOKING_FORM}`;\n    }\n}\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/experience/host/experience-host-instant-booking-form.ts?");

/***/ }),

/***/ "./src/classes/experience/host/index.ts":
/*!**********************************************!*\
  !*** ./src/classes/experience/host/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExperienceHostConfirmationPage: () => (/* reexport safe */ _experience_host_confirmation_page__WEBPACK_IMPORTED_MODULE_0__.ExperienceHostConfirmationPage),\n/* harmony export */   ExperienceHostInstantBookingForm: () => (/* reexport safe */ _experience_host_instant_booking_form__WEBPACK_IMPORTED_MODULE_1__.ExperienceHostInstantBookingForm)\n/* harmony export */ });\n/* harmony import */ var _experience_host_confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience-host-confirmation-page */ \"./src/classes/experience/host/experience-host-confirmation-page.ts\");\n/* harmony import */ var _experience_host_instant_booking_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience-host-instant-booking-form */ \"./src/classes/experience/host/experience-host-instant-booking-form.ts\");\n\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/classes/experience/host/index.ts?");

/***/ }),

/***/ "./src/helpers/get-event.ts":
/*!**********************************!*\
  !*** ./src/helpers/get-event.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEvent: () => (/* binding */ getEvent)\n/* harmony export */ });\nconst getEvent = (messageId, action) => `${messageId}_${action}`;\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/helpers/get-event.ts?");

/***/ }),

/***/ "./src/helpers/get-url-param.ts":
/*!**************************************!*\
  !*** ./src/helpers/get-url-param.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUrlParam: () => (/* binding */ getUrlParam)\n/* harmony export */ });\nconst getUrlParam = (name, queryString) => {\n    const urlParams = new URLSearchParams(queryString !== null && queryString !== void 0 ? queryString : window.location.search);\n    return urlParams.get(name);\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/helpers/get-url-param.ts?");

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getEvent: () => (/* reexport safe */ _get_event__WEBPACK_IMPORTED_MODULE_0__.getEvent),\n/* harmony export */   getTokenExpiration: () => (/* reexport safe */ _parse_jwt_token__WEBPACK_IMPORTED_MODULE_4__.getTokenExpiration),\n/* harmony export */   getUrlParam: () => (/* reexport safe */ _get_url_param__WEBPACK_IMPORTED_MODULE_1__.getUrlParam),\n/* harmony export */   initListener: () => (/* reexport safe */ _listener__WEBPACK_IMPORTED_MODULE_3__.initListener),\n/* harmony export */   isTokenExpired: () => (/* reexport safe */ _is_token_expired__WEBPACK_IMPORTED_MODULE_2__.isTokenExpired)\n/* harmony export */ });\n/* harmony import */ var _get_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-event */ \"./src/helpers/get-event.ts\");\n/* harmony import */ var _get_url_param__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-url-param */ \"./src/helpers/get-url-param.ts\");\n/* harmony import */ var _is_token_expired__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-token-expired */ \"./src/helpers/is-token-expired.ts\");\n/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listener */ \"./src/helpers/listener.ts\");\n/* harmony import */ var _parse_jwt_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse-jwt-token */ \"./src/helpers/parse-jwt-token.ts\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/helpers/index.ts?");

/***/ }),

/***/ "./src/helpers/is-token-expired.ts":
/*!*****************************************!*\
  !*** ./src/helpers/is-token-expired.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isTokenExpired: () => (/* binding */ isTokenExpired)\n/* harmony export */ });\n/* harmony import */ var _parse_jwt_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-jwt-token */ \"./src/helpers/parse-jwt-token.ts\");\n\nconst isTokenExpired = (token) => {\n    const now = new Date();\n    if (((0,_parse_jwt_token__WEBPACK_IMPORTED_MODULE_0__.getTokenExpiration)(token) - 30) * 1000 > now.getTime()) { // 30 seconds offset\n        return false;\n    }\n    else {\n        return true;\n    }\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/helpers/is-token-expired.ts?");

/***/ }),

/***/ "./src/helpers/listener.ts":
/*!*********************************!*\
  !*** ./src/helpers/listener.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initListener: () => (/* binding */ initListener)\n/* harmony export */ });\nconst initListener = () => {\n    if (!window.onmessage) {\n        window.onmessage = (event) => {\n            console.info(event.data.action, event);\n            window.dispatchEvent(new CustomEvent(event.data.action, {\n                detail: {\n                    event\n                }\n            }));\n        };\n    }\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/helpers/listener.ts?");

/***/ }),

/***/ "./src/helpers/parse-jwt-token.ts":
/*!****************************************!*\
  !*** ./src/helpers/parse-jwt-token.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTokenExpiration: () => (/* binding */ getTokenExpiration)\n/* harmony export */ });\nconst getTokenExpiration = (token) => {\n    const jwtParsed = parseJwtToken(token);\n    if (jwtParsed) {\n        return jwtParsed.exp;\n    }\n    else {\n        return 0;\n    }\n};\nconst parseJwtToken = (refreshToken) => {\n    const parsedJWT = parseJWT(refreshToken);\n    if (parsedJWT) {\n        return parsedJWT;\n    }\n    else {\n        return null;\n    }\n};\nconst parseJWT = (token) => {\n    try {\n        const base64Url = token.split('.')[1];\n        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');\n        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(c => ('%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))).join(''));\n        return JSON.parse(jsonPayload);\n    }\n    catch (_a) {\n        return null;\n    }\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/helpers/parse-jwt-token.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Action: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.Action),\n/* harmony export */   AdminAppLoader: () => (/* reexport safe */ _classes_admin_client__WEBPACK_IMPORTED_MODULE_1__.AdminAppLoader),\n/* harmony export */   AdminAppointmentDetails: () => (/* reexport safe */ _classes_admin_client__WEBPACK_IMPORTED_MODULE_1__.AdminAppointmentDetails),\n/* harmony export */   AdminHostAppLoader: () => (/* reexport safe */ _classes_admin_host__WEBPACK_IMPORTED_MODULE_0__.AdminHostAppLoader),\n/* harmony export */   AdminHostAppointmentDetails: () => (/* reexport safe */ _classes_admin_host__WEBPACK_IMPORTED_MODULE_0__.AdminHostAppointmentDetails),\n/* harmony export */   AppTarget: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.AppTarget),\n/* harmony export */   ExperienceConfirmationPage: () => (/* reexport safe */ _classes_experience_client__WEBPACK_IMPORTED_MODULE_3__.ExperienceConfirmationPage),\n/* harmony export */   ExperienceHostConfirmationPage: () => (/* reexport safe */ _classes_experience_host__WEBPACK_IMPORTED_MODULE_2__.ExperienceHostConfirmationPage),\n/* harmony export */   ExperienceHostInstantBookingForm: () => (/* reexport safe */ _classes_experience_host__WEBPACK_IMPORTED_MODULE_2__.ExperienceHostInstantBookingForm),\n/* harmony export */   ExperienceInstantBookingForm: () => (/* reexport safe */ _classes_experience_client__WEBPACK_IMPORTED_MODULE_3__.ExperienceInstantBookingForm),\n/* harmony export */   NotificationType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.NotificationType)\n/* harmony export */ });\n/* harmony import */ var _classes_admin_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/admin/host */ \"./src/classes/admin/host/index.ts\");\n/* harmony import */ var _classes_admin_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/admin/client */ \"./src/classes/admin/client/index.ts\");\n/* harmony import */ var _classes_experience_host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/experience/host */ \"./src/classes/experience/host/index.ts\");\n/* harmony import */ var _classes_experience_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/experience/client */ \"./src/classes/experience/client/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ \"./src/types/index.ts\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/index.ts?");

/***/ }),

/***/ "./src/methods/client/authentication.client.ts":
/*!*****************************************************!*\
  !*** ./src/methods/client/authentication.client.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types/index.ts\");\n\n\nconst getToken = (messageId) => {\n    var _a;\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.TOKEN),\n        payload: null\n    };\n    (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data, '*');\n    return new Promise(resolve => {\n        window.addEventListener((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.TOKEN), (e) => {\n            resolve(e.detail.event.data.payload.token);\n        });\n    });\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/methods/client/authentication.client.ts?");

/***/ }),

/***/ "./src/methods/client/events.client.ts":
/*!*********************************************!*\
  !*** ./src/methods/client/events.client.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   acceptNext: () => (/* binding */ acceptNext),\n/* harmony export */   navBack: () => (/* binding */ navBack),\n/* harmony export */   onNext: () => (/* binding */ onNext),\n/* harmony export */   rejectNext: () => (/* binding */ rejectNext),\n/* harmony export */   showNotification: () => (/* binding */ showNotification)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types/index.ts\");\n\n\nconst onNext = (messageId, callback) => {\n    window.addEventListener((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.NEXT), () => callback());\n};\nconst acceptNext = (messageId) => {\n    var _a;\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.NEXT),\n        payload: {\n            isAccepted: true\n        }\n    };\n    (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data, '*');\n};\nconst rejectNext = (messageId) => {\n    var _a;\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.NEXT),\n        payload: {\n            isAccepted: false\n        }\n    };\n    (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data, '*');\n};\nconst navBack = (messageId) => {\n    var _a;\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.BACK),\n        payload: null\n    };\n    (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data, '*');\n};\nconst showNotification = (messageId, message, type) => {\n    var _a;\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.NOTIFICATION),\n        payload: {\n            message,\n            type\n        }\n    };\n    (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data, '*');\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/methods/client/events.client.ts?");

/***/ }),

/***/ "./src/methods/client/index.ts":
/*!*************************************!*\
  !*** ./src/methods/client/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   acceptNext: () => (/* reexport safe */ _events_client__WEBPACK_IMPORTED_MODULE_1__.acceptNext),\n/* harmony export */   getInit: () => (/* reexport safe */ _init_client__WEBPACK_IMPORTED_MODULE_2__.getInit),\n/* harmony export */   getToken: () => (/* reexport safe */ _authentication_client__WEBPACK_IMPORTED_MODULE_0__.getToken),\n/* harmony export */   initPageSizeListener: () => (/* reexport safe */ _init_client__WEBPACK_IMPORTED_MODULE_2__.initPageSizeListener),\n/* harmony export */   navBack: () => (/* reexport safe */ _events_client__WEBPACK_IMPORTED_MODULE_1__.navBack),\n/* harmony export */   onNext: () => (/* reexport safe */ _events_client__WEBPACK_IMPORTED_MODULE_1__.onNext),\n/* harmony export */   rejectNext: () => (/* reexport safe */ _events_client__WEBPACK_IMPORTED_MODULE_1__.rejectNext),\n/* harmony export */   showNotification: () => (/* reexport safe */ _events_client__WEBPACK_IMPORTED_MODULE_1__.showNotification)\n/* harmony export */ });\n/* harmony import */ var _authentication_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.client */ \"./src/methods/client/authentication.client.ts\");\n/* harmony import */ var _events_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.client */ \"./src/methods/client/events.client.ts\");\n/* harmony import */ var _init_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.client */ \"./src/methods/client/init.client.ts\");\n\n\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/methods/client/index.ts?");

/***/ }),

/***/ "./src/methods/client/init.client.ts":
/*!*******************************************!*\
  !*** ./src/methods/client/init.client.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getInit: () => (/* binding */ getInit),\n/* harmony export */   initPageSizeListener: () => (/* binding */ initPageSizeListener)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types/index.ts\");\n\n\nconst getInit = (messageId) => {\n    var _a;\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.INIT)\n    };\n    (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data, '*');\n    return new Promise(resolve => {\n        window.addEventListener((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.INIT), (e) => {\n            resolve(e.detail.event.data.payload);\n        });\n    });\n};\nconst initPageSizeListener = (messageId) => {\n    const resizeObserver = new ResizeObserver(entries => {\n        var _a;\n        const data = {\n            action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.HEIGHT),\n            payload: {\n                height: entries[0].target.clientHeight\n            }\n        };\n        (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data, '*');\n    });\n    resizeObserver.observe(document.body);\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/methods/client/init.client.ts?");

/***/ }),

/***/ "./src/methods/host/authentication.host.ts":
/*!*************************************************!*\
  !*** ./src/methods/host/authentication.host.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onGetToken: () => (/* binding */ onGetToken),\n/* harmony export */   sendToken: () => (/* binding */ sendToken)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types/index.ts\");\n\n\nconst onGetToken = (messageId, callback) => {\n    window.addEventListener((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.TOKEN), () => callback());\n};\nconst sendToken = (messageId, source, token) => {\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.TOKEN),\n        payload: {\n            token\n        }\n    };\n    source.postMessage(data, { targetOrigin: '*' });\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/methods/host/authentication.host.ts?");

/***/ }),

/***/ "./src/methods/host/events.host.ts":
/*!*****************************************!*\
  !*** ./src/methods/host/events.host.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   askNext: () => (/* binding */ askNext),\n/* harmony export */   onBack: () => (/* binding */ onBack),\n/* harmony export */   onHeight: () => (/* binding */ onHeight),\n/* harmony export */   onNotification: () => (/* binding */ onNotification)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types/index.ts\");\n\n\nconst onHeight = (messageId, callback) => {\n    window.addEventListener((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.HEIGHT), (e) => (callback(e.detail.event.data.payload.height)));\n};\nconst askNext = (messageId, source) => {\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.NEXT)\n    };\n    source.postMessage(data, { targetOrigin: '*' });\n    return new Promise(resolve => {\n        window.addEventListener((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.NEXT), (e) => {\n            resolve(e.detail.event.data.payload.isAccepted);\n        });\n    });\n};\nconst onNotification = (messageId, callback) => {\n    window.addEventListener((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.NOTIFICATION), (e) => {\n        const payload = e.detail.event.data.payload;\n        callback(payload.message, payload.type);\n    });\n};\nconst onBack = (messageId, callback) => {\n    window.addEventListener((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.BACK), () => callback());\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/methods/host/events.host.ts?");

/***/ }),

/***/ "./src/methods/host/index.ts":
/*!***********************************!*\
  !*** ./src/methods/host/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   askNext: () => (/* reexport safe */ _events_host__WEBPACK_IMPORTED_MODULE_1__.askNext),\n/* harmony export */   onBack: () => (/* reexport safe */ _events_host__WEBPACK_IMPORTED_MODULE_1__.onBack),\n/* harmony export */   onGetToken: () => (/* reexport safe */ _authentication_host__WEBPACK_IMPORTED_MODULE_0__.onGetToken),\n/* harmony export */   onHeight: () => (/* reexport safe */ _events_host__WEBPACK_IMPORTED_MODULE_1__.onHeight),\n/* harmony export */   onInit: () => (/* reexport safe */ _init_host__WEBPACK_IMPORTED_MODULE_2__.onInit),\n/* harmony export */   onNotification: () => (/* reexport safe */ _events_host__WEBPACK_IMPORTED_MODULE_1__.onNotification),\n/* harmony export */   sendAdminInit: () => (/* reexport safe */ _init_host__WEBPACK_IMPORTED_MODULE_2__.sendAdminInit),\n/* harmony export */   sendExperienceInit: () => (/* reexport safe */ _init_host__WEBPACK_IMPORTED_MODULE_2__.sendExperienceInit),\n/* harmony export */   sendToken: () => (/* reexport safe */ _authentication_host__WEBPACK_IMPORTED_MODULE_0__.sendToken)\n/* harmony export */ });\n/* harmony import */ var _authentication_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.host */ \"./src/methods/host/authentication.host.ts\");\n/* harmony import */ var _events_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.host */ \"./src/methods/host/events.host.ts\");\n/* harmony import */ var _init_host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.host */ \"./src/methods/host/init.host.ts\");\n\n\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/methods/host/index.ts?");

/***/ }),

/***/ "./src/methods/host/init.host.ts":
/*!***************************************!*\
  !*** ./src/methods/host/init.host.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onInit: () => (/* binding */ onInit),\n/* harmony export */   sendAdminInit: () => (/* binding */ sendAdminInit),\n/* harmony export */   sendExperienceInit: () => (/* binding */ sendExperienceInit)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./src/helpers/index.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types/index.ts\");\n\n\nconst onInit = (messageId, callback) => {\n    window.addEventListener((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.INIT), (e) => {\n        callback(e.detail.event.source);\n    });\n};\nconst sendAdminInit = (messageId, source, shopId, locale, extra) => {\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.INIT),\n        payload: {\n            shopId,\n            locale,\n            extra\n        }\n    };\n    source === null || source === void 0 ? void 0 : source.postMessage(data, { targetOrigin: '*' });\n};\nconst sendExperienceInit = (messageId, source, sessionId, shopId, productId, variantId, quantity, resources, locale, timezone, slot, extra) => {\n    const data = {\n        action: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getEvent)(messageId, _types__WEBPACK_IMPORTED_MODULE_1__.Action.INIT),\n        payload: {\n            sessionId,\n            shopId,\n            productId,\n            variantId,\n            quantity,\n            resources,\n            locale,\n            timezone,\n            slot,\n            extra\n        }\n    };\n    source === null || source === void 0 ? void 0 : source.postMessage(data, { targetOrigin: '*' });\n};\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/methods/host/init.host.ts?");

/***/ }),

/***/ "./src/types/action.type.ts":
/*!**********************************!*\
  !*** ./src/types/action.type.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Action: () => (/* binding */ Action)\n/* harmony export */ });\nvar Action;\n(function (Action) {\n    Action[\"INIT\"] = \"INIT\";\n    Action[\"TOKEN\"] = \"TOKEN\";\n    Action[\"HEIGHT\"] = \"HEIGHT\";\n    Action[\"NEXT\"] = \"NEXT\";\n    Action[\"BACK\"] = \"BACK\";\n    Action[\"NOTIFICATION\"] = \"NOTIFICATION\";\n})(Action || (Action = {}));\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/types/action.type.ts?");

/***/ }),

/***/ "./src/types/app-target.type.ts":
/*!**************************************!*\
  !*** ./src/types/app-target.type.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppTarget: () => (/* binding */ AppTarget)\n/* harmony export */ });\nvar AppTarget;\n(function (AppTarget) {\n    AppTarget[\"ADMIN_APP_LOADER\"] = \"ADMIN_APP_LOADER\";\n    AppTarget[\"ADMIN_APPOINTMENT_DETAILS\"] = \"ADMIN_APPOINTMENT_DETAILS\";\n    AppTarget[\"EXPERIENCE_INSTANT_BOOKING_FORM\"] = \"EXPERIENCE_INSTANT_BOOKING_FORM\";\n    AppTarget[\"EXPERIENCE_CONFIRMATION_PAGE\"] = \"EXPERIENCE_CONFIRMATION_PAGE\";\n})(AppTarget || (AppTarget = {}));\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/types/app-target.type.ts?");

/***/ }),

/***/ "./src/types/appointment.type.ts":
/*!***************************************!*\
  !*** ./src/types/appointment.type.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/types/appointment.type.ts?");

/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Action: () => (/* reexport safe */ _action_type__WEBPACK_IMPORTED_MODULE_0__.Action),\n/* harmony export */   AppTarget: () => (/* reexport safe */ _app_target_type__WEBPACK_IMPORTED_MODULE_1__.AppTarget),\n/* harmony export */   NotificationType: () => (/* reexport safe */ _notification_type__WEBPACK_IMPORTED_MODULE_4__.NotificationType)\n/* harmony export */ });\n/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action.type */ \"./src/types/action.type.ts\");\n/* harmony import */ var _app_target_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-target.type */ \"./src/types/app-target.type.ts\");\n/* harmony import */ var _appointment_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointment.type */ \"./src/types/appointment.type.ts\");\n/* harmony import */ var _message_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.type */ \"./src/types/message.type.ts\");\n/* harmony import */ var _notification_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.type */ \"./src/types/notification.type.ts\");\n/* harmony import */ var _resource_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource.type */ \"./src/types/resource.type.ts\");\n/* harmony import */ var _token_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.type */ \"./src/types/token.type.ts\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/types/index.ts?");

/***/ }),

/***/ "./src/types/message.type.ts":
/*!***********************************!*\
  !*** ./src/types/message.type.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/types/message.type.ts?");

/***/ }),

/***/ "./src/types/notification.type.ts":
/*!****************************************!*\
  !*** ./src/types/notification.type.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotificationType: () => (/* binding */ NotificationType)\n/* harmony export */ });\nvar NotificationType;\n(function (NotificationType) {\n    NotificationType[\"SUCCESS\"] = \"SUCCESS\";\n    NotificationType[\"INFO\"] = \"INFO\";\n    NotificationType[\"WARNING\"] = \"WARNING\";\n    NotificationType[\"ERROR\"] = \"ERROR\";\n})(NotificationType || (NotificationType = {}));\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/types/notification.type.ts?");

/***/ }),

/***/ "./src/types/resource.type.ts":
/*!************************************!*\
  !*** ./src/types/resource.type.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/types/resource.type.ts?");

/***/ }),

/***/ "./src/types/token.type.ts":
/*!*********************************!*\
  !*** ./src/types/token.type.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack://@sesamiapp/app-message/./src/types/token.type.ts?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ var __webpack_exports__Action = __webpack_exports__.Action;
/******/ var __webpack_exports__AdminAppLoader = __webpack_exports__.AdminAppLoader;
/******/ var __webpack_exports__AdminAppointmentDetails = __webpack_exports__.AdminAppointmentDetails;
/******/ var __webpack_exports__AdminHostAppLoader = __webpack_exports__.AdminHostAppLoader;
/******/ var __webpack_exports__AdminHostAppointmentDetails = __webpack_exports__.AdminHostAppointmentDetails;
/******/ var __webpack_exports__AppTarget = __webpack_exports__.AppTarget;
/******/ var __webpack_exports__ExperienceConfirmationPage = __webpack_exports__.ExperienceConfirmationPage;
/******/ var __webpack_exports__ExperienceHostConfirmationPage = __webpack_exports__.ExperienceHostConfirmationPage;
/******/ var __webpack_exports__ExperienceHostInstantBookingForm = __webpack_exports__.ExperienceHostInstantBookingForm;
/******/ var __webpack_exports__ExperienceInstantBookingForm = __webpack_exports__.ExperienceInstantBookingForm;
/******/ var __webpack_exports__NotificationType = __webpack_exports__.NotificationType;
/******/ export { __webpack_exports__Action as Action, __webpack_exports__AdminAppLoader as AdminAppLoader, __webpack_exports__AdminAppointmentDetails as AdminAppointmentDetails, __webpack_exports__AdminHostAppLoader as AdminHostAppLoader, __webpack_exports__AdminHostAppointmentDetails as AdminHostAppointmentDetails, __webpack_exports__AppTarget as AppTarget, __webpack_exports__ExperienceConfirmationPage as ExperienceConfirmationPage, __webpack_exports__ExperienceHostConfirmationPage as ExperienceHostConfirmationPage, __webpack_exports__ExperienceHostInstantBookingForm as ExperienceHostInstantBookingForm, __webpack_exports__ExperienceInstantBookingForm as ExperienceInstantBookingForm, __webpack_exports__NotificationType as NotificationType };
/******/ 
