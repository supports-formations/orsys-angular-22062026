import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayPlaceList } from './features/places/components/display-place-list/display-place-list';
import { DisplayOneDestination } from './features/destinations/components/display-one-destination/display-one-destination';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayPlaceList, DisplayOneDestination],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('front-end');
}
