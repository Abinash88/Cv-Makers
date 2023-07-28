


import {MiddleWareError, ErrorMessage} from '@/middleware/middlewareErrorFind'
import {  JwtVerify, mongodb } from '../../../Features/mongodb'


const Login = MiddleWareError(async(req, res) => {
    if(req.method !== 'GET') return ErrorMessage(res, 403, 'Only POST method allowd!')
    await mongodb()
        const user =await JwtVerify(req);

    if(!user) return res.status(409).json({success:false, message:'Please Login First!'})
    res.status(200).json({success:true, message:'Get User Successfully', user})
})

export default Login;

