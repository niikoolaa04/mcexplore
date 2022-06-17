"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPlugin = exports.getPluginList = exports.getPlayerCount = exports.getVersion = exports.getSoftware = exports.getPort = exports.isOnline = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
var URL_FETCH = "https://api.mcsrvstat.us/2/";
/**
 * Get Server's IP Address if domain is provided
 *
 * @param ip IP Addresss of Server
 */
var isOnline = function (ip) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!ip || typeof ip != "string")
                    throw new Error("Valid IP must be provided");
                return [4 /*yield*/, (0, node_fetch_1.default)("".concat(URL_FETCH).concat(ip)).then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, res.json()];
                                case 1:
                                    apiResponse = _a.sent();
                                    return [2 /*return*/, apiResponse.online];
                            }
                        });
                    }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.isOnline = isOnline;
/**
 * Get Server's port
 *
 * @param ip IP Address of Server
 */
var getPort = function (ip) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!ip || typeof ip != "string")
                    throw new Error("Valid IP must be provided");
                return [4 /*yield*/, (0, node_fetch_1.default)("".concat(URL_FETCH).concat(ip)).then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, res.json()];
                                case 1:
                                    apiResponse = _a.sent();
                                    if (apiResponse.online == false)
                                        throw new Error("Server provided is offline or doesn't exist");
                                    return [2 /*return*/, apiResponse.port];
                            }
                        });
                    }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getPort = getPort;
/**
 * Get Software Server's using
 *
 * @param ip IP Address of Server
 */
var getSoftware = function (ip) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!ip || typeof ip != "string")
                    throw new Error("Valid IP must be provided");
                return [4 /*yield*/, (0, node_fetch_1.default)("".concat(URL_FETCH).concat(ip)).then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, res.json()];
                                case 1:
                                    apiResponse = _a.sent();
                                    if (apiResponse.online == false)
                                        throw new Error("Server provided is offline or doesn't exist");
                                    return [2 /*return*/, apiResponse.software ? apiResponse.software : "Unknown Software"];
                            }
                        });
                    }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getSoftware = getSoftware;
/**
 * Get Server's version
 *
 * @param ip IP Address of Server
 */
var getVersion = function (ip) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!ip || typeof ip != "string")
                    throw new Error("Valid IP must be provided");
                return [4 /*yield*/, (0, node_fetch_1.default)("".concat(URL_FETCH).concat(ip)).then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, res.json()];
                                case 1:
                                    apiResponse = _a.sent();
                                    if (apiResponse.online == false)
                                        throw new Error("Server provided is offline or doesn't exist");
                                    return [2 /*return*/, apiResponse.version ? apiResponse.version : "Unknown Version"];
                            }
                        });
                    }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getVersion = getVersion;
/**
 * Get Number of Online Players on Server
 *
 * @param ip IP Address of Server
 */
var getPlayerCount = function (ip) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!ip || typeof ip != "string")
                    throw new Error("Valid IP must be provided");
                return [4 /*yield*/, (0, node_fetch_1.default)("".concat(URL_FETCH).concat(ip)).then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, res.json()];
                                case 1:
                                    apiResponse = _a.sent();
                                    if (apiResponse.online == false)
                                        throw new Error("Server provided is offline or doesn't exist");
                                    return [2 /*return*/, apiResponse.players.online || 0];
                            }
                        });
                    }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getPlayerCount = getPlayerCount;
/**
 * Get list of Server's Plugins
 *
 * @param ip IP Address of Server
 */
var getPluginList = function (ip) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!ip || typeof ip != "string")
                    throw new Error("Valid IP must be provided");
                return [4 /*yield*/, (0, node_fetch_1.default)("".concat(URL_FETCH).concat(ip)).then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, res.json()];
                                case 1:
                                    apiResponse = _a.sent();
                                    if (apiResponse.online == false)
                                        throw new Error("Server provided is offline or doesn't exist");
                                    return [2 /*return*/, apiResponse.plugins ? apiResponse.plugins : "No Plugins"];
                            }
                        });
                    }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getPluginList = getPluginList;
/**
 * Check whether Server has a specific Plugin
 *
 * @param ip IP Address of Server
 * @param plugin Name of Plugin to check
 */
var hasPlugin = function (ip, plugin) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!ip || typeof ip != "string")
                    throw new Error("Valid IP must be provided");
                return [4 /*yield*/, (0, node_fetch_1.default)("".concat(URL_FETCH).concat(ip)).then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResponse;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, res.json()];
                                case 1:
                                    apiResponse = _a.sent();
                                    if (apiResponse.online == false)
                                        throw new Error("Server provided is offline or doesn't exist");
                                    if (!apiResponse.plugins)
                                        throw new Error("Server provided don't have public plugin list");
                                    if (!plugin)
                                        throw new Error("No Plugin name was provided");
                                    return [2 /*return*/, apiResponse.plugins.names.some(function (pl) { return pl.toLowerCase() == plugin.toLowerCase(); })];
                            }
                        });
                    }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.hasPlugin = hasPlugin;
