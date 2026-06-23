import { Pipe, PipeTransform } from '@angular/core';
import { Step } from '../../models';

@Pipe({
  name: 'stepToString',
  pure: true
})
export class StepToStringPipe implements PipeTransform {
  transform(value: Step, ...args: unknown[]): string | null {
    let result: string | null = null;

    if (value) {
      result = `Le ${value.date.toLocaleDateString()} : ${value.nbKms} km`;
      if (Array.isArray(value.place)) {
        result += `, ${value.place.map((p) => p.label).join(', ')}`;
      } else {
        result += `, ${value.place.label}`;
      }
    }
    
    return result;
  }
}
