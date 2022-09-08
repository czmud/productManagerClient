import React, { ChangeEvent, FormEvent, useReducer } from 'react';
import { EditProduct } from '../models/editProduct';

const formStyle = {
    display: "flex",
    justifyContent: "center"
}

interface FormProps{
    product: EditProduct;
    saveUpdateCallback: Function;
    successCallback: Function;
}

type Action = 
| { type: string, payload: string }
| { type: string, payload: number };

function reducer( oneProduct: EditProduct, action: Action ){
    return {
        ...oneProduct,
        [action.type]: action.payload
    };
}

export const ProductForm = (props: FormProps) => {
    const [ oneProduct, dispatch ] = useReducer( reducer, props.product )

    const handleChange = ( event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        dispatch({
            type: name,
            payload: value
        })
    }

    return(
        <div style={formStyle}>
        <form onSubmit={ (event: FormEvent ) => props.saveUpdateCallback(event, props.successCallback, oneProduct) }>
        <table>
            <tbody>
                <tr>
                    <td><label>Title:</label></td>
                    <td><input  name="title"
                                value={oneProduct.title}
                                onChange={ (event: ChangeEvent<HTMLInputElement>) => handleChange(event)} /></td>
                </tr>
                <tr>
                    <td><label>Price:</label></td>
                    <td><input  name="price" type="number" step="0.01" 
                                value={oneProduct.price} 
                                onChange={ (event: ChangeEvent<HTMLInputElement>) => handleChange(event)} /></td>
                </tr>
                <tr>
                    <td><label>Description:</label></td>
                    <td><input  name="description"
                                value={oneProduct.description} 
                                onChange={ (event: ChangeEvent<HTMLInputElement>) => handleChange(event)} /></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Save"/></td>
                </tr>
            </tbody>
        </table>
        </form>
        </div>
    )
}