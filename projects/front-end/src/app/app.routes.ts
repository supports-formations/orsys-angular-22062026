import { Routes } from '@angular/router';
import { DisplayUsers } from './features/users/components/display-users/display-users';
import { DisplayOneDestination } from './features/destinations/components/display-one-destination/display-one-destination';

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
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];
