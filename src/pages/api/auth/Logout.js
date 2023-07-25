import {MiddleWareError, ErrorMessage} from '@/middleware/middlewareErrorFind'
import {  CookieSetter, mongodb } from '../../../Features/mongodb'


const Login = MiddleWareError(async(req, res) => {
    if(req.method !== 'GET') return ErrorMessage(res, 403, 'Only POST method allowd!')
    await mongodb()

        await CookieSetter(res, null, false);
    res.status(200).json({success:true, message:'Logout Successfully'})
})

export default Login;