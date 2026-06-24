import { Component, computed, signal } from '@angular/core';
import { Friend } from '../../models/friend';

@Component({
  selector: 'orsys-display-friends',
  imports: [],
  templateUrl: './display-friends.html',
  styleUrl: './display-friends.css',
})
export class DisplayFriends {
  protected readonly listFriends = signal<Friend[]>([]);
  protected readonly listFriendsLength = computed(() => this.listFriends().length);

  addTempOne(): void {
    this.listFriends.update((friends) => {
      const newId = friends.length + 1;
      const newVersionOfArray = [...friends];
      newVersionOfArray.push({ id: newId, name: 'Jane Smith', email: 'jane.smith@example.com', pictureUrl: 'https://example.com/jane.jpg' });
      return newVersionOfArray;
    });
  }
}
