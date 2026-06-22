import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToUpperCasePipe } from '../../../../shared/ui/pipes/to-upper-case-pipe';

@Component({
  selector: 'orsys-display-place-list',
  imports: [ToUpperCasePipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './display-place-list.html',
  styleUrl: './display-place-list.css',
})
export class DisplayPlaceList {
  protected title = 'Liste des lieux';
  protected readonly subTitle = 'Découvrez les lieux à visiter';

  // Pyrénées
  protected readonly places = ['Lac de Gaubes', 'Pont d\'espagne'];

  toUpperCase(item: string): string {
    return item.toUpperCase();
  }

  change(): void {
    this.title = 'Liste des lieux modifiée';
  }

  addPlace(): void {
    this.places.push('Nouveau lieu');
  }

  removePlace(): void {
    this.places.pop();
  }
}
