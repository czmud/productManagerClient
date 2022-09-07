import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductDisplay } from './productDisplay';
import { ProductForm } from './productForm';


interface AxiosResults{
    _id: string;
    title: string;
    price: number;
    description: string;
    __v: number;
}

export const ProductContainer = () => {
    const [products, setProducts] = useState<AxiosResults[]>([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then( response => setProducts(response.data.products))
            .catch( error => console.log(error) )
    }, []);

    const productFormHandler = () => {

    }

    return(
        <>
        <ProductForm formHandler={productFormHandler}/>
        <ProductDisplay products={products}/>
        </>
    )
}