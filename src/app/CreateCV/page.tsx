import React from 'react';
import CvPageDownload from '../../components/mainCVComponent/CvPageDownload'
import CvPageContentLeft from '../../components/mainCVComponent/CvPageContentLeft'
import CvPageContentRight from '../../components/mainCVComponent/CvPageContentRight'

const CreateCv = () => {
  return (
    <div style={{height:'calc(100vh - 70px)'}} className='bg-gray-50 w-screen flex justify-between'>
      <div className="flex justify-between relative h-full w-[98%] m-auto items-start overflow-hidden">
        <CvPageContentLeft/>
        <CvPageDownload/>
        <CvPageContentRight/>
      </div>
    </div>
  )
}

export default CreateCv;


