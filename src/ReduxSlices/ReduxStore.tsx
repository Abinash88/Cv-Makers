import {configureStore} from '@reduxjs/toolkit';
import AboutSlice from './AboutSlice'
import EducationSlice from './EducationContext';
import GetUserData from './GetUserSlice'

export const store = configureStore({
    reducer:{
        About:AboutSlice,
        education:EducationSlice,
        users:GetUserData,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;