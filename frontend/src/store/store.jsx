import React from "react";
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import loginReducer from '../redux/Authuser'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE,REGISTER } from 'redux-persist'
import thunk from 'redux-thunk';
import cartSlice from "../redux/CartSlice";

const persistConfig = {
    key:'root',
    storage,
    version: 0
}

const rootReducer = combineReducers({
    login: loginReducer,
    cart: cartSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
 