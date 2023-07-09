import React from 'react'

const RightLayoutWhitebox = () => {
  return (
    <div className="rightsideLayout h-full flex-1">
        <div className="mt-10 bg-yellow-400 space-y-1 flex flex-col items-start pl-10 justify-center h-[170px] w-full">
            <h1 className='myname'><b>Rajesh</b> <span className='font-light'>Gautam</span></h1>
            <h5 className='tracking-wider text-gray-600'>Software Developer</h5>
        </div>
        <div className="mt-5 ml-[60px]">
            <div className="aboutyou">
                <h5 className='text-[20px] tracking-wider border-b-2 pb-2 border-gray-300'>About Me</h5>
                <p className='text-[15px] mt-3 text-gray-600  tracking-wide'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae minima qui exercitationem assumenda obcaecati tenetur nostrum! Sint architecto temporibus maiores consequatur, inventore rem neque quo porro, amet ipsa, fugiat quia.</p>
            </div>
        </div>
    </div>
  )
}

export default RightLayoutWhitebox