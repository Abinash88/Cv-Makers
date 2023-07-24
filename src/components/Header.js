// import { FetchGetUser } from '@/ReduxSlices/GetUserSlice';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {

  const dispatch = useDispatch();
 

  return (
    <div className='w-screen flex justify-between px-5 items-center h-[70px]'>
        <div className="headerlogo">
            <Link className='logo text-[20px] md:text-[27px]' href={'/'}> <span>CV</span>-Maker</Link>
        </div>
        <div className='mr-0 md:mr-[96px]'>
          <h5 className='text-red-600  border-2 text-[16px] md:text-[22px] rounded-full p-2 ongointtag border-red-500'> On Going Porject </h5>
        </div>
        <div className="">
            <Link className='loginlinks' href={'/LoginPage'}>Login</Link>
        </div>
    </div>
  )
}

export default Header