export class Petshop {
    id: number;
    name: string;
    description: string;
    logo: string;
    max_discount: number;
    phone:[{
        phone: string;
    }];
    num_services: number;
    rating_average: number;
    schedule: string;
    images: [{
        image: string,
        status: boolean
    }];
    address: {
        id: string,
        cep: string,
        state: string,
        city: string,
        district: string,
        street: string,
        number: string,
        complement: string,
        longitude: string,
        latitude: string
    };
    services: [{
        id: string,
        type: string,
        status: boolean,
    }];
}
