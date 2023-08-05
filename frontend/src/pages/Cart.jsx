import React from "react";
import { useSelector } from "react-redux";
import '../assets/styles/Cart.css'
import CartItem from "../component/CartItem";


const Cart = () => {
    const cart = useSelector(state => state.cart.cartItem)
    console.log(cart);
    return(
        <div className="cart_container">
            <h2>Shopping Cart</h2>
            <div className="cart_title">
                <h3>Product</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
            </div>
            <div className="cart_item">
            {cart?.map((item) => {
                    return(
                        <CartItem
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            quantity={item.quantity}
                            price={item.price}
                            />
                    )
                })}
            </div>


            
        </div>
    )
    
}

export default Cart