import { Component, signal } from '@angular/core';
import { DisplayPlaceList } from './features/places/components/display-place-list/display-place-list';
import { DisplayOneDestination } from './features/destinations/components/display-one-destination/display-one-destination';
import { DisplayCurrentWeather } from './features/weather/components/display-current-weather/display-current-weather';

@Component({
  selector: 'app-root',
  imports: [DisplayPlaceList, DisplayOneDestination, DisplayCurrentWeather],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('front-end');
}
