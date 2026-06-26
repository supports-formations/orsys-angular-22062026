import { Routes } from '@angular/router';
import { DisplayUsers } from './features/users/components/display-users/display-users';
import { DisplayOneDestination } from './features/destinations/components/display-one-destination/display-one-destination';
import { DisplayPlaceList } from './features/places/components/display-place-list/display-place-list';

export const routes: Routes = [
    {
        path: 'users',
        component: DisplayUsers
    },
    {
        path: 'destinations/one',
        component: DisplayOneDestination
    },
    {
        path: 'places',
        component: DisplayPlaceList
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];
