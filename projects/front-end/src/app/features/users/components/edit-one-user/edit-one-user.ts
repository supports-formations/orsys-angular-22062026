import { Component, computed, inject, input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { tap } from 'rxjs';

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

  private readonly formChanges$ = this.form.valueChanges.pipe(
    tap((value) => console.log('Form changes:', value)),
    distinctUntilChanged(),
    debounceTime(300),
    tap((value) => console.log('Form changes:', value)),
  );
  private readonly formChangeAsSignal = toSignal(this.formChanges$, { initialValue: this.form.value });
  protected readonly firstNameSet = computed(() => this.formChangeAsSignal().firstName);

  user = input.required<User>(); // Lecture seule

  save(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      const user = changes['user'].currentValue as User;

      this.form.patchValue({
        firstName: this.user().firstName,
        lastName: this.user().lastName,
      });
    }
  }
}
