// export class Place {
//     id: number = 0;
//     label: string = '';
// }

// export const defaultPlace = new Place();

export interface Place {
    id: number;
    label: string;
}

export const defaultPlace: Place = {
    id: 0,
    label: ''
}