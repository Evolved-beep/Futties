import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
    const cart = useSelector((state) => state.cart.cartItem)
    const getTotal = () => {
        let totQuantity = 0;
        let totPrice = 0 
    
        cart.map((item) => {
            totQuantity += item.quantity;
            totPrice += item.price * item.quantity
        })
    
        return {totPrice, totQuantity}
    }
    return(
        <p className="cart_total">
            total ({getTotal().totQuantity})
            : <strong>{getTotal().totPrice}€</strong>
        </p>
    )

}

export default Total 