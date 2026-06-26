import { Routes } from '@angular/router';
import { DisplayUsers } from './features/users/components/display-users/display-users';

export const routes: Routes = [
    {
        path: 'users',
        component: DisplayUsers
    }
];
