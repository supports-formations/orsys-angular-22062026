import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Place } from '../models/place';
import { delay, filter, map, Observable, retry } from 'rxjs';

@Service()
export class GetListPlaces {
 private readonly httpClient = inject(HttpClient);  // Singleton, injecté par Angular, permet de faire des requêtes HTTP
 
 getList(): Observable<Place[]> {
   return this.httpClient.get<Place[]>('/places.json').pipe(
    retry({ count: 3, delay: 1000 }),
    //filter((places) => places.length > 0),
    map((places) => places.sort((a, b) => a.label.localeCompare(b.label))),
    delay(1000)
   ); // return d'un moteur qui doit être souscrit pour être exécuté
 }
}
