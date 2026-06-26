import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'orsys-edit-one-user',
  imports: [],
  templateUrl: './edit-one-user.html',
  styleUrl: './edit-one-user.css',
})
export class EditOneUser implements OnChanges {
  user = input.required<User>(); // Lecture seule

  save(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('Changements détectés', changes);
  }
}
