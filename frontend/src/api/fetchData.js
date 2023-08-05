const URL = "http://localhost:3000/api/users"

export const getToken = async(value) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: value.email,
            password: value.password
        })
    }
    const response = await fetch(`${URL}/login`, requestOptions)
    const data = await response.json()
    console.log(data)
    return data.token
}
export const getUser = async(token, value) => {
    const requestOptions = {
        method:"POST",
        headers:{'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`},
        body: JSON.stringify({
            email: value.email
        })
    }
    const response = await fetch(`${URL}/profile`, requestOptions)
    const data = await response.json()
    console.log(data);
    return data
}

export const editValueUser = async(token, value) => {
    console.log(value)
    const options = {
        method:'PUT',
        headers: {"Content-Type" : "application/json",
                  "Authorization": `Bearer ${token}`},
        body: JSON.stringify({
            firstname: value.userName,
            lastname: value.userLastName,
            adress: value.userAdress,
            city: value.userCity, 
            zipcode: value.userZipCode})
    }
    const response = await fetch(`${URL}/profile`, options)
    const data = await response.json()
    console.log(data)
}