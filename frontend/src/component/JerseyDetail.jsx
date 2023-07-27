import React, { useState } from "react";
import '../assets/styles/JerseyDetail.css'
import Condition from "./Condition";


const JerseyDetail = (props) => {
    const [selectedValue, setSelectedValue] = useState('')

    const handleClick = () => {
        alert('Click me')
    }

    return(
        <section>
            <div className="product_presentation">
                <div className="product_img">
                    <img src={props.img} alt={props.description} />
                </div>
                <div className="product_container">
                    <div className="product_detail">
                        <h1>{props.title}</h1>
                        <h2>{props.price} €</h2>
                    </div>
                    <div className="product_size">
                        <label>Choisissez votre taille:</label>
                        <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
                            <option value={"S"}>S</option>
                            <option value={"M"}>M</option>
                            <option value={"L"}>L</option>
                            <option value={"XL"}>XL</option>
                        </select>
                    </div>
                    <button className="btn_product" onClick={handleClick}>Ajouter au panier</button>
                    <ul className="condition">
                        <li>
                        <p>Livraison garantie sous 15 jours</p>
                        </li>
                        <li>
                            <p><strong>Echange et retour gratuits</strong>
                                <br/>
                                Vous avez jusque 60 jours après reception pour renvoyer votre article
                            </p>
                        </li>
                        <li></li>
                    </ul>
                </div>

            </div>
            <Condition />
        </section>
    )
}

export default JerseyDetail