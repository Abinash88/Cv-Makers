import {configureStore} from '@reduxjs/toolkit';
import AboutSlice from '../ReduxSlices/AboutSlice'
import EducationSlice from './EducationContext';

const store = configureStore({
    reducer:{
        About:AboutSlice,
        education:EducationSlice,
    }
})

export default store;