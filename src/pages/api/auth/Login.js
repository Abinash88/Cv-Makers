import {MiddleWareError, ErrorMessage} from '@/middleware/middlewareErrorFind'
import { CvUser } from '../../../Model/UserModel'
import {  mongodb } from '../../../Features/mongodb'


const Login = MiddleWareError(async(req, res) => {
    if(req.method !== 'POST') return ErrorMessage(res, 403, 'Only POST method allowd!')
    const data = req.body;
    if( !data.email || !data.password) return ErrorMessage(res, 400, 'Please Fill up the feild!');
    console.log(data.email, data.password)
    await mongodb()
    let user ;
    try{
        user = await CvUser.findOne({email:data.email})
    }catch(err) {
        return res.status(400).json({success:false, message:err.message})
    }
    if(!user) return res.status(409).json({success:false, message:'Please Signup First!'})
    console.log(user);
    res.status(200).json({success:true, message:'Logged in Successfully'})
})

export default Login;
