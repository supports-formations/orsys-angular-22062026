import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { CreateUser, User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';

@Service()
export class SaveOneUser {
    private readonly http = inject(HttpClient);

    save(user: CreateUser): Observable<User> {
        return this.http.post<User>('/api/users', user);
    }
}
