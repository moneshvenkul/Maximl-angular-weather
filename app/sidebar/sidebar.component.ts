import { Component, OnInit } from '@angular/core';
import { IProfile } from './profile';
import { WeatherService } from '../weather/weather.service';
import { ProfileService } from './profile.service';
import { Weather } from '../weather/weather';

@Component({
  moduleId: module.id,
  selector: 'we-sidebar',
  styleUrls: ['sidebar.styles.css'],
  templateUrl: 'sidebar.template.html'
})

export class SidebarComponent implements OnInit {
    profiles: IProfile[];
    weatherItem: Weather[];
    newProfile: IProfile = { profileName: '', city: '' }

    constructor (private _profileService: ProfileService,
                          private _weatherService: WeatherService) {}

    ngOnInit() {
        this.profiles = this.getProfiles();
    }

    getProfiles() {
        return this._profileService.getProfiles();
    }

    onSaveNew() {
        const profileItem: IProfile = {
            profileName: this.newProfile.profileName,
            city: this.newProfile.city
        }
        console.log(profileItem);
        this._profileService.saveNewProfile(profileItem);
        this.getProfiles();
        this.newProfile.profileName = '';
        this.newProfile.city = '';
    }

    onLoadProfile(profile: IProfile) {
        this._weatherService.searchWeatherData(profile.city)
              .subscribe(
                data => this.weatherItem = data
            );
        }

    onDeleteProfile(event: Event, profile: IProfile) {
        event.stopPropagation();
        this._profileService.deleteProfile(profile);
    }

}