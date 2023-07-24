import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";



const initialState = {
  users: [],
  userStatus:null,
}

export const GetUserData = createSlice({
  name: 'education',
  initialState,
  extraReducers:(builder) => {
    builder.addCase(FetchGetUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.userStatus = 'fullfiled'
    })
  }

})

export default GetUserData.reducer;

export const FetchGetUser = createAsyncThunk('users/FetchGetUser', async() => {

    try{
        const res = await fetch('http://localhost:300/api/auth/GetUser',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        });
        
        const data = await res.json()
        if(!data.success) return [];
        return data.user
    }catch(err) {
        return []
    }
    
})