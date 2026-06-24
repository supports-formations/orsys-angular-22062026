import { Component, signal } from '@angular/core';
import { Friend } from '../../models/friend';
import { ResumeOneFriend } from '../resume-one-friend/resume-one-friend';

@Component({
  selector: 'orsys-list-friends',
  imports: [ResumeOneFriend],
  templateUrl: './list-friends.html',
  styleUrl: './list-friends.css',
})
export class ListFriends {
  protected readonly friends = signal<Friend[]>([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: '',
      phoneNumber: '',
    }])


    saveToApi(friend: Friend): void {
      console.log('Saving friend to API:', friend);
      // Here you would typically make an HTTP request to save the friend data to your backend API.
    }
}
