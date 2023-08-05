import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../assets/styles/Profile.css'
import { editValueUser } from "../api/fetchData";
import { userValue } from "../redux/Authuser";

const Profile = () => {
    const name = useSelector(state => state.login.user.firstname)
    const lastname = useSelector(state => state.login.user.lastname)
    const adresse = useSelector(state => state.login.user.adress)
    const city = useSelector(state => state.login.user.city)
    const zipcode = useSelector(state => state.login.user.zipcode)
    const token = useSelector(state => state.login.token)
    const [userName, setName] = useState(name)
    const [userLastName, setLastName] = useState(lastname)
    const [userAdress, setAdress] = useState(adresse)
    const [userCity, setCity] = useState(city)
    const [userZipCode, setZipCode] = useState(zipcode)
    const modifyValue = {userName, userLastName, userAdress, userCity, userZipCode}
    const dispatch = useDispatch()
    console.log(name);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const editValue = await editValueUser(token, modifyValue)
        dispatch(userValue(editValue))
    }

    return(
        <section className="profile_container">
                <h1>Modifier vos informations</h1>
                <p>Sur cette page, modifiez votre profil en quelques clics. Une fois vos modifications apportées, cliquez sur "Enregistrer".</p>
                <div className="input_profile">
                    <form>
                        <label htmlFor="">Prénom :</label>
                        <input type="text"  placeholder={name} onChange={e => setName(e.target.value)}/>
                        <label htmlFor="">Nom :</label>
                        <input type="text" value={userLastName} onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor="">Adresse :</label>
                        <input type="text" value={userAdress} onChange={e => setAdress(e.target.value)} />
                        <label htmlFor="">Ville :</label>
                        <input type="text" value={userCity} onChange={e => setCity(e.target.value)}/>
                        <label htmlFor="">Code postal :</label>
                        <input type="text" value={userZipCode} onChange={e => setZipCode(e.target.value)}/>
                        <button className="btn_btn_modify" onClick={handleSubmit}>Enregistrer</button>
                    </form>
                </div>
        </section>
    )
}

export default Profile