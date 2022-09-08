export class Product{
    _id: string;
    title: string;
    price: number;
    description: string;

    constructor( _id: string, title: string, price: number, description: string){
        this._id = _id;
        this.title = title;
        this.price = price;
        this.description = description;
    }
}