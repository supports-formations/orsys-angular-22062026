import { Service, signal } from '@angular/core';

@Service() // Singleton service, provided in root
export class FilterFriends {
    private readonly filterValue = signal<number | undefined>(undefined);  // état en cours de la valeur du filtre

    filter(age: number): void {
        this.filterValue.set(age);
    }

    get value() {
        return this.filterValue.asReadonly();
    }
}
