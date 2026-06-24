import { Component, inject } from '@angular/core';
import { FilterFriends } from '../../services/filter-friends';

@Component({
  selector: 'orsys-filter-friends-form',
  imports: [],
  templateUrl: './filter-friends.html',
  styleUrl: './filter-friends.css',
})
export class FilterFriendsForm {
  private readonly filterService = inject(FilterFriends);

  testFilter(): void {
    const result = prompt('Enter the age to filter friends:');
    if (result !== null) {
      const age = parseInt(result, 10);
      if (!isNaN(age)) {
        this.filterService.filter(age);
      } else {
        alert('Please enter a valid number.');
      }
    }
  }
}
