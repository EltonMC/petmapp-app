export class Petshop {
    id: number;
    name: string;
    description: string;
    images: [{
        image: string,
        status: boolean
    }];
    services: [{
        id: string,
        type: string,
        status: boolean,
        turns: [{
            id: string,
            day: string,
            time_start: string,
            time_end: string,
            max_reservations: number,
            percent_discount: number,
            status: boolean
        }]
    }];
}
