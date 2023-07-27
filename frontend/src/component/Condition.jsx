import React from "react";
import "../assets/styles/Condition.css"

const Condition = () => {
    return(
        <div className="futties_condition">
                <h1>Futties vous garantit</h1>
                <div className="condition_delivery">
                    <div className="first_condition">
                        <img src="/svg/delivery.png" className="svg livraison" alt="" />
                        <p className="promesse">Livraison à domicile offerts</p>
                        <p className="promesse_desc">dès 30€ d'achats </p>
                    </div>
                    <div className="second_condition">
                        <img src="/svg/prime.png" className="svg" alt="svg abonnement" />
                        <p className="promesse">Livraison express avec Futties plus</p>
                        <p className="promesse_desc">tsr</p>
                    </div>
                    <div className="thrid_condition">
                        <img src="/svg/return.png" className="svg" alt="svg retour" />
                        <p className="promesse">Echange et retour gratuits</p>
                        <p className="promesse_desc">Sous réserve de condition</p>
                    </div>
                    <div className="fourth_condition">
                        <img src="/svg/headset.png" className="svg" alt="svg aide et contact" />
                        <p className="promesse">Aide & Contact</p>
                        <p className="promesse_desc">Pour toute demande d'assistance et répondre a vos question</p>
                    </div>
                </div>
            </div>
    )
}

export default Condition