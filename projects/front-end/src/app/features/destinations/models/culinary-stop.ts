export type FoodType = 'vegetarian' | 'vegan' | 'gluten-free' | 'halal' | 'kosher' | 'pescatarian' | 'omnivore';

export interface CulinaryStop {
    id: number;
    label: string;
    imageUrl ?: string;
    notation ?: number;
    foodType ?: FoodType;
}