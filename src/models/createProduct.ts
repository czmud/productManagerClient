export class CreateProduct{
    title: string;
    price: number;
    description: string;
    
    constructor( title: string = "", price: number = 0, description: string = ""){
        this.title = title;
        this.price = price;
        this.description = description;
    }
}