import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import '../assets/styles/Football.css'


const Football = () => {
    const [allJersey, setAllJersey] = useState([])
    useEffect(()=> {
        const getJersey = async() => {
            const response = await fetch("http://localhost:3000/product/jersey")
            const data = await response.json()
            setAllJersey(data)
        }
        getJersey()
    },[])
        return(
        <div className="container">
            <div className="row">
                <div className="jersey_container">
                    {allJersey.map((jersey) => {
                        return(
                            <Card img={jersey.imageUrl}
                                title={jersey.title}
                                descr={jersey.description}
                                price={jersey.price}  />
                        )
                    })}
                </div>
            </div>
        </div>
        )
    
}

export default Football