import { Component, computed, OnInit, signal } from '@angular/core';
import { DisplayPlaceList } from './features/places/components/display-place-list/display-place-list';
import { DisplayOneDestination } from './features/destinations/components/display-one-destination/display-one-destination';
import { DisplayCurrentWeather } from './features/weather/components/display-current-weather/display-current-weather';
import { ObsDiscover } from './features/learnings/obs-discover/obs-discover';
import { ListFriends } from './features/friends/components/list-friends/list-friends';
import { CreateOneUser } from './features/users/components/create-one-user/create-one-user';
import { DisplayUsers } from './features/users/components/display-users/display-users';

@Component({
  selector: 'app-root',
  imports: [ ListFriends, DisplayPlaceList, DisplayOneDestination, DisplayCurrentWeather, ObsDiscover, DisplayUsers, CreateOneUser],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal<string | undefined>('Mes vacances');
  protected readonly titleAsMaj = computed(() => this.title()?.toUpperCase());

  protected alive = true;

  togleAlive(): void {
    this.alive = !this.alive;
  }

  ngOnInit(): void {
    setTimeout(() => {
      //this.title.set('Mes super vacances');
      this.title.update((oldValue) => oldValue + ' super');
    }, 2000);
  }
}
