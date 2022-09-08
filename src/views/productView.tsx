import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DeleteButton } from '../components/deleteButton';
import { Product } from '../models/product';

const initialProduct = {
    _id: "",
    title: "",
    price: 0,
    description: "",
    __v: 0
}

export const ProductView = () => {
    const { id } = useParams();
    const [ oneProduct, setOneProduct ] = useState<Product>(initialProduct);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then( response => setOneProduct(response.data.product))
            .catch( error => console.log(error) )
    }, [id]);

    const returnHome = () => {
        navigate("/");
    }

    return(
        <div>
            <Link to={"/"}>Home</Link>
            <h1>{oneProduct.title}</h1>
            <p>${oneProduct.price}</p>
            <p>{oneProduct.description}</p>
            <DeleteButton _id={oneProduct._id} objectsName="products" successCallback={()=>returnHome()}/>
            <p><Link to={"/products/"+oneProduct._id+"/edit"}>edit</Link></p>
        </div>
    );
}