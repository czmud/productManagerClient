import React, { FormEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProductForm } from '../components/productForm';
import { FormProduct } from '../models/formProduct';


const initialProduct = {
    title: "",
    price: 0,
    description: "",
}


export const ProductEdit = () => {
    const { id } = useParams();
    const [ oneProduct, setOneProduct ] = useState<FormProduct>(initialProduct);
    const [ productIsFetched, setProductIsFetched ] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then( response => { setOneProduct(
                new FormProduct(
                response.data.product.title,
                response.data.product.price,
                response.data.product.description
                ));
                setProductIsFetched(true);
            })
            .catch( error => console.log(error) )
    }, [id]);

    const returnToView = () => {
        navigate("/products/"+id);
    }

    const updateExistingProduct = (event: FormEvent, successCallback: Function, updateProduct: FormProduct ) => {
        event.preventDefault();
        axios.put("http://localhost:8000/api/products/update/"+id, updateProduct)
            .then( results => successCallback())
            .catch( errors => console.log(errors));
    }

    return(
        <div>
            <p><Link to={"/"}>Home</Link></p>
            <p><Link to={"/products/"+id}>edit</Link></p>
            {productIsFetched ? <ProductForm product={oneProduct} saveUpdateCallback={updateExistingProduct} successCallback={() => returnToView() }/> : null}
        </div>
    )
}