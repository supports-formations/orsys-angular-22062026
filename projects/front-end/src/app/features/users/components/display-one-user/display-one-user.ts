import { Component, input, output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'orsys-display-one-user',
  imports: [],
  templateUrl: './display-one-user.html',
  styleUrl: './display-one-user.css',
})
export class DisplayOneUser {
  user = input.required<User>(); // Lecture seule
  title = input('Utilisateur'); // Lecture seule

  editOne = output<User>(); // Lecture seule

  // ngOnInit(): void {
  //   const user = this.user();
  // }

  clickToEdit(): void {
    this.editOne.emit(this.user());
  }
}
