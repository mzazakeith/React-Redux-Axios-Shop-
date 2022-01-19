import React, {useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";

const ProductDetails = () =>{
    const {productId} = useParams();
    return(
        <div>
            <h1>Product Details</h1>
        </div>
    );
};

export default ProductDetails;