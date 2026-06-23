import { Component, inject } from '@angular/core';
import { GetCurrentWeather } from '../../services/get-current-weather';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'orsys-display-current-weather',
  imports: [AsyncPipe],
  templateUrl: './display-current-weather.html',
  styleUrl: './display-current-weather.css',
})
export class DisplayCurrentWeather {
  private readonly getCurrentWeather = inject(GetCurrentWeather);
  protected weather$ = this.getCurrentWeather.getOne(47.21811, -1.55278);
}
