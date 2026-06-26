import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SaveOneUser } from '../../services/save-one-user';
import { CreateUser, User } from '../../models/user';

@Component({
  selector: 'orsys-create-one-user',
  imports: [ReactiveFormsModule],
  templateUrl: './create-one-user.html',
  styleUrl: './create-one-user.css',
  //standalone: true,
})
export class CreateOneUser {
  private readonly saveOneUser = inject(SaveOneUser);
  private readonly formBuilder = inject(FormBuilder);
  readonly form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required]],
  }); //  { updateOn: 'blur', validators: Validators.required }

  save(): void {
    if(this.form.valid) {
      // const user: Partial<User> = {
      //   firstName: ''
      // }
      let user: CreateUser = {
        firstName: this.form.value.firstName ?? '',
        lastName: this.form.value.lastName ?? ''
      };

      //this.form.controls['firstName'].reset();

      this.saveOneUser.save(user).subscribe({
        next: (user) => {
          this.form.reset();
        },
        error: (error) => console.error('Erreur lors de la sauvegarde', error)
      });
    }

  }
}
