import React, { useEffect, useRef, useState } from "react";

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [adress, setAdress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userInscription = async() => {
            const requestOptions = {
                method:"POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify({
                    email: email,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    adress: adress,
                    zipcode: zipcode,
                    city: city
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
                    <input type="password"
                           placeholder="Mot de passe"
                           onChange={e => setPassword(e.target.value)}
                            />
                    <input type="text"
                           placeholder="Prénom"
                           onChange={e => setFirstName(e.target.value)} />
                    <input type="text"
                           placeholder="Nom"
                           onChange={e => setLastName(e.target.value)} />
                    <input type="text"
                            placeholder="Adresse"
                            onChange={e => setAdress(e.target.value)} />
                    <input type="text" 
                            placeholder="Code postal"
                            onChange={e => setZipcode(e.target.value)} />
                    <input type="text"
                            placeholder="Ville"
                            onChange={e => setCity(e.target.value)} />
                    <button className="btn_login" onClick={handleSubmit}>Inscription</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Signup;