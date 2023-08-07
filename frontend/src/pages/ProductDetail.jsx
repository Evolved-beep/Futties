import React, { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import JerseyDetail from "../component/JerseyDetail";

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const getOneProduct = async() => {
            const response = await fetch(`http://localhost:3000/api/product/football/${id}`)
            const data = await response.json()
            setProduct(data)
        }
        getOneProduct()
    },[id])

    return(
        <JerseyDetail 
            key={product.id}
            id={id}
            img={product.imageUrl}
            description={product.description}
            title={product.title}
            price={product.price}
        />   
    )
}

export default ProductDetail