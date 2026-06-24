import { Place } from "./place";

export interface Step {
    id: number;
    date: Date;
    nbKms: number;
    // place: Place | Place[];
    place: Place[];
}