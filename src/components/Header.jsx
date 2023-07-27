import { FetchGetUser } from '@/ReduxSlices/GetUserSlice';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
 const {users} = useSelector((state) => state.users)
 const dispatch = useDispatch();
 const [openLogout, setOpenLogout] = useState(true);
  const router = useRouter();
 useEffect(() => {
  dispatch(FetchGetUser());
  if(!users._id) {
    
  }
 },[])

 const ToggleLogout = () => {
  setOpenLogout(!openLogout)
 }

 const LogoutBox = async() => {
  try {
    const res = await fetch("/api/auth/Logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (!data.success) return toast.error(data.message);
    toast.success(data.message);
    router.push('/LoginPage')
    dispatch(FetchGetUser());
  } catch (err) {
    console.log(err.message);
  }
 }

  return (
    <div className='w-screen flex justify-between px-5 items-center h-[70px]'>
        <div className="headerlogo">
            <Link className='logo text-[20px] md:text-[27px]' href={'/'}> <span>CV</span>-Maker</Link>
        </div>
        <div className='mr-0 md:mr-[96px]'>
          <h5 className='text-red-600  border-2 text-[16px] md:text-[22px] rounded-full p-2 ongointtag border-red-500'> On Going Porject </h5>
        </div>
        <div className="">
           { users?.name ? 
           <>
            <div onClick={ToggleLogout} className='cursor-pointer  font-semibold text-[17px] text-gray-500'>{users?.name}</div>
            <div className={` ${openLogout ? 'hidden':''} w-[120px] cursor-pointer z-50 flex items-center justify-center h-[100px] bg-gray-100 shadow-lg border right-[35px] rounded-lg top-[50px] absolute  `}> 
                <button onClick={LogoutBox} className='block text-black font-semibold w-full  bg-gray-200 py-1 cursor-pointer hover:bg-gray-300 text-center' >Logout</button>
            </div>
           </>

           :
            <Link className='loginlinks' href={'/LoginPage'}> Login </Link>

           }
        </div>
    </div>
  )
}

export default Header