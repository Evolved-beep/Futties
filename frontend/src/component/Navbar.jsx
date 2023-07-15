import React, { useEffect } from "react";
import '../assets/styles/Navbar.css'


const Navbar = () => {
    return(
        <nav>
            <h1>Futties</h1>
            <div className="first_container">
                <ul>
                    <li>Football</li>
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