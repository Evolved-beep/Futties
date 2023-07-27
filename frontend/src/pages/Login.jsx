import React, { useState } from "react";
import '../assets/styles/Login.css'
import { Link } from "react-router-dom";


const Login = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const token = 'RANDOM_SECRET_TOKEN'

    const handleSubmit = (e) => {
        e.preventDefault()
        const userLogin = async() => {
            const requestOptions = {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${token}`
                },
                body: JSON.stringify({
                    email:email,
                    password:password
                })
            }
            const response = await fetch("http://localhost:3000/api/users/login", requestOptions )
            const data = await response.json()
            console.log(data)
        }
        userLogin()
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
