
import React from "react";
import { useSelector } from "react-redux";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaTwitter,
  FaLink,
  FaMobile,
  FaEnvelope,
  FaMapMarked,
} from "react-icons/fa";


const LeftLayoutBlackbox = ({
  EducationForm,
  SocialMedia,
  References,
  LanguageForm,
  SkillFormData,
  CvHeightAuto,
  GetCvStyle,
}) => {
  const { phone, email, city, address } = useSelector(
    (state) => state.About
  );
  const { image } = useSelector((state) => state.About);
  const ChangToHtmlText = (newHtml) => {
    return [
      <div
        key="formattedText"
        dangerouslySetInnerHTML={{ __html: newHtml }}
      ></div>,
    ];
  };

  const CheckIcon = (name) => {
    switch (name) {
      case "Facebook":
        return <FaFacebook className="text-[18px]" />;
      case "Linkdin":
        return <FaLinkedinIn className="text-[18px]" />;
      case "Instagram":
        return <FaInstagram className="text-[18px]" />;
      case "Youtube":
        return <FaYoutube className="text-[18px]" />;
      case "Github":
        return <FaGithub className="text-[18px]" />;
      case "Twitter":
        return <FaTwitter className="text-[18px]" />;
      case "Website":
        return <FaLink className="text-[18px]" />;
    }
  };

  return (
    <div
      id="leftblackbox"
      className={`${GetCvStyle === 'Proffesional 2 CV'? 'bg-slate-100': 'leftsideLayout '}  border-gray-400 relative  ${CvHeightAuto ? "h-auto" : "h-full"}  px-2 w-[300px] overflow-clip`}
    >
      {image ? (
        <div className="imagebox  w-full h-[200px] mt-4 flex items-center justify-center">
          <div className="w-[180px]  h-[180px] bg-red-100 flex items-center rounded-full justify-center overflow-hidden">
            <img
              src={image && image}
              className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'} h-full w-full `}
              alt="User Photo"
            />
          </div>
        </div>
      ) : null}
      {phone || email || city || address || SocialMedia.length > 0 ? (
        <div className="h-auto">
          <div className="education  ml-[20px] pl-5 mt-[50px] flex flex-col items-start">
            <h3 className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'}  font-bold border-b w-full  ${GetCvStyle === 'Proffesional 2 CV'? 'border-slate-600': 'border-yellow-500'}  text-[20px] mb-3 pb-2`}>
              Contact
            </h3>

            {phone ? (
              <div className="mb-2 flex items-center space-x-2">
                <FaMobile className="text-[28px]  text-black bg-yellow-500 p-[5px] rounded-full " />
                <span className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'} break-words w-[180px] h-auto  break-all text-[14px]`}>
                  {phone}{" "}
                </span>
              </div>
            ) : null}

            {email ? (
              <div className="mb-2 flex items-center overflow-clip space-x-2">
                <FaEnvelope className="text-[28px] text-black bg-yellow-500 p-[5px] rounded-full " />
                <span className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'} break-words w-[180px] h-auto  break-all text-[14px]`}>
                  {email}{" "}
                </span>
              </div>
            ) : null}

            {address ? (
              <div className="mb-2 flex items-center space-x-2">
                <FaMapMarked className="text-[28px] text-black bg-yellow-500 p-[5px] rounded-full " />
                <span className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'} break-words w-[180px] h-auto  break-all text-[14px]`}>
                  {address}{" "}
                </span>
              </div>
            ) : null}
          </div>

          <div className="education  ml-[20px] pl-5 pr-3 mt-[0px] flex flex-col items-start">
            {SocialMedia?.map((item, index) => {
              return (
                <div className="flex space-x-2 items-center ">
                  <div
                    className="text-black p-1 mb-[7px]  rounded-full bg-yellow-500"
                    key={index}
                  >
                    {CheckIcon(item?.linkname)}
                  </div>
                  <a
                    className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'} pr-2 break-all text-[15px]`}
                    href={`https://${item.links}`}
                  >
                    {item?.links}
                  </a>
                </div>
              );
            })}
          </div>

          {EducationForm[0]?.degree !== "" ||
          EducationForm[0]?.school !== "" ||
          EducationForm[0]?.city !== "" ||
          EducationForm[0]?.startdate !== "" ||
          EducationForm[0]?.summery.length > 12 ? (
            <div className="education  ml-[20px] pl-5  mt-[50px] flex flex-col items-start">
              <h3 className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'}  font-bold border-b-2 w-full  ${GetCvStyle === 'Proffesional 2 CV'? 'border-slate-600': 'border-yellow-500'}  text-[20px] mb-3 pb-2`}>
                Education
              </h3>
              <div className="">
                {EducationForm?.map((item, index) => {
                  return (
                    <div key={index} className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'} mb-4`}>
                      <h6 className="text-[16px]">{item?.degree}</h6>
                      <div className="">
                        <p className="text-[14px] inline">
                          {item?.school} {item?.school && "/"}
                          {item?.city} {item?.city && "/"}
                          {item?.startdate} {item?.startdate && " - "}
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
            </div>
          ) : null}
        </div>
      ) : null}
      {/* Language section start here  */}
      {LanguageForm[0]?.Langtype !== "" || LanguageForm[0]?.LangLevel ? (
        <div className=" ml-[20px] pl-5 mt-[50px] flex flex-col items-start">
          <>
            <h2 className={` ${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'}  font-bold border-b-2 w-full  ${GetCvStyle === 'Proffesional 2 CV'? 'border-slate-600': 'border-yellow-500'}  text-[20px] mb-3 pb-2`}>
              Language
            </h2>
            {LanguageForm?.map((item, index) => {
              return (
                <>
                  <li className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'}`} key={index}>
                    {`${item?.Langtype} - `} {item?.LangLevel}
                  </li>
                </>
              );
            })}
          </>
        </div>
      ) : null}

      {/* Skills section start here  */}
      {SkillFormData[0]?.Skilltype !== "" || SkillFormData[0]?.skillLevel ? (
        <div className=" ml-[20px] pl-5 mt-[20px] mb-[10px] flex flex-col items-start">
          (
          <>
            <h2 className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'} font-semibold border-b-2 w-full  ${GetCvStyle === 'Proffesional 2 CV'? 'border-slate-600': 'border-yellow-500'}  text-[20px] mb-3 pb-2`}>
              Skills
            </h2>
            <div className="">
              {SkillFormData?.map((item, index) => {
                return (
                  <>
                    <div className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'}`} key={index}>
                      {`${item?.Skilltype} - `} {item?.skillLevel}
                    </div>
                  </>
                );
              })}
            </div>
          </>
        </div>
      ) : null}

      {References[0]?.firstname !== "" ||
      References[0]?.lastname !== "" ||
      References[0]?.designation !== "" ||
      References[0]?.phone !== undefined ||
      References[0]?.email ? (
        <div className="  ml-[20px] pl-5  mt-[30px] flex flex-col items-start">
          <h3 className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'}  font-semibold border-b-2 w-full  ${GetCvStyle === 'Proffesional 2 CV'? 'border-slate-600': 'border-yellow-500'}  text-[20px] mb-3 pb-2`}>
            References
          </h3>
          <div className="">
            {References?.map((item, index) => {
              return (
                <div key={index} className={`${GetCvStyle === 'Proffesional 2 CV'? 'text-black': 'text-white'} mb-[20px]  text-base `}>
                  <h6 className="text-[16px] font-semibold">
                    {item?.firstname}
                    {` ${item?.lastname}`}
                  </h6>
                  <div className="">
                    <p className="text-[13px]  inline">
                      {item?.designation} {item?.designation && " / "}
                      {item?.phone}
                      <br></br>
                      {item?.email}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LeftLayoutBlackbox;
