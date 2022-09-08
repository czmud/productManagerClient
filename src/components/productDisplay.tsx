import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../models/product';
import { DeleteButton } from './deleteButton'

interface ProductProps{
    products: Product[];
    removeFromDom: Function;
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
                    {props.products.map( (oneProduct, i) => <tr key={i}>
                        <td><Link to={"/products/"+oneProduct._id}>{oneProduct.title}</Link></td>
                        <td><DeleteButton _id={oneProduct._id} objectsName="products" successCallback={()=>props.removeFromDom(oneProduct._id)} /></td>
                        <td><Link to={"/products/"+oneProduct._id+"/edit"}>edit</Link></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}