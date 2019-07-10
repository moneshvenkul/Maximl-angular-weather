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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var weather_service_1 = require("./weather.service");
var WeatherSearchComponent = (function () {
    function WeatherSearchComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.searchInput = new forms_1.FormControl('');
        this.city = {};
    }
    WeatherSearchComponent.prototype.onSubmit = function () {
        var weatherItem = {
            cityName: this.city.name,
            description: this.city.weather[0].description,
            temperature: this.city.main.temp
        };
        console.log(weatherItem);
        this.addWeatherItem(weatherItem);
        // this._weatherService.addWeatherItem(weatherItem);
        // this.searchInput.reset();
    };
    WeatherSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchInput.valueChanges
            .debounceTime(400) // wait 400 milliseconds, type 2 letters
            .distinctUntilChanged() // emit when the current value is different than last.
            .switchMap(function (input) {
            return _this._weatherService.searchWeatherData(input);
        })
            .subscribe(function (city) { return _this.city = city; }, function (err) {
            console.log("Can't get weather. Error code: " + err.cod + ", Message: " + err.message);
            console.log(err);
        });
    };
    WeatherSearchComponent.prototype.addWeatherItem = function (item) {
        this._weatherService.addWeatherItem(item);
        // this.searchInput = new FormControl('');
        this.searchInput.reset();
    };
    WeatherSearchComponent = __decorate([
        core_1.Component({
            selector: 'we-search',
            template: "\n        <div class=\"weather-search\">\n            <form (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n              <h3>Add City: </h3>\n                <input\n                    [formControl]=\"searchInput\"\n                    type=\"text\"\n                    class=\"form-control input-sm\"\n                    placeholder=\"City\">\n                </div>\n                  <button class=\"btn btn-success profile-btn\" type=\"submit\">\n                       Submit\n                  </button>\n            </form>\n            <div *ngIf=\"city.name\">\n                <h4>City found: <small>{{city.name}}</small></h4>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherSearchComponent);
    return WeatherSearchComponent;
}());
exports.WeatherSearchComponent = WeatherSearchComponent;
//# sourceMappingURL=weather-search.component.js.map