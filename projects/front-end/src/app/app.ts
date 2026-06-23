import { Component, signal } from '@angular/core';
import { DisplayPlaceList } from './features/places/components/display-place-list/display-place-list';
import { DisplayOneDestination } from './features/destinations/components/display-one-destination/display-one-destination';
import { DisplayCurrentWeather } from './features/weather/components/display-current-weather/display-current-weather';
import { ObsDiscover } from './features/learnings/obs-discover/obs-discover';

@Component({
  selector: 'app-root',
  imports: [DisplayPlaceList, DisplayOneDestination, DisplayCurrentWeather, ObsDiscover],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('front-end');

  protected alive = true;

  togleAlive(): void {
    this.alive = !this.alive;
  }
}
