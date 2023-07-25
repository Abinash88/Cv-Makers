import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Dispatch, AnyAction } from 'redux';



interface userState {
    users:any[];
    userStatus:string | null;
}



const initialState:userState = {
  users:[],
  userStatus:null,
}


    
export const GetUserData = createSlice({
  name: 'users',
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(FetchGetUser.fulfilled, (state:any, action:any) => {
        state.users = action.payload;
        state.userStatus = 'fullfiled'
    })
    .addCase(FetchGetUser.pending, (state:any, action:any) => {
        state.userStatus = 'loading'
    })
    .addCase(FetchGetUser.rejected, (state:any, action:any) => {
        state.userStatus = 'failed'
    })
  }

})

export default GetUserData.reducer;

export const FetchGetUser = createAsyncThunk('users/FetchGetUser', async() => {

    try{
        const res = await fetch('http://localhost:3000/api/auth/GetUser',{
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