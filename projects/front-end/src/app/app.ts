import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayCurrentWeather } from './features/weather/components/display-current-weather/display-current-weather';
import { MainMenu } from './shared/ui/menus/components/main-menu/main-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayCurrentWeather, MainMenu],
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
