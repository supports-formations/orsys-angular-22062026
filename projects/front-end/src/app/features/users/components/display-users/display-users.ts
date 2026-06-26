import { Component, signal } from '@angular/core';
import { User } from '../../models/user';
import { DisplayOneUser } from '../display-one-user/display-one-user';
import { EditOneUser } from '../edit-one-user/edit-one-user';

@Component({
  selector: 'orsys-display-users',
  imports: [DisplayOneUser, EditOneUser],
  templateUrl: './display-users.html',
  styleUrl: './display-users.css',
})
export class DisplayUsers {
  protected readonly users = signal<User[]>([]); // Lecture seule
  protected readonly toEditUser = signal<User | null>(null); 

  editOne(user: User): void {
    this.toEditUser.set(user);
  }
}
