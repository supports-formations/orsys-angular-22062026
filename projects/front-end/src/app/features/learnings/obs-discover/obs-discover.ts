import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'orsys-obs-discover',
  imports: [],
  templateUrl: './obs-discover.html',
  styleUrl: './obs-discover.css',
})
export class ObsDiscover implements OnInit, OnDestroy {
  private readonly observable$ = new Observable<string>((subscriber) => { // LAZY
      console.log('Observable created');

      subscriber.next('Premier message');
      subscriber.next('Deuxième message');

      setTimeout(() => {
        subscriber.next('Troisième message après 2 secondes');
        subscriber.complete();
      }, 2000);
      
      subscriber.next('Quatrième message après completion');
    });
  private readonly subscriptionParent = new Subscription();

  ngOnInit(): void {
    console.log('-------------');
    
    const subscription = this.observable$.pipe(
      map((message) => message.toUpperCase()),
      map((message) => `Message transformé : ${message}`),
      map((message) => message.replace('DEUXIÈME', '2ème'))
    )
    .subscribe({
      next: (message) => console.log('Message reçu :', message),
    });
    this.subscriptionParent.add(subscription);

    const subscription2 = this.observable$.subscribe();
    this.subscriptionParent.add(subscription2);

    console.log('****************');
  }

  ngOnDestroy(): void {
    console.log('ObsDiscover component destroyed');
    this.subscriptionParent.unsubscribe();
  }
}
