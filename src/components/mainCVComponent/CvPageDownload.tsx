'use client'

import React, { useRef } from 'react'
import Abinash from '../../../public/abinash.jpg'
import html2pdf from 'html2pdf.js';
import LeftLayoutBlackbox from '@/components/mainCvDownloadLayoutBox/LeftLayoutBlackbox'
import RightLayoutWhitebox from '../mainCvDownloadLayoutBox/RightLayoutWhitebox';

const CvPageDownload = () => {

  const page = useRef<HTMLDivElement>();
  const ChangeToPdf = () => {
    const mypage = page.current;
    console.log(mypage);

    html2pdf().from(mypage).save('my_pdf.pdf')
    
  }
  return (
    <div className='flex-1 h-full p-2'>
      <div className="flex w-[100%] mb-3 justify-between items-center">
        <div className="w-[30%]">
        <select className='form-control '>
          <option>Proffesional CV</option>
          <option>Proffesional 2 CV</option>
          <option>Proffesional 3 CV</option>
        </select>
        </div>
        <div className="w-[50%] flex justify-end">
          <span onClick={ChangeToPdf} className='cursor-pointer text-green-600 bg-gray-100 px-4 py-2 '>Download Your Resume</span>
        </div>
      </div>

      <div className="overflow-auto mainCvLayout h-full">
        <div ref={page as any} className="h-[150vh] flex justify-between overflow-auto w-full p- bg-white rounded-md">
            <LeftLayoutBlackbox Abinash={Abinash}/>

            <RightLayoutWhitebox />
        </div>
      </div>
    </div>
  )
}

export default CvPageDownload