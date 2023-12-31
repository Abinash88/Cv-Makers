import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import { serialize } from "cookie";
import { CvUser } from "../Model/UserModel";


export const mongodb = async() => {
    await mongoose.connect(process.env.MONGODB,{
        dbName:'CvUsers',
    }).then(() => {
        console.log('connected to database')
    }).catch((err) => {
        console.log(err.message, 'mongoose error occured');
    })
}


export const GetToken = async(userid) => {
    return jwt.sign({userid}, process.env.JWTSECRET)
}

export const CookieSetter = async(res, token, set) => {
    res.setHeader('Set-Cookie',serialize('token', set ? token : '' ,{
        path:'/',
        httpOnly:true,
        maxAge:set ? 5 * 24 * 60 * 60 * 1000 : 0,
    }))
}

export const JwtVerify = async(req) => {
    const cookie = req.headers.cookie
    const token = cookie?.split('=')[1]
    if(!token) {
        res.status(400).json({success:false, message:'token not found'})
    }  
    try{
        const verify = jwt.verify(token, process.env.JWTSECRET);
        const users = await CvUser.findById(verify?.userid);
        return users;
    }catch(err) {
        console.log(err.message, 'jwt errors ');
    }
}

