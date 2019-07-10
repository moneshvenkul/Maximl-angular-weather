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
var weather_service_1 = require('../weather/weather.service');
var profile_service_1 = require('./profile.service');
var SidebarComponent = (function () {
    function SidebarComponent(_profileService, _weatherService) {
        this._profileService = _profileService;
        this._weatherService = _weatherService;
        this.newProfile = { profileName: '', city: '' };
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.profiles = this.getProfiles();
    };
    SidebarComponent.prototype.getProfiles = function () {
        return this._profileService.getProfiles();
    };
    SidebarComponent.prototype.onSaveNew = function () {
        var profileItem = {
            profileName: this.newProfile.profileName,
            city: this.newProfile.city
        };
        console.log(profileItem);
        this._profileService.saveNewProfile(profileItem);
        this.getProfiles();
        this.newProfile.profileName = '';
        this.newProfile.city = '';
    };
    SidebarComponent.prototype.onLoadProfile = function (profile) {
        var _this = this;
        this._weatherService.searchWeatherData(profile.city)
            .subscribe(function (data) { return _this.weatherItem = data; });
    };
    SidebarComponent.prototype.onDeleteProfile = function (event, profile) {
        event.stopPropagation();
        this._profileService.deleteProfile(profile);
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'we-sidebar',
            styleUrls: ['sidebar.styles.css'],
            templateUrl: 'sidebar.template.html'
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService, weather_service_1.WeatherService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map