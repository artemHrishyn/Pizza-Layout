import { IProduct } from "../interface/product.interface";

export class Product implements IProduct{
    id: number = 0;
    title: string = '';
    description: string = '';
    price: number = 0;
    
    constructor(){}
}