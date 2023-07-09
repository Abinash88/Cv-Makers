import React from "react";

const LeftLayoutBlackbox = ({ Abinash }: { Abinash: any }) => {
  return (
    <div className="leftsideLayout w-[270px] ">
      <div className="imagebox w-full h-auto ">
        <img src={Abinash.src} className="text-white" alt="User Photo" />
      </div>

      <div className="education  ml-[40px] pl-5 border-b border-yellow-500 mt-[50px] flex flex-col items-start">
        <h3 className="text-white text-[20px] mb-3">Education</h3>
      </div>
    </div>
  );
};

export default LeftLayoutBlackbox;
