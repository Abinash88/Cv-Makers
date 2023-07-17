import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  educationData: [],
}

export const EducationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    EducationData() {
      
    }

  }
})

export const {EducationData} = EducationSlice.actions
export default EducationSlice.reducer;