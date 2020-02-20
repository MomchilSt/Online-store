export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    favourited: number;
    imgName?: string;
    store?: string;
    createdByEmail?: string;
}
