import React, { useEffect } from "react";
import '../assets/styles/Navbar.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggoutUser } from "../redux/Authuser";

const Navbar = () => {
    const login = useSelector(state => state.login.isLoggin)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loggoutUser())
    }

    return(
        <nav>
            <Link to="/"><h1>Futties</h1></Link>
            <div className="first_container">
                <ul>
                    <Link to='/product/football'><li>Football</li></Link>
                    <li>NBA</li>
                    <li>Retro</li>
                </ul>
            </div>
            <div className="last_container">
                <Link to="/cart"><img src="/svg/cart.png" alt="" /></Link>
                {login === false ? (
                    <div className="container_login">
                    <Link to="/login"><button className="btn_btn_login">Log in</button></Link>
                    <Link to='/signup'><button className="btn_btn_signup">Sign up</button></Link>
                    </div>
                ) : (
                    <div className="container_logout">
                        <Link to={`/profile`}><img className="profil_svg" src="/svg/profile.png" alt="profil svg" /></Link>
                        <button className="btn_btn_logout" onClick={handleSubmit}>Log out</button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar