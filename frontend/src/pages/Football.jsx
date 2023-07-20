import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import '../assets/styles/Football.css'
import { Link } from "react-router-dom";



const Football = () => {
    const [allJersey, setAllJersey] = useState([])
    useEffect(()=> {
        const getJersey = async() => {
            const response = await fetch("http://localhost:3000/api/product/football")
            const data = await response.json()
            console.log(response)
            setAllJersey(data)
        }
        getJersey()
    },[])
        return(
        <div className="container">
            <div className="row">
                <div className="jersey_container">
                    {allJersey.map((jersey) => {
                        console.log(jersey)
                        return(
                            <Link to={`/product/football/${jersey._id}`}>
                                <Card img={jersey.imageUrl}
                                    title={jersey.title}
                                    descr={jersey.description}
                                    price={jersey.price}  />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
        )
    
}

export default Football