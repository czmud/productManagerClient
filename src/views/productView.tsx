import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface AxiosResults{
    _id: string;
    title: string;
    price: number;
    description: string;
    __v: number;
}

const initialResult = {
    _id: "",
    title: "",
    price: 0,
    description: "",
    __v: 0
}

export const ProductView = () => {
    const { id } = useParams();
    const [ oneProduct, setOneProduct ] = useState<AxiosResults>(initialResult);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then( response => setOneProduct(response.data.product))
            .catch( error => console.log(error) )
    }, [id]);

    return(
        <div>
            <h1>{oneProduct.title}</h1>
            <p>${oneProduct.price}</p>
            <p>{oneProduct.description}</p>
        </div>
    );
}