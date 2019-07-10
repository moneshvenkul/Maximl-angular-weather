import { Component, Input } from '@angular/core';
import { IWeather } from "./weather";

@Component({
    selector: 'we-item',
    template: `
        <div class="well">
            <h2>{{ weatherItem.cityName }}</h2>
            <p><span class="label label-primary">Temp </span>&nbsp;
                {{ weatherItem.temperature }}°F</p>
            <p><span class="label label-info">Outlook </span>&nbsp;
                {{ weatherItem.description }}</p>
        </div>
    `
})
export class WeatherItemComponent {
    // @Input('item') weatherItem: Weather;
    @Input() weatherItem: IWeather;
}