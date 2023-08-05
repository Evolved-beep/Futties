import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "../redux/CartSlice";


const CartItem = ({id,title,price,quantity,img}) => {
    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(incrementQuantity(id))
    }

    const handleDescrease = () => {
        dispatch(decrementQuantity(id)) 
    }

    const handleRemove = () => {
        dispatch(removeItem(id))
    }
        return(
            <div className="cart_items">
                            <div className="cart_product">
                                <img src={img} alt="" />
                                <h4>{title}</h4>
                            </div>
                            <div className="cart_price">
                                <p>{price}€</p>
                            </div>
                            <div className="cart_quantity">
                                <button onClick={handleDescrease}>-</button>
                                <span>{quantity}</span>
                                <button onClick={handleIncrease}>+</button>
                                <div className="cart_delete">
                                    <button onClick={handleRemove}>X</button>
                                </div>
                            </div>
                        </div>
        )
    
}

export default CartItem