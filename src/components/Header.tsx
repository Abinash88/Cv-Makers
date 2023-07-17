import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-screen flex justify-between px-5 items-center h-[70px]'>
        <div className="headerlogo">
            <Link className='logo' href={'/'}> <span>Cv</span>-Maker</Link>
        </div>
        <div className=''>
          <h5 className='text-red-600  border-2 rounded-full p-2 border-red-500'> On Going Porject </h5>
        </div>
        <div className="">
            <Link className='loginlinks' href={'/Login'}>Login</Link>
        </div>
    </div>
  )
}

export default Header