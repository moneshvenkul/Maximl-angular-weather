import { Component, OnInit } from "@angular/core";
import { IWeather } from "./weather";
import { WeatherService } from "./weather.service";

@Component({
    selector: 'we-list',
    template: `
        <div class="weather-list">
            <we-item *ngFor="let weatherItem of weatherItems"
                [weatherItem]="weatherItem">
           </we-item>
        </div>
    `
})

export class WeatherListComponent implements OnInit {
    weatherItems: IWeather[];

    constructor(private _weatherService: WeatherService) {}

    ngOnInit():void {
        this.getWeatherItems();
    }

    getWeatherItems(): void {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}