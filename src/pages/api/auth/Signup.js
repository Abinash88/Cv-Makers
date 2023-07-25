import {MiddleWareError, ErrorMessage} from '@/middleware/middlewareErrorFind'
import bcrypt from 'bcrypt'
import { CvUser } from '../../../Model/UserModel'
import { CookieSetter, GetToken, mongodb } from '../../../Features/mongodb'


const Login = MiddleWareError(async(req, res) => {
    if(req.method !== 'POST') return ErrorMessage(res, 403, 'Only POST method allowd!')
    const data = req.body;
    if( !data.name || !data.email || !data.password) return ErrorMessage(res, 400, 'Please Fill up the feild!');
    await mongodb()
    let user ;
    try{
        user = await CvUser.findOne({email:data.email})
    }catch(err) {
        return res.status(400).json({success:false, message:err.message})
    }
    if(user) return res.status(409).json({success:false, message:'User Already Exists!'})

    const changePassword = await bcrypt.hash(data.password, 10)
    user = await CvUser.create({
        name:data.name,
        email:data.email,
        password:changePassword,
    });
    res.status(200).json({success:true, message:'Successfully signed up', })
})

export default Login;
