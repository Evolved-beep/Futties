import React from "react";
import '../assets/styles/Card.css'

const Card = (props) => {
    return(
        <section className="card_container">
            <div className="img_container">
                <img src={props.img} alt="" />
            </div>
            <div className="detail_container">
                <h1>{props.title}</h1>
                <p>{props.descr}</p>
                <p>{props.price}€</p>
            </div>
        </section>
    )

}


export default Card