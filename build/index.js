var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
System.register("types/action.type", [], function (exports_1, context_1) {
    "use strict";
    var Action;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Action) {
                Action["INIT"] = "INIT";
                Action["TOKEN"] = "TOKEN";
                Action["NEXT"] = "NEXT";
            })(Action || (exports_1("Action", Action = {})));
        }
    };
});
System.register("types/environment.type", [], function (exports_2, context_2) {
    "use strict";
    var Environment;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            (function (Environment) {
                Environment["ADMIN_APP"] = "ADMIN_APP";
                Environment["EXPERIENCE_INSTANT_BOOKING"] = "EXPERIENCE_INSTANT_BOOKING";
            })(Environment || (exports_2("Environment", Environment = {})));
        }
    };
});
System.register("types/message.type", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("types/team-member.type", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("types/token.type", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("types/index", ["types/action.type", "types/environment.type", "types/message.type", "types/team-member.type", "types/token.type"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_6(exports);
    }
    return {
        setters: [
            function (action_type_1_1) {
                exportStar_1(action_type_1_1);
            },
            function (environment_type_1_1) {
                exportStar_1(environment_type_1_1);
            },
            function (message_type_1_1) {
                exportStar_1(message_type_1_1);
            },
            function (team_member_type_1_1) {
                exportStar_1(team_member_type_1_1);
            },
            function (token_type_1_1) {
                exportStar_1(token_type_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app/authentication.app", ["types/index"], function (exports_7, context_7) {
    "use strict";
    var types_1, getToken;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (types_1_1) {
                types_1 = types_1_1;
            }
        ],
        execute: function () {
            exports_7("getToken", getToken = (clientId) => {
                var _a;
                const data = {
                    action: types_1.Action.TOKEN,
                    payload: {
                        clientId
                    }
                };
                (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data);
                return new Promise(resolve => {
                    window.addEventListener(types_1.Action.TOKEN, (e) => {
                        resolve(e.detail.event.data.payload.token);
                    });
                });
            });
        }
    };
});
System.register("app/events.app", ["types/index"], function (exports_8, context_8) {
    "use strict";
    var types_2, onNext, acceptNext, rejectNext;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (types_2_1) {
                types_2 = types_2_1;
            }
        ],
        execute: function () {
            exports_8("onNext", onNext = (callback) => {
                window.addEventListener(types_2.Action.NEXT, () => callback());
            });
            exports_8("acceptNext", acceptNext = () => {
                var _a;
                const data = {
                    action: types_2.Action.NEXT,
                    payload: {
                        isAccepted: true
                    }
                };
                (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data);
            });
            exports_8("rejectNext", rejectNext = () => {
                var _a;
                const data = {
                    action: types_2.Action.NEXT,
                    payload: {
                        isAccepted: false
                    }
                };
                (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data);
            });
        }
    };
});
System.register("app/init.app", ["types/index"], function (exports_9, context_9) {
    "use strict";
    var types_3, getInit;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (types_3_1) {
                types_3 = types_3_1;
            }
        ],
        execute: function () {
            exports_9("getInit", getInit = () => {
                var _a;
                const data = {
                    action: types_3.Action.INIT
                };
                (_a = window.top) === null || _a === void 0 ? void 0 : _a.postMessage(data);
                return new Promise(resolve => {
                    window.addEventListener(types_3.Action.INIT, (e) => {
                        resolve(e.detail.event.data.payload);
                    });
                });
            });
        }
    };
});
System.register("utils/listener", [], function (exports_10, context_10) {
    "use strict";
    var initListener;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
            exports_10("initListener", initListener = () => {
                if (!window.onmessage) {
                    window.onmessage = (event) => {
                        window.dispatchEvent(new CustomEvent(event.data.action, {
                            detail: {
                                event
                            }
                        }));
                    };
                }
            });
        }
    };
});
System.register("utils/parse-jwt-token", [], function (exports_11, context_11) {
    "use strict";
    var getTokenExpiration, parseJwtToken, parseJWT;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
            exports_11("getTokenExpiration", getTokenExpiration = (token) => {
                const jwtParsed = parseJwtToken(token);
                if (jwtParsed) {
                    return jwtParsed.exp;
                }
                else {
                    return 0;
                }
            });
            parseJwtToken = (refreshToken) => {
                const parsedJWT = parseJWT(refreshToken);
                if (parsedJWT) {
                    return parsedJWT;
                }
                else {
                    return null;
                }
            };
            parseJWT = (token) => {
                try {
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(c => ('%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))).join(''));
                    return JSON.parse(jsonPayload);
                }
                catch (_a) {
                    return null;
                }
            };
        }
    };
});
System.register("utils/is-token-expired", ["utils/parse-jwt-token"], function (exports_12, context_12) {
    "use strict";
    var parse_jwt_token_1, isTokenExpired;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (parse_jwt_token_1_1) {
                parse_jwt_token_1 = parse_jwt_token_1_1;
            }
        ],
        execute: function () {
            exports_12("isTokenExpired", isTokenExpired = (token) => {
                const now = new Date();
                if ((parse_jwt_token_1.getTokenExpiration(token) - 30) * 1000 > now.getTime()) { // 30 seconds offset
                    return false;
                }
                else {
                    return true;
                }
            });
        }
    };
});
System.register("utils/index", ["utils/listener", "utils/parse-jwt-token", "utils/is-token-expired"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_13(exports);
    }
    return {
        setters: [
            function (listener_1_1) {
                exportStar_2(listener_1_1);
            },
            function (parse_jwt_token_2_1) {
                exportStar_2(parse_jwt_token_2_1);
            },
            function (is_token_expired_1_1) {
                exportStar_2(is_token_expired_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("app/sesami-admin", ["app/authentication.app", "app/init.app", "utils/index"], function (exports_14, context_14) {
    "use strict";
    var _a, authentication_app_1, init_app_1, utils_1, SesamiAdmin;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (authentication_app_1_1) {
                authentication_app_1 = authentication_app_1_1;
            },
            function (init_app_1_1) {
                init_app_1 = init_app_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            SesamiAdmin = class SesamiAdmin {
                constructor(clientId, environment, shopId, locale) {
                    this.environment = null;
                    this.token = null;
                    this.getEnvironment = () => this.environment;
                    this.getShopId = () => this.shopId;
                    this.getLocale = () => this.locale;
                    this.getToken = () => __awaiter(this, void 0, void 0, function* () {
                        if (this.token && !utils_1.isTokenExpired(this.token)) {
                            return this.token;
                        }
                        else {
                            const token = yield authentication_app_1.getToken(this.clientId);
                            this.token = token;
                            return token;
                        }
                    });
                    this.clientId = clientId;
                    this.environment = environment;
                    this.shopId = shopId;
                    this.locale = locale;
                }
            };
            exports_14("SesamiAdmin", SesamiAdmin);
            _a = SesamiAdmin;
            SesamiAdmin.init = (clientId) => __awaiter(void 0, void 0, void 0, function* () {
                utils_1.initListener();
                const payload = yield init_app_1.getInit();
                return new _a(clientId, payload.environment, payload.shopId, payload.locale);
            });
        }
    };
});
System.register("app/sesami-experience", ["app/events.app", "app/init.app", "utils/index"], function (exports_15, context_15) {
    "use strict";
    var _a, events_app_1, init_app_2, utils_2, SesamiExperience;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (events_app_1_1) {
                events_app_1 = events_app_1_1;
            },
            function (init_app_2_1) {
                init_app_2 = init_app_2_1;
            },
            function (utils_2_1) {
                utils_2 = utils_2_1;
            }
        ],
        execute: function () {
            SesamiExperience = class SesamiExperience {
                constructor(environment, shopId, locale, productId, variantId, quantity, teamMember, slot) {
                    this.environment = null;
                    this.productId = null;
                    this.variantId = null;
                    this.quantity = null;
                    this.teamMember = null;
                    this.slot = null;
                    this.getEnvironment = () => this.environment;
                    this.getShopId = () => this.shopId;
                    this.getLocale = () => this.locale;
                    this.getProductId = () => this.productId;
                    this.getVariantId = () => this.variantId;
                    this.getQuantity = () => this.quantity;
                    this.getTeamMember = () => this.teamMember;
                    this.getSlot = () => this.slot;
                    this.onNext = events_app_1.onNext;
                    this.acceptNext = events_app_1.acceptNext;
                    this.rejectNext = events_app_1.rejectNext;
                    this.environment = environment;
                    this.shopId = shopId;
                    this.locale = locale;
                    if (productId) {
                        this.productId = productId;
                    }
                    if (variantId) {
                        this.variantId = variantId;
                    }
                    if (quantity) {
                        this.quantity = quantity;
                    }
                    if (teamMember) {
                        this.teamMember = teamMember;
                    }
                    if (slot) {
                        this.slot = slot;
                    }
                }
            };
            exports_15("SesamiExperience", SesamiExperience);
            _a = SesamiExperience;
            SesamiExperience.init = () => __awaiter(void 0, void 0, void 0, function* () {
                utils_2.initListener();
                const payload = yield init_app_2.getInit();
                return new _a(payload.environment, payload.shopId, payload.locale, payload.productId, payload.variantId, payload.quantity, payload.teamMember, payload.slot);
            });
        }
    };
});
System.register("app/index", ["app/sesami-admin", "app/sesami-experience"], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    function exportStar_3(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_16(exports);
    }
    return {
        setters: [
            function (sesami_admin_1_1) {
                exportStar_3(sesami_admin_1_1);
            },
            function (sesami_experience_1_1) {
                exportStar_3(sesami_experience_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("host/events.host", ["types/index"], function (exports_17, context_17) {
    "use strict";
    var types_4, askNext;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (types_4_1) {
                types_4 = types_4_1;
            }
        ],
        execute: function () {
            exports_17("askNext", askNext = (iframe) => {
                var _a;
                const data = {
                    action: types_4.Action.NEXT
                };
                (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(data);
                return new Promise(resolve => {
                    window.addEventListener(types_4.Action.NEXT, (e) => {
                        resolve(e.detail.event.data.payload.isAccepted);
                    });
                });
            });
        }
    };
});
System.register("host/init.host", ["types/index"], function (exports_18, context_18) {
    "use strict";
    var types_5, onInit, sendAdminInit, sendExperienceInit;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (types_5_1) {
                types_5 = types_5_1;
            }
        ],
        execute: function () {
            exports_18("onInit", onInit = (callback) => {
                window.addEventListener(types_5.Action.INIT, (e) => {
                    callback(e.detail.event.source);
                });
            });
            exports_18("sendAdminInit", sendAdminInit = (source, environment, shopId, locale) => {
                const data = {
                    action: types_5.Action.INIT,
                    payload: {
                        environment,
                        shopId,
                        locale
                    }
                };
                source === null || source === void 0 ? void 0 : source.postMessage(data);
            });
            exports_18("sendExperienceInit", sendExperienceInit = (source, environment, shopId, locale, productId, variantId, quantity, teamMember, slot) => {
                const data = {
                    action: types_5.Action.INIT,
                    payload: {
                        environment,
                        shopId,
                        locale,
                        productId,
                        variantId,
                        quantity,
                        teamMember,
                        slot
                    }
                };
                source === null || source === void 0 ? void 0 : source.postMessage(data);
            });
        }
    };
});
System.register("host/authentication.host", ["types/index"], function (exports_19, context_19) {
    "use strict";
    var types_6, onGetToken, sendToken;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (types_6_1) {
                types_6 = types_6_1;
            }
        ],
        execute: function () {
            exports_19("onGetToken", onGetToken = (callback) => {
                window.addEventListener(types_6.Action.TOKEN, (e) => {
                    callback(e.detail.event);
                });
            });
            exports_19("sendToken", sendToken = (event, token) => {
                var _a;
                const data = {
                    action: types_6.Action.TOKEN,
                    payload: {
                        token
                    }
                };
                (_a = event.source) === null || _a === void 0 ? void 0 : _a.postMessage(data);
            });
        }
    };
});
System.register("host/app-admin", ["host/events.host", "host/init.host", "host/authentication.host", "utils/index"], function (exports_20, context_20) {
    "use strict";
    var events_host_1, init_host_1, authentication_host_1, utils_3, AppAdmin;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (events_host_1_1) {
                events_host_1 = events_host_1_1;
            },
            function (init_host_1_1) {
                init_host_1 = init_host_1_1;
            },
            function (authentication_host_1_1) {
                authentication_host_1 = authentication_host_1_1;
            },
            function (utils_3_1) {
                utils_3 = utils_3_1;
            }
        ],
        execute: function () {
            AppAdmin = class AppAdmin {
                constructor(iframe) {
                    this.source = null;
                    this.onInit = (callback) => {
                        init_host_1.onInit(source => {
                            this.source = source;
                            callback();
                        });
                    };
                    this.sendInit = (environment, shopId, locale) => init_host_1.sendAdminInit(this.source, environment, shopId, locale);
                    this.onGetToken = authentication_host_1.onGetToken;
                    this.sendToken = authentication_host_1.sendToken;
                    this.askNext = () => events_host_1.askNext(this.iframe);
                    this.iframe = iframe;
                    utils_3.initListener();
                }
            };
            exports_20("AppAdmin", AppAdmin);
        }
    };
});
System.register("host/app-experience", ["host/events.host", "host/init.host", "utils/index"], function (exports_21, context_21) {
    "use strict";
    var events_host_2, init_host_2, utils_4, AppExperience;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (events_host_2_1) {
                events_host_2 = events_host_2_1;
            },
            function (init_host_2_1) {
                init_host_2 = init_host_2_1;
            },
            function (utils_4_1) {
                utils_4 = utils_4_1;
            }
        ],
        execute: function () {
            AppExperience = class AppExperience {
                constructor(iframe) {
                    this.source = null;
                    this.onInit = (callback) => {
                        init_host_2.onInit(source => {
                            this.source = source;
                            callback();
                        });
                    };
                    this.sendInit = (environment, shopId, locale, productId, variantId, quantity, teamMember, slot) => init_host_2.sendExperienceInit(this.source, environment, shopId, locale, productId, variantId, quantity, teamMember, slot);
                    this.askNext = () => events_host_2.askNext(this.iframe);
                    this.iframe = iframe;
                    utils_4.initListener();
                }
            };
            exports_21("AppExperience", AppExperience);
        }
    };
});
System.register("host/index", ["host/app-admin", "host/app-experience"], function (exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    function exportStar_4(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_22(exports);
    }
    return {
        setters: [
            function (app_admin_1_1) {
                exportStar_4(app_admin_1_1);
            },
            function (app_experience_1_1) {
                exportStar_4(app_experience_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map