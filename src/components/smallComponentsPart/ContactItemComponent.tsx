import { DeviceTabletIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

const ContactItemComponent:React.FC<{item:string}> = ({item}) => {
  return (
    <div className="mb-3 flex items-center space-x-3">
      <DeviceTabletIcon className="h-9 text-black bg-yellow-500 p-[5px] rounded-full " />
      <span className="text-white">{item} </span>
    </div>
  );
};

export default ContactItemComponent;
