export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    favourited: number;
    imageUrl?: string;
    store?: string;
    createdById?: string;
}
