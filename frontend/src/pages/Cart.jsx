import React, {Fragment, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import '../assets/styles/Cart.css'
import CartItem from "../component/CartItem";
import Total from "../component/Total";
import Modal from "../component/Modal";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../redux/CartSlice";


const Cart = () => {
    const cart = useSelector(state => state.cart.cartItem)
    const isLoggin = useSelector(state => state.login.isLoggin)
    const navigate = useNavigate()
    const [success, setSucess] = useState(false)
    const dispatch = useDispatch()
    console.log(cart.length);
   
    const handlePaiement = () => {
        if(!isLoggin){
            navigate("/login")
        } 
        setSucess(true)
        if(!isLoggin){
            return null 
        }
        dispatch(resetCart(cart))
    } 

    return(
        <>
            {cart.length === 0 ? (
                <div className="empty_cart_container">
                    <h2 className="empty_cart">Oups votre panier est vide ! Ajoutez un article dans votre panier pour passer commande</h2>
                </div>
            ) : (
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
            <div className="cart_tot">
                <Total />
                <button className="btn_payement" onClick={handlePaiement}>Procéder au paiement </button>
                {success ? (
                    <Modal Content={"Votre paiement a bien été effectué"} />
                ) : null}
            </div>
        </div>
    )}
    </>
    )
}

export default Cart