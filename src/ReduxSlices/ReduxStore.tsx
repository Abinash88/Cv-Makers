import {configureStore} from '@reduxjs/toolkit';
import AboutSlice from './AboutSlice'
import GetUserData from './GetUserSlice'

 const store = configureStore({
    reducer:{
        About:AboutSlice,
        users:GetUserData,
    }
})

export default store;

