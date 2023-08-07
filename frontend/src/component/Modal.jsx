import React from "react";
import "../assets/styles/Modal.css"

const Modal = ({Content}) => {
    return(
        <div className="success_container">
            <img src={"/svg/success.png"} alt="" />
            <p className="message_content">{Content}</p>
        </div>
    )
}

export default Modal 