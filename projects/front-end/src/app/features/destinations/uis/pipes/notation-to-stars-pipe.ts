import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notationToStars',
})
export class NotationToStarsPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    const maxStars = 5;
    const filledStar = '★';
    const emptyStar = '☆';

    if (typeof value !== 'number' || Number.isNaN(value)) {
      return emptyStar.repeat(maxStars);
    }

    const normalized = Math.min(maxStars, Math.max(1, Math.round(value)));
    return `${filledStar.repeat(normalized)}${emptyStar.repeat(maxStars - normalized)}`;
  }
}
