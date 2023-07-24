import {MiddleWareError, ErrorMessage} from '@/middleware/middlewareErrorFind'
import {  JwtVerify, mongodb } from '../../../Features/mongodb'


const Login = MiddleWareError(async(req, res) => {
    if(req.method !== 'GET') return ErrorMessage(res, 403, 'Only POST method allowd!')
    await mongodb()
    console.log(req.headers);
        const user = JwtVerify(req);

    if(!user) return res.status(409).json({success:false, message:'Please Login First!'})
    console.log(user);
    res.status(200).json({success:true, message:'Logged in Successfully'})
})

export default Login;
