import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'we-app',
  templateUrl: 'app.template.html'
})

export class AppComponent {
  appName: string = "Angular 2 Weather App";
}
