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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var http_1 = require('@angular/http');
var weather_service_1 = require('./weather/weather.service');
var profile_service_1 = require('./sidebar/profile.service');
var home_component_1 = require('./home/home.component');
var app_component_1 = require('./app.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var weather_list_component_1 = require('./weather/weather-list.component');
var weather_search_component_1 = require('./weather/weather-search.component');
var weather_item_component_1 = require('./weather/weather-item.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                sidebar_component_1.SidebarComponent,
                weather_list_component_1.WeatherListComponent,
                weather_search_component_1.WeatherSearchComponent,
                weather_item_component_1.WeatherItemComponent],
            providers: [weather_service_1.WeatherService,
                profile_service_1.ProfileService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map