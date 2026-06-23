import { AsyncPipe, LowerCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToUpperCasePipe } from '../../../../shared/ui/pipes/to-upper-case-pipe';
import { GetListPlaces } from '../../services/get-list-places';

@Component({
  selector: 'orsys-display-place-list',
  imports: [ToUpperCasePipe, LowerCasePipe, AsyncPipe],
  templateUrl: './display-place-list.html',
  styleUrl: './display-place-list.css',
})
export class DisplayPlaceList {
  protected title = 'Liste des lieux';
  protected readonly subTitle = 'Découvrez les lieux à visiter';

  private readonly service = inject(GetListPlaces);
  protected readonly places$ = this.service.getList(); // Aucune requête n'est faite tant que l'observable n'est pas souscrit

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
