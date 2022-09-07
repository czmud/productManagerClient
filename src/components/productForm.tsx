import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { Product } from '../models/product';

interface ProductFormProps{
    formHandler: Function
}

const formStyle = {
    display: "flex",
    justifyContent: "center"
}

export const ProductForm = ( props: ProductFormProps ) => {
    const [title, setTitle ] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const saveProduct = ( event: FormEvent ) => {
        event.preventDefault();
        const newProduct = new Product(title, price, description);

        axios.post("http://localhost:8000/api/products/new", newProduct)
            .then( response => console.log(response))
            .catch( error => console.log(error));
        
        setTitle("");
        setPrice(0);
        setDescription("");
    }

    return(
        <div style={formStyle}>
        <form onSubmit={ saveProduct }>
        <table>
            <tbody>
                <tr>
                    <td><label>Title:</label></td>
                    <td><input value={title} onChange={ (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} /></td>
                </tr>
                <tr>
                    <td><label>Price:</label></td>
                    <td><input type="number" step="0.01" value={price} onChange={ (event: ChangeEvent<HTMLInputElement>) => setPrice(parseFloat(event.target.value))} /></td>
                </tr>
                <tr>
                    <td><label>Description:</label></td>
                    <td><input value={description} onChange={ (event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)} /></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Create"/></td>
                </tr>
            </tbody>
        </table>
        </form>
        </div>
    )
}