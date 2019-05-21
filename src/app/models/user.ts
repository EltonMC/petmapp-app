export class User {
    id: number;
    email: string;
    name: string;
    gender: string;
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
    type: string;
    photo: string;
}
