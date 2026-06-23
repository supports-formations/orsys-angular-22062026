import { Injectable, Service } from '@angular/core';
import { Destination } from '../models';

// @Injectable({
    //   providedIn: 'root'
    // })
@Service()
export class GetOneDestination {
    getOne(): Destination {
        return {
            id: 1,
            title: 'My Destination',
            steps: [
                {
                    id: 1,
                    date: new Date(),
                    nbKms: 100,
                    place: { id: 1, label: 'Place 1' }
                },
                {
                    id: 2,
                    date: new Date(),
                    nbKms: 200,
                    place: [
                        { id: 2, label: 'Place 2' },
                        { id: 3, label: 'Place 3' }
                    ]
                }
            ]
        };
    }
}
