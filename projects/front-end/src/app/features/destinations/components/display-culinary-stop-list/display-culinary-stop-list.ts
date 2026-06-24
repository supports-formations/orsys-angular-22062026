import { Component, inject } from '@angular/core';
import { GetCulinaryStopList } from '../../services/get-culinary-stop-list';
import { NotationToStarsPipe } from '../../uis/pipes/notation-to-stars-pipe';

@Component({
  selector: 'orsys-display-culinary-stop-list',
  imports: [NotationToStarsPipe],
  templateUrl: './display-culinary-stop-list.html',
  styleUrl: './display-culinary-stop-list.css',
})
export class DisplayCulinaryStopList {
  private readonly service = inject(GetCulinaryStopList);
  protected readonly culinaryStops = this.service.getByFoodType('vegetarian');
}
