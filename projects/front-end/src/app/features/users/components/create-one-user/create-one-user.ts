import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'orsys-create-one-user',
  imports: [ReactiveFormsModule],
  templateUrl: './create-one-user.html',
  styleUrl: './create-one-user.css',
  //standalone: true,
})
export class CreateOneUser {
  private readonly formBuilder = inject(FormBuilder);
  readonly form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [''],
  }); //  { updateOn: 'blur', validators: Validators.required }

  save(): void {

  }
}
