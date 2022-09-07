export class Product{
    id?: string;
    title: string;
    price: number;
    description: string;

    constructor( title: string, price: number, description: string){
        this.title = title;
        this.price = price;
        this.description = description;
    }
}