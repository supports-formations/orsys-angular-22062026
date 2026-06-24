import { Component, computed, inject, signal } from '@angular/core';
import { Friend } from '../../models/friend';
import { FilterFriends } from '../../services/filter-friends';
import { FilterFriendsForm } from '../filter-friends-form/filter-friends-form';


@Component({
  selector: 'orsys-display-friends',
  imports: [FilterFriendsForm],
  templateUrl: './display-friends.html',
  styleUrl: './display-friends.css',
})
export class DisplayFriends {
  private readonly filterService =  inject(FilterFriends);  

  protected readonly listFriends = signal<Friend[]>([]);

  // A mettre dans un service, mais pour l'instant on fait simple
  protected readonly filteredFriends = computed(() => {
    const filterValue = this.filterService.value();

    if (! filterValue) {
      return this.listFriends();
    }

    return this.listFriends().filter((friend) => friend.age && friend.age >= filterValue);
  });

  protected readonly listFriendsLength = computed(() => this.filteredFriends().length);

  // protected readonly friendsMoreThanXyears = (age: number) => computed(() => {
  //   return this.listFriends().filter((friend) => friend.age && friend.age >= age);
  // });
  // protected readonly friendWith30MoreYears = this.friendsMoreThanXyears(30);



  addTempOne(): void {
    this.listFriends.update((friends) => {
      const newId = friends.length + 1;
      const newVersionOfArray = [...friends];
      newVersionOfArray.push({ id: newId, name: 'Jane Smith', email: 'jane.smith@example.com', pictureUrl: 'https://example.com/jane.jpg', age: 30 * friends.length });
      return newVersionOfArray;
    });
  }
}
