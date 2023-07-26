import {PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";



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
    builder.addCase(FetchGetUser.fulfilled, (state:any, action:PayloadAction<any>) => {
        state.users = action.payload;
        state.userStatus = 'fullfiled'
    })
    .addCase(FetchGetUser.pending, (state:any, action:PayloadAction<any>) => {
        state.userStatus = 'loading'
    })
    .addCase(FetchGetUser.rejected, (state:any, action:PayloadAction<any>) => {
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