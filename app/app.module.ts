import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { HttpModule, RequestOptions } from '@angular/http';
import { WeatherService } from './weather/weather.service';
import { ProfileService } from './sidebar/profile.service';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { WeatherItemComponent } from './weather/weather-item.component';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   ReactiveFormsModule,
                   HttpModule,
                   AppRoutingModule
                   ],
  declarations: [ AppComponent,
                            HomeComponent,
                            SidebarComponent,
                            WeatherListComponent,
                            WeatherSearchComponent,
                            WeatherItemComponent ],
  providers: [ WeatherService,
                       ProfileService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }