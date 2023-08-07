import React, { useState } from "react";
import '../assets/styles/JerseyDetail.css'
import Condition from "./Condition";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";


const JerseyDetail = ({img,title,description,price,id}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addToCart({title, id, price, img}))
    }

    return(
        <section>
            <div className="product_presentation">
                <div className="product_img">
                    <img src={img} alt={description} />
                </div>
                <div className="product_container">
                    <div className="product_detail">
                        <h1>{title}</h1>
                        <h2>{price} €</h2>
                    </div>
                    <button className="btn_product" onClick={handleClick}>Ajouter au panier</button>
                    <ul className="condition">
                        <li>
                        Livraison garantie sous 15 jours
                        </li>
                        <li>
                            <strong>Echange et retour gratuits</strong>      
                        </li>
                        <li>Vous avez jusque 60 jours après reception pour renvoyer votre article</li>
                    </ul>
                </div>
            </div>
            <Condition />
        </section>
    )
}

export default JerseyDetail