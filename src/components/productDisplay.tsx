import React from 'react';
import { Product } from '../models/product';

interface ProductProps{
    products: Product[]
}

export const ProductDisplay = ( props: ProductProps ) => {

    return(
        <div>
            <h1>All Products</h1>
            {props.products.map( (oneProduct, i) => <div key={i}>{oneProduct.title}</div>)}
        </div>
    )

}