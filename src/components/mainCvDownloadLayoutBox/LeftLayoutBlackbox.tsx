import {
  DeviceTabletIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useSelector } from "react-redux";
import ContactItemComponent from "../smallComponentsPart/ContactItemComponent";

interface MyEducationProps {
  EducationForm: Form[];
  Abinash: any;
  downloadHeight: boolean;
}

const LeftLayoutBlackbox: React.FC<MyEducationProps> = ({
  Abinash,
  EducationForm,
  downloadHeight,
}) => {
  const { phone, email, city, address } = useSelector(
    (state: any) => state.About
  );
  const { image } = useSelector((state: any) => state.About);
  const ChangToHtmlText = (newHtml: string) => {
    return [
      <div
        key="formattedText"
        dangerouslySetInnerHTML={{ __html: newHtml }}
      ></div>,
    ];
  };

  return (
    <div
      id="leftblackbox"
      className={` leftsideLayout h-full ${
        downloadHeight ? "100%" : "w-[270px]"
      }  overflow-clip`}
    >
     {image ? <div className="imagebox relative w-full h-[200px]  flex items-center justify-center">
        <div className="w-[180px] h-[180px] flex items-center justify-center rounded-full overflow-hidden">
          <img
            src={image && image}
            className="text-white h-auto w-[180px] rounded-full"
            alt="User Photo"
          />
        </div>
      </div> : null}
      <div className="h-auto">
        {phone || email || city || address ? (
          <div className="education  ml-[20px] pl-5 mt-[50px] flex flex-col items-start">
            <h3 className="text-white  font-bold border-b w-full  border-yellow-500  text-[20px] mb-3 pb-2">
              Contact
            </h3>

            {phone ? (
              <div className="mb-2 flex items-center space-x-2">
                <DeviceTabletIcon className="h-7 text-black bg-yellow-500 p-[5px] rounded-full " />
                <span className="text-white break-words w-[180px] h-auto  break-all text-[14px]">
                  {phone}{" "}
                </span>
              </div>
            ) : null}

            {email ? (
              <div className="mb-2 flex items-center overflow-clip space-x-2">
                <EnvelopeIcon className="h-7 text-black bg-yellow-500 p-[5px] rounded-full " />
                <span className="text-white break-words w-[180px] h-auto  break-all text-[14px]">
                  {email}{" "}
                </span>
              </div>
            ) : null}

            {address ? (
              <div className="mb-2 flex items-center space-x-2">
                <MapPinIcon className="h-7 text-black bg-yellow-500 p-[5px] rounded-full " />
                <span className="text-white break-words w-[180px] h-auto  break-all text-[14px]">
                  {address}{" "}
                </span>
              </div>
            ) : null}
          </div>
        ) : null}
        { EducationForm[0]?.degree !== '' || EducationForm[0]?.school !== '' || EducationForm[0]?.city !== '' || EducationForm[0]?.startdate !== '' || EducationForm[0]?.summery.length > 12  ?
          <div className="education  ml-[20px] pl-5  mt-[50px] flex flex-col items-start">
            <h3 className="text-white  font-bold border-b w-full  border-yellow-500  text-[20px] mb-3 pb-2">
              Education
            </h3>
            <div className="">
              {EducationForm?.map((item: any, index: number) => {
                return (
                  <div key={index} className="text-white mb-4">
                    <h6 className="text-[16px]">{item?.degree}</h6>
                    <div className="">
                      <p className="text-[14px] inline">
                        {item?.school} {item?.school && "/"}
                        {item?.city} {item?.city && "/"}
                        {item?.startdate} {item?.startdate && "-"}
                        {item?.graduatedate}
                      </p>
                    </div>
                    <p className="my-2 text-[15px]">
                      {ChangToHtmlText(item?.summery)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div> : null
        }
      </div>
    </div>
  );
};

export default LeftLayoutBlackbox;
