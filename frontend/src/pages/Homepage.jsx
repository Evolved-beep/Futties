import React, { useEffect, useState } from "react";
import '../assets/styles/Homepage.css'

const Homepage = () => {
    const [allJersey, setAllJersey] = useState([])

    useEffect(()=> {
        const getJersey = async() => {
            const response = await fetch("http://localhost:3000/api/jersey")
            const data = await response.json()
            console.log(data)
        }
        getJersey()
    })
   
}    

export default Homepage