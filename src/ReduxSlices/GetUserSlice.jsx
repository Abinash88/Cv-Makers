import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";





const initialState = {
  users:[],
  userStatus:null,
}


    
export const GetUserData = createSlice({
  name: 'users',
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(FetchGetUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.userStatus = 'fullfiled'
    })
    .addCase(FetchGetUser.pending, (state, action) => {
        state.userStatus = 'loading'
    })
    .addCase(FetchGetUser.rejected, (state, action) => {
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