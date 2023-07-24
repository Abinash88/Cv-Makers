import mongoose from "mongoose";

const UserModel = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        length:6,
    },
})


export const CvUser = mongoose.models.CvUser || mongoose.model('CvUser', UserModel);
