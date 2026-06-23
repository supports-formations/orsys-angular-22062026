import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Weather } from '../models/weather';
import { map } from 'rxjs/internal/operators/map';
import { interval, switchMap, tap } from 'rxjs';

export type WeatherFromApi = {
    current: {
        temperature_2m: number;
        weather_code: number;
        wind_speed_10m: number;
    }
}


@Service()
export class GetCurrentWeather {
    private readonly httpClient = inject(HttpClient);
    private readonly refresh$ = interval(10000);

    getOne(latitude: number, longitude: number): Observable<Weather> {
        const url = this.getApiUrl(latitude, longitude);
        const weatherRequest$ =  this.httpClient.get<WeatherFromApi>(url).pipe(
            map(response => ({
                temperature: response.current.temperature_2m,
                code: response.current.weather_code,
                wind: response.current.wind_speed_10m,
                imageUrl: this.getImageUrl(response.current.weather_code)
            }))
        );

        return this.refresh$.pipe(
            //tap((counter) => console.log('Refreshing weather data...', counter)),
            switchMap(() => weatherRequest$)
        );
    }

    private getImageUrl(weatherCode: number): string {
        switch (weatherCode) {
            case 0:
                return 'http://openweathermap.org/img/wn/01d@2x.png';
            case 1:
                return 'http://openweathermap.org/img/wn/01d@2x.png';
            case 2:
                return 'http://openweathermap.org/img/wn/02d@2x.png';
            case 3:
                return 'http://openweathermap.org/img/wn/03d@2x.png';
            default:
                return '';
        }
    }

    private getApiUrl(latitude: number, longitude: number): string {
        return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,rain,weather_code,wind_speed_10m,wind_speed_80m,visibility&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m`;
    }
}
