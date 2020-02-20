import { IProduct } from './product';

export interface IUser {
    id: string;
    email: string;
    imageUrl?: string;
    name?: string;
    favourites?: IProduct[];
    productsBought?: IProduct[];
}
