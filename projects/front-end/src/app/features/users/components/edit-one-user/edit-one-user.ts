import { Component, input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'orsys-edit-one-user',
  imports: [],
  templateUrl: './edit-one-user.html',
  styleUrl: './edit-one-user.css',
})
export class EditOneUser {
  user = input.required<User>(); // Lecture seule

  save(): void {
    
  }
}
