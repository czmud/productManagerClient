export class Product{
    _id?: string;
    title: string;
    price: number;
    description: string;
    __v?: number;

    constructor( title: string, price: number, description: string){
        this.title = title;
        this.price = price;
        this.description = description;
    }
}