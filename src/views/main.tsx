import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductDisplay } from '../components/productDisplay';
import { ProductForm } from '../components/productForm';
import { Product } from '../models/product';
import { CreateProduct } from '../models/createProduct';
import { EditProduct } from '../models/editProduct';



export const Main = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then( response => setProducts(response.data.products))
            .catch( error => console.log(error) )
    }, []);

    const removeFromDom = (_id: string) => {
        setProducts(products.filter( oneProduct => oneProduct._id !== _id ));
    }

    const addToDom = (addedProduct: Product) => {
        setProducts([...products, addedProduct ] );
    }

    const saveNewProduct = (event: FormEvent, successCallback: Function, newProduct: EditProduct ) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/products/new", newProduct)
        .then( response => successCallback(response.data.product))
        .catch( error => console.log(error));
    }

    return(
        <>
        <h1>Product Manager</h1>
        <ProductForm product={new CreateProduct()} saveUpdateCallback={saveNewProduct} successCallback={addToDom} />
        <ProductDisplay products={products} removeFromDom={removeFromDom} />
        </>
    )
}