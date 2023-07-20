import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getOneProduct = async() => {
            const response = await fetch(`http://localhost:3000/product/football/${id}`)
            const data = await response.json()
            console.log(data)
        }
        getOneProduct()
    },[id])

}

export default ProductDetail