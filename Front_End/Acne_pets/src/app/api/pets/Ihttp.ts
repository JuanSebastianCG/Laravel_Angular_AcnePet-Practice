


export interface Ihttp {
        id: number;
        name: string;
        date_of_birth: string;
        age: number;
        type: string;
        client_pet: {
            client_id: number;
            pet_id: number;
        }
};

export interface IhttpData {
    data: Ihttp[];
}