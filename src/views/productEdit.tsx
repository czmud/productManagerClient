import React, { FormEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductForm } from '../components/productForm';
import { EditProduct } from '../models/editProduct';


const initialProduct = {
    _id: "",
    title: "",
    price: 0,
    description: "",
}


export const ProductEdit = () => {
    const { id } = useParams();
    const [ oneProduct, setOneProduct ] = useState<EditProduct>(initialProduct);
    const [ productIsFetched, setProductIsFetched ] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then( response => { setOneProduct(
                new EditProduct(
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

    const updateExistingProduct = (event: FormEvent, successCallback: Function, updateProduct: EditProduct ) => {
        event.preventDefault();
        axios.put("http://localhost:8000/api/products/update/"+id, updateProduct)
            .then( results => successCallback())
            .catch( errors => console.log(errors));
    }

    return(
        productIsFetched ? <ProductForm product={oneProduct} saveUpdateCallback={updateExistingProduct} successCallback={() => returnToView() }/> : null
    )
}