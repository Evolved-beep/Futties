import React from "react";
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../auth/Authuser'
import storageSession from 'redux-persist/lib/storage/session'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk';


const persistConfig = {
    key:'root',
    storage,
    storageSession,
}

const persistedReducer = persistReducer(persistConfig, loginReducer)

export const store = configureStore({
    reducer:{
        reducer: persistedReducer,
        middleware:[thunk] 
    }
})

export const persistor = persistStore(store)