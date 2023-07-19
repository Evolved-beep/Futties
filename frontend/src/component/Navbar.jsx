import React, { useEffect } from "react";
import '../assets/styles/Navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <nav>
            <h1>Futties</h1>
            <div className="first_container">
                <ul>
                    <Link to='/football'><li>Football</li></Link>
                    <li>NBA</li>
                    <li>Retro</li>
                </ul>
            </div>
            <div className="last_container">
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </nav>
    )


}

export default Navbar