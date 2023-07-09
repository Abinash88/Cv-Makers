'use client'

import React from 'react'
import {UserIcon, AcademicCapIcon, BriefcaseIcon, RocketLaunchIcon, LightBulbIcon, TrophyIcon, WindowIcon, GiftIcon, LanguageIcon, UserPlusIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const CvPageContent = () => {
  return (
    <div className=' h-full w-[200px] overflow-auto leftbox'>
      <div className="h-[140vh]   w-full flex-col  flex items-center p-3 justify-center">
        <button className='btn '> <UserIcon className='h-8 icons text-gray-500'/> <span>About</span> </button>
        <button className='btn '> <AcademicCapIcon className='h-8 icons text-gray-500'/> <span>Education</span></button>
        <button className='btn '><BriefcaseIcon  className='h-8 icons text-gray-500'/> <span>Experience</span></button>
        <button className='btn '> <RocketLaunchIcon  className='h-8 icons text-gray-500'/> <span>Projects</span></button>
        <button className='btn '> <LightBulbIcon  className='h-8 icons text-gray-500'/> <span>Skills</span></button>
        <button className='btn '> <TrophyIcon  className='h-8 icons text-gray-500'/> <span>Achivements</span></button>
        <button className='btn '> <WindowIcon  className='h-8 icons text-gray-500'/> <span>Tranning</span></button>
        <button className='btn '> <GiftIcon  className='h-8 icons text-gray-500'/> <span>Awards</span></button>
        <button className='btn '><LanguageIcon  className='h-8 icons text-gray-500'/> <span>Language</span></button>
        <button className='btn '><UserPlusIcon  className='h-8 icons text-gray-500'/> <span>Refrence</span></button>
      </div>
    </div>
  )
}

export default CvPageContent