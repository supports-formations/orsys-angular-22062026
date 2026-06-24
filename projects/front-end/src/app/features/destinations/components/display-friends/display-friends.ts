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

  protected readonly friendsMoreThanXyears = (age: number) => computed(() => {
    return this.listFriends().filter((friend) => friend.age && friend.age >= age);
  });
  protected readonly friendWith30MoreYears = this.friendsMoreThanXyears(30);


  addTempOne(): void {
    this.listFriends.update((friends) => {
      const newId = friends.length + 1;
      const newVersionOfArray = [...friends];
      newVersionOfArray.push({ id: newId, name: 'Jane Smith', email: 'jane.smith@example.com', pictureUrl: 'https://example.com/jane.jpg', age: 30 * friends.length });
      return newVersionOfArray;
    });
  }
}
