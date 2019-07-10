"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var weather_data_1 = require("./weather.data");
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/do');
var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
        this.URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.KEY = '16b0f73c6b8a9412f74b1b56a485e456';
        this.IMP = '&units=imperial';
    }
    WeatherService.prototype.getWeatherItems = function () {
        return weather_data_1.WEATHER_ITEMS;
    };
    WeatherService.prototype.addWeatherItem = function (weatherItem) {
        weather_data_1.WEATHER_ITEMS.push(weatherItem);
    };
    WeatherService.prototype.clearWeatherItems = function () {
        weather_data_1.WEATHER_ITEMS.splice(0);
    };
    WeatherService.prototype.searchWeatherData = function (cityName) {
        return this
            ._http
            .get("" + this.URL + cityName + "&APPID=" + this.KEY + this.IMP)
            .map(function (res) { return res.json(); })
            .do(function (res) { return console.log('Weather Data Object: ' + JSON.stringify(res)); })
            .catch(function (error) {
            console.error(error);
            return Observable_1.Observable.throw(error.json());
        });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map