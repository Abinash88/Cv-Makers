'use client'

import React ,{FormEvent, useState} from 'react'
import { toast } from 'react-hot-toast'
import Loading from '@/app/Loading/page'
import {useRouter} from 'next/navigation'

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const SubmitLoginData = async() => {
    setloading(true);
    try{
      const res = await fetch('http://localhost:3000/api/auth/Login', {
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          email,
          password,
        })
      })

      const data =await res.json()
      if(!data.success) return toast.error(data.message);
      router.push('/CreateCV')
      toast.success(data.message);
      setloading(false);
    }catch(err) {
      console.log(err.message);
      setloading(false);
    }
  }
console.log(loading)
  return (
    <div style={{height:'calc(100vh - 70px)'}} className='bg-gray-100 w-full '>
      <div className="px-[50px] flex justify-center items-center h-full w-full lg:w-[80%] m-auto">
        <div className="left flex-col justify-start pt-[100px] hidden lg:flex w-[50%] h-full ">
            <h1 className='text-[50px] font-bold text-gray-600 '>Cv Maker</h1>
            <p className='mt-3'>Cv app for your easy cv Creating purpose</p>
        </div>
        <div className="right lg:w-[50%] w-[100%] flex items-center justify-center bg-white h-auto py-4">
          <form  className='w-[80%] h-[90%] ' action="">
              <div className="w-full h-[50px]">
                <h2 className='text-center text-gray-900 font-semibold'>Login</h2>
              </div>
              <div className="w-full mt-10  mb-4 ">
                <label htmlFor="email" className='text-gray-600 text-[17px]'>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 mt-1 rounded-md px-4 bg-blue-50 text-[17px] h-[50px] py-2 w-full' placeholder='User Email' />
              </div>
              <div className="w-full  mb-4 ">
                <label htmlFor="email" className='text-gray-600 text-[17px]'>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 mt-1 rounded-md px-4 bg-blue-50 py-2 text-[17px] h-[50px] h- w-full' placeholder='Password' />
              </div>
              <a onClick={SubmitLoginData} className='mx-auto px-5 py-3 block mt-4 bg-green-600 cursor-pointer text-center hover:bg-green-700 text-white rounded-lg ' > 
               { loading ?
                <Loading/>
                :
                <span className=''>Submit</span>
                }
              </a> <br/>
              <div className="w-full text-center">
                <p>or</p>
                <a href="/Signup">Signup</a>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage