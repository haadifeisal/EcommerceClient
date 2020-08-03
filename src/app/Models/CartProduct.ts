import { Product } from './Product';

export class CartProduct{
    cartProductId: string;
    cartId: string;
    product: Product;
    quantity: number;
    createdDate: Date;
    updatedDate: Date;
}