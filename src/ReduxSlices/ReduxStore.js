import {configureStore} from '@reduxjs/toolkit';
import AboutSlice from '../ReduxSlices/AboutSlice'
import EducationSlice from './EducationContext';
import GetUserData from './GetUserSlice'

const store = configureStore({
    reducer:{
        About:AboutSlice,
        education:EducationSlice,
        users:GetUserData,
    }
})

export default store;