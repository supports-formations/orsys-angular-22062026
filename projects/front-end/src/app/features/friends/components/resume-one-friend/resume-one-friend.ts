import { Component, input, output } from '@angular/core';
import { Friend } from '../../models/friend';

@Component({
  selector: 'orsys-resume-one-friend',
  imports: [],
  templateUrl: './resume-one-friend.html',
  styleUrl: './resume-one-friend.css',
})
export class ResumeOneFriend {
  item = input.required<Friend>();
  title = input<string>('Ami');

  itemToSave = output<Friend>();

  ngOnInit(): void {
    console.log('ResumeOneFriend initialized with item:', this.item());
  }
  
  save(): void {
    this.itemToSave.emit(this.item());
  }
}
