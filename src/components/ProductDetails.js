import React, {useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetails = () =>{
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const fetchDetails = async  () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch(selectedProduct(response.data))
    }
    return(
        <div>
            <h1>Product Details</h1>
        </div>
    );
};

export default ProductDetails;