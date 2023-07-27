import React, { useEffect, useRef, useState } from "react";

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userInscription = async() => {
            const requestOptions = {
                method:"POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify({
                    email: email,
                    password: password
            })
        }
            const response = await fetch("http://localhost:3000/api/users/signup", requestOptions)
            const data = await response.json()
            console.log(data)
        }
        userInscription()
    }
    return(
        <section className="login_container">
        <div className="login_login">
            <div className="login_input">
            <h1>Inscrivez-vous</h1>
                <form action="" className="form_login">
                    <input type="text"
                           placeholder="Email"
                           onChange={e => setEmail(e.target.value)}
                           />
                    <input type="text"
                           placeholder="Mot de passe"
                           onChange={e => setPassword(e.target.value)}
                            />
                    <button className="btn_login" onClick={handleSubmit}>Inscription</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Signup;