import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../models/product';

interface ProductProps{
    products: Product[]
}

const displayStyle = {
    display: "flex",
    justifyContent: "center"
}

export const ProductDisplay = ( props: ProductProps ) => {

    return(
        <div>
            <h1>All Products</h1>
            <table style={displayStyle}>
                <tbody>
                    {props.products.map( (oneProduct, i) => <tr key={i}><td><Link to={"/products/"+oneProduct._id}>{oneProduct.title}</Link></td></tr>)}
                </tbody>
            </table>
        </div>
    )
}