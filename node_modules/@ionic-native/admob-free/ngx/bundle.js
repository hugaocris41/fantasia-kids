'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@angular/core');
var core$1 = require('@ionic-native/core');
var rxjs = require('rxjs');

var AdMobFree = /** @class */ (function (_super) {
    tslib.__extends(AdMobFree, _super);
    function AdMobFree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience object to get event names
         * @type {Object}
         */
        _this.events = {
            BANNER_LOAD: 'admob.banner.events.LOAD',
            BANNER_LOAD_FAIL: 'admob.banner.events.LOAD_FAIL',
            BANNER_OPEN: 'admob.banner.events.OPEN',
            BANNER_CLOSE: 'admob.banner.events.CLOSE',
            BANNER_EXIT_APP: 'admob.banner.events.EXIT_APP',
            INTERSTITIAL_LOAD: 'admob.interstitial.events.LOAD',
            INTERSTITIAL_LOAD_FAIL: 'admob.interstitial.events.LOAD_FAIL',
            INTERSTITIAL_OPEN: 'admob.interstitial.events.OPEN',
            INTERSTITIAL_CLOSE: 'admob.interstitial.events.CLOSE',
            INTERSTITIAL_EXIT_APP: 'admob.interstitial.events.EXIT_APP',
            REWARD_VIDEO_LOAD: 'admob.rewardvideo.events.LOAD',
            REWARD_VIDEO_LOAD_FAIL: 'admob.rewardvideo.events.LOAD_FAIL',
            REWARD_VIDEO_OPEN: 'admob.rewardvideo.events.OPEN',
            REWARD_VIDEO_CLOSE: 'admob.rewardvideo.events.CLOSE',
            REWARD_VIDEO_EXIT_APP: 'admob.rewardvideo.events.EXIT_APP',
            REWARD_VIDEO_START: 'admob.rewardvideo.events.START',
            REWARD_VIDEO_REWARD: 'admob.rewardvideo.events.REWARD',
        };
        /**
         * Returns the AdMobFreeBanner object
         * @type {AdMobFreeBanner}
         */
        _this.banner = new AdMobFreeBanner();
        /**
         * Returns the AdMobFreeInterstitial object
         * @type {AdMobFreeInterstitial}
         */
        _this.interstitial = new AdMobFreeInterstitial();
        /**
         * Returns the AdMobFreeRewardVideo object
         * @type {AdMobFreeRewardVideo}
         */
        _this.rewardVideo = new AdMobFreeRewardVideo();
        return _this;
    }
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    AdMobFree.prototype.on = function (event) {
        return rxjs.fromEvent(document, event);
    };
    AdMobFree.pluginName = "AdMobFree";
    AdMobFree.plugin = "cordova-plugin-admob-free";
    AdMobFree.pluginRef = "admob";
    AdMobFree.repo = "https://github.com/ratson/cordova-plugin-admob-free";
    AdMobFree.platforms = ["Android", "iOS"];
    AdMobFree.decorators = [
        { type: core.Injectable }
    ];
    return AdMobFree;
}(core$1.IonicNativePlugin));
var AdMobFreeBanner = /** @class */ (function (_super) {
    tslib.__extends(AdMobFreeBanner, _super);
    function AdMobFreeBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeBanner.prototype.config = function (options) { return core$1.cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeBanner.prototype.hide = function () { return core$1.cordova(this, "hide", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.prepare = function () { return core$1.cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.remove = function () { return core$1.cordova(this, "remove", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.show = function () { return core$1.cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.pluginName = "AdMobFree";
    AdMobFreeBanner.plugin = "cordova-plugin-admob-free";
    AdMobFreeBanner.pluginRef = "admob.banner";
    return AdMobFreeBanner;
}(core$1.IonicNativePlugin));
var AdMobFreeInterstitial = /** @class */ (function (_super) {
    tslib.__extends(AdMobFreeInterstitial, _super);
    function AdMobFreeInterstitial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeInterstitial.prototype.config = function (options) { return core$1.cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeInterstitial.prototype.isReady = function () { return core$1.cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.prepare = function () { return core$1.cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.show = function () { return core$1.cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.pluginName = "AdMobFree";
    AdMobFreeInterstitial.plugin = "cordova-plugin-admob-free";
    AdMobFreeInterstitial.pluginRef = "admob.interstitial";
    return AdMobFreeInterstitial;
}(core$1.IonicNativePlugin));
var AdMobFreeRewardVideo = /** @class */ (function (_super) {
    tslib.__extends(AdMobFreeRewardVideo, _super);
    function AdMobFreeRewardVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeRewardVideo.prototype.config = function (options) { return core$1.cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeRewardVideo.prototype.isReady = function () { return core$1.cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.prepare = function () { return core$1.cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.show = function () { return core$1.cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.pluginName = "AdMobFree";
    AdMobFreeRewardVideo.plugin = "cordova-plugin-admob-free";
    AdMobFreeRewardVideo.pluginRef = "admob.rewardvideo";
    return AdMobFreeRewardVideo;
}(core$1.IonicNativePlugin));

exports.AdMobFree = AdMobFree;
exports.AdMobFreeBanner = AdMobFreeBanner;
exports.AdMobFreeInterstitial = AdMobFreeInterstitial;
exports.AdMobFreeRewardVideo = AdMobFreeRewardVideo;
