import { Component, inject, input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'orsys-edit-one-user',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-one-user.html',
  styleUrl: './edit-one-user.css',
})
export class EditOneUser implements OnChanges {
  private readonly formBuilder = inject(FormBuilder); 
  protected readonly form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [''],
  });

  user = input.required<User>(); // Lecture seule

  save(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.user()) {
      this.form.patchValue({
        firstName: this.user().firstName,
        lastName: this.user().lastName,
      });
    }
  }
}
