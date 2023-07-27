import React, { useEffect } from "react";
import '../assets/styles/Navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <nav>
            <h1>Futties</h1>
            <div className="first_container">
                <ul>
                    <Link to='/product/football'><li>Football</li></Link>
                    <li>NBA</li>
                    <li>Retro</li>
                </ul>
            </div>
            <div className="last_container">
                <Link to="/cart"><img src="/svg/cart.png" alt="" /></Link>
                <Link to="/login"><button className="btn_btn">Log in</button></Link>
                <Link to='/signup'><button className="btn_btn">Sign up</button></Link>
            </div>
        </nav>
    )
}

export default Navbar