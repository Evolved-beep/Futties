import React, { useState } from "react";
import '../assets/styles/Login.css'
import { Link } from "react-router-dom";
import { getToken, getUserProfile } from "../api/fetchData";
import { useDispatch } from "react-redux";
import { addToken, userValue } from "../auth/Authuser";



const Login = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const inputValue = {email,password}
    const dispatch = useDispatch()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const token = await getToken(inputValue)
        dispatch(addToken(token))
        const getUserData = await getUserProfile(token)
        dispatch(userValue(getUserData))
    }
 
    return(
        <section className="login_container">
            <div className="login_login">
                <div className="login_input">
                <h1>Déjà inscrit</h1>
                    <form action="" className="form_login">
                        <input type="text"
                               placeholder="Email"
                               onChange={e => setEmail(e.target.value)}
                               />
                        <input type="text"
                               placeholder="Mot de passe" 
                               onChange={e => setPassword(e.target.value)}
                               />
                        <button className="btn_login" onClick={handleSubmit}>Se connecter</button>
                    </form>
                    <Link to='/signup'>Pas encore inscrit ? Inscrivez-vous !</Link>
                </div>
            </div>
        </section>
    ) 

}

export default Login
