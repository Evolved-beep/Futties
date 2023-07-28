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
    return data.token
}

export const getUserProfile = async(token) => {
    const requestOptions = {
        method:'GET',
        headers:{'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`},
    }
    const response = await fetch(`${URL}/profile`, requestOptions)
    const data = await response.json()
    console.log(data)
    return data
}