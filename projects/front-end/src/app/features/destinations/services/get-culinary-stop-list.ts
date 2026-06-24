import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, Signal } from '@angular/core';
import { CulinaryStop, FoodType } from '../models/culinary-stop';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/internal/operators/tap';

@Service()
export class GetCulinaryStopList {
    private readonly httpClient = inject(HttpClient);
    private readonly culinaries$ = this.httpClient.get<CulinaryStop[]>('/culinaries.json').pipe(
        tap((culinaries) => console.info('GetCulinaryStopList.culinaries$', culinaries))
    );
    private readonly culinariesSignal = toSignal(this.culinaries$, { initialValue: [] });

    private readonly culinaries = (foodType: FoodType) => computed(() => this.culinariesSignal().filter(culinary => culinary.foodType === foodType));

    getAll(): Signal<CulinaryStop[]> {
        return this.culinariesSignal;
    }

    getByFoodType(foodType: FoodType): Signal<CulinaryStop[]> {
        return this.culinaries(foodType);
    }
}
