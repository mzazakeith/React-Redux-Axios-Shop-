import React, {useEffect} from "react";
import Product from './Product';
import axios from "axios";
import {setProducts} from '../redux/actions/productActions'
import { useDispatch } from "react-redux";


const ProductListing = () =>{
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = 
            await axios.get('https://fakestoreapi.com/products')
            .catch((err)=>{
                console.log("Err",err);
            });
            dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    },[]);
    
    return(
        <div className="ui grid container">
            <Product/>
        </div>
    );
};

export default ProductListing;