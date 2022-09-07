import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductDisplay } from '../components/productDisplay';
import { ProductForm } from '../components/productForm';


interface AxiosResults{
    _id: string;
    title: string;
    price: number;
    description: string;
    __v: number;
}

export const Main = () => {
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
        <h1>Product Manager</h1>
        <ProductForm formHandler={productFormHandler}/>
        <ProductDisplay products={products}/>
        </>
    )
}