import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { WeatherService } from "./weather.service";
import { IWeather } from "./weather";

@Component({
    selector: 'we-search',
    template: `
        <div class="weather-search">
            <form (ngSubmit)="onSubmit()">
              <div class="form-group">
              <h3>Add City: </h3>
                <input
                    [formControl]="searchInput"
                    type="text"
                    class="form-control input-sm"
                    placeholder="City">
                </div>
                  <button class="btn btn-success profile-btn" type="submit">
                       Submit
                  </button>
            </form>
            <div *ngIf="city.name">
                <h4>City found: <small>{{city.name}}</small></h4>
            </div>
        </div>
    `
})
export class WeatherSearchComponent implements OnInit {
    searchInput: FormControl = new FormControl('');
    city: any = {};

    constructor(private _weatherService: WeatherService) { }

    onSubmit() {
        const weatherItem: IWeather = {
            cityName: this.city.name,
            description: this.city.weather[0].description,
            temperature: this.city.main.temp
        }
        console.log(weatherItem);
        this.addWeatherItem(weatherItem);
        // this._weatherService.addWeatherItem(weatherItem);
        // this.searchInput.reset();
    }

    ngOnInit() {
        this.searchInput.valueChanges
            .debounceTime(400)            // wait 400 milliseconds, type 2 letters
            .distinctUntilChanged()        // emit when the current value is different than last.
             // takes current observable and makes request, cancels any pending
            .switchMap((input: string) =>
                this._weatherService.searchWeatherData(input))
            .subscribe(
              city => this.city = city,
              err => {
                  console.log(`Can't get weather. Error code: ${err.cod}, Message: ${err.message}`);
                  console.log(err);
              });
    }

    addWeatherItem(item: IWeather) {
        this._weatherService.addWeatherItem(item);
        // this.searchInput = new FormControl('');
        this.searchInput.reset();
    }

}
