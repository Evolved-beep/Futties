import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token: null,
    isLoggin : false
}

const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        addToken : (state,action) => {
            state.token = action.payload;
            return state
        },
        userValue : (state, action) => {
            const {firstname, lastname, email, adress, zipcode, city} = action.payload;
            state.user.firstname = firstname;
            state.user.lastname = lastname;
            state.user.adress = adress;
            state.user.zipcode = zipcode; 
            state.user.email = email; 
            state.user.city = city;
        },

        isLoggin: (state) => {
            state.isLoggin = true
        },

        loggoutUser: (state, action) => {
            state.user = action.payload;
            state.user = {};
            state.token = null
            state.isLoggin = false
            return state
        },
    }
})

export const {addToken, userValue, isLoggin, loggoutUser} = userSlice.actions
export default userSlice.reducer