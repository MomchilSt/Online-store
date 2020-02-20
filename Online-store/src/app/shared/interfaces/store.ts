import { IProduct } from './product';

export interface IStore {
    name: string;
    address: string;
    imageUrl: string;
    likes: number;
    dislikes: number;
    products: IProduct[];
}
