import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  designation: "",
  address: "",
  city: "",
  email: "",
  phone: "",
  summery: null,
  status: null,
  image:'',
};

export const AboutSlice = createSlice({
  name: "About",
  initialState,
  reducers: {
    FirstName(state, action) {
      state.firstname = action.payload;
    },
    LastName(state, action) {
      state.lastname = action.payload;
    },
    Designation(state, action) {
      state.designation = action.payload;
    },
    Address(state, action) {
      state.address = action.payload;
    },
    City(state, action) {
      state.city = action.payload;
    },
    Email(state, action) {
      state.email = action.payload;
    },
    Phone(state, action) {
      state.phone = action.payload;
    },
    Summery(state, action) {
      state.summery = action.payload;
    },
    Image(state, action) {
      state.image = action.payload
    }
  },
});

export const {
  FirstName,
  LastName,
  Designation,
  Address,
  City,
  Email,
  Phone,
  Summery,
  Image,
} = AboutSlice.actions;
export default AboutSlice.reducer;
