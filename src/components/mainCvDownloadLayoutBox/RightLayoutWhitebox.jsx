import React from "react";
import { useSelector } from "react-redux";



const RightLayoutWhitebox= ({
  ExperienceForm,
  ProjectForm,
  Achivement,
  Award,
  Training,
  GetCvStyle,
}) => {
  const { firstname, lastname, designation, summery } = useSelector(
    (state) => state.About
  );

  function convertHtmlToPlainText(htmls) {
    return [
      <div key="formattedText" dangerouslySetInnerHTML={{ __html: htmls }} />,
    ];
  }


  return (
    <div id="rightwhitepage" className={` rightsideLayout h-full flex-1 w-full`}>
      <div className={`mt-10 ${GetCvStyle === 'Proffesional 2 CV'? 'bg-slate-100':'bg-yellow-400'}  space-y-1 flex flex-col items-start pl-[60px] justify-center h-[170px] w-full`}>
        <h1 className="myname">
          <b>{firstname}</b> <span className="font-light">{lastname}</span>
        </h1>
        <h5 className="tracking-wider text-gray-600">{designation}</h5>
      </div>
      {<div className="mt-5 ml-[60px]">
        <div className={`h-auto  aboutyou`}>
          {summery !== '<p><br></p>' && summery !== '' && summery !== null ? (
            <>
              <h5 className="text-[20px] tracking-wider border-b-2-2 pb-2 border-gray-300">
                About Me
              </h5>
              <p className="text-[15px] mt-3  h-full text-gray-600 leading-1 tracking-wide">
                {convertHtmlToPlainText(summery)}
              </p>
            </>
          ) : null}
        </div>
      </div>}
      <div className="px-3">
        { ExperienceForm[0].jobtitle !== '' || ExperienceForm[0].enddate !== '' || ExperienceForm[0].location !== '' || ExperienceForm[0].organization !== '' || ExperienceForm[0].startdate !== '' || ExperienceForm[0].summery.length > 12 ?
          <div className="education  ml-[20px] pl-5  mt-[20px] flex flex-col items-start">
            <h3 className="text-black  font-semibold border-b-2 w-full  border-yellow-500  text-[25px] mb-3 pb-2">
              Experience
            </h3>
            <ul className="list-disc">
              {ExperienceForm?.map((item, index) => {
                return (
                  <li key={index} className="text-black text-base ">
                    <h6 className="text-[17px] font-semibold">
                      {item?.jobtitle}
                    </h6>
                    <div className="">
                      <p className="text-[15px] font-semibold inline">
                        {item?.organization} {item?.organization && " / "}
                        {item?.location} {item?.location && " / "}
                        <br></br>
                        {item?.startdate} {item?.startdate && " - "}
                        {item?.enddate}
                      </p>
                    </div>
                    <p className="mt-2 text-[15px] text-gray-800  ">
                      {convertHtmlToPlainText(item?.summery)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div> : null
        }
      </div>

      <div className="px-3">
        {ProjectForm[0].Projecttitle !== '' || ProjectForm[0].projectlink !== '' || ProjectForm[0].summery.length > 12 ? 
          <div className="education  ml-[20px] pl-5  mt-[20px] flex flex-col items-start">
            <h3 className="text-black  font-semibold border-b-2 w-full  border-yellow-500  text-[25px] mb-3 pb-2">
              Project
            </h3>
            <ul className="list-disc">
              {ProjectForm?.map((item, index) => {
                return (
                  <li key={index} className="text-black text-base ">
                    <h6 className="text-[17px] font-semibold">
                      {item?.Projecttitle}
                    </h6>
                    <p className="my-2 text-[15px] text-gray-800  ">
                      {convertHtmlToPlainText(item?.summery)}
                    </p>
                    <a
                      href={`http://${item?.projectlink}`}
                      className=" underline cursor-pointer"
                    >
                      {item?.projectlink}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div> :null
        }
      </div>

      <div className="px-3">
        {Achivement[0].AchivTitle !== "" ||
        Achivement[0].summery.length > 12 ? (
          <div className="education  ml-[20px] pl-5  mt-[20px] flex flex-col items-start">
            <h3 className="text-black  font-semibold border-b-2 w-full  border-yellow-500  text-[25px] mb-3 pb-2">
              Achivements
            </h3>
            <ul className="list-disc">
              {Achivement?.map((item, index) => {
                return (
                  <li key={index} className="text-black text-base ">
                    <h6 className="text-[17px] font-semibold">
                      {item?.AchivTitle}
                    </h6>
                    <p className="my-2 text-[15px] text-gray-800  ">
                      {convertHtmlToPlainText(item?.summery)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="px-3">
        {Award[0]?.awardtitle !== "" ||
        Award[0]?.summery.length > 12 ||
        Award[0]?.location !== "" ||
        Award[0]?.organization !== "" ||
        Award[0]?.receveddate !== "" ? (
          <div className="education  ml-[20px] pl-5  mt-[20px] flex flex-col items-start">
            <h3 className="text-black  font-semibold border-b-2 w-full  border-yellow-500  text-[25px] mb-3 pb-2">
              Awards
            </h3>
            <ul className="list-disc">
              {Award?.map((item, index) => {
                return (
                  <li key={index} className="text-black text-base ">
                    <h6 className="text-[17px] font-semibold">
                      {item?.awardtitle}
                    </h6>
                    <div className="">
                      <p className="text-[15px] font-semibold inline">
                        {item?.organization} {item?.organization && " / "}
                        {item?.location} {item?.location && " / "}
                        <br></br>
                        {item?.receveddate}
                      </p>
                    </div>
                    <p className="my-2 text-[15px] text-gray-800  ">
                      {convertHtmlToPlainText(item?.summery)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>

        <div className="px-3">
        { Training[0]?.certificatetitle !== '' || Training[0]?.organization !== '' || Training[0]?.completedate !== '' || Training[0]?.summery.length > 12 ?
          <div className="education  ml-[20px] pl-5  mt-[20px] flex flex-col items-start">
            <h3 className="text-black  font-semibold border-b-2 w-full  border-yellow-500  text-[25px] mb-3 pb-2">
            Training
            </h3>
            <ul className="list-disc">
              {Training?.map((item, index) => {
                return (
                  <li key={index} className="text-black text-base ">
                    <h6 className="text-[17px] font-semibold">
                      {item?.certificatetitle}
                    </h6>
                    <div className="">
                      <p className="text-[15px] font-semibold inline">
                        {item?.organization} {item?.organization && " / "}
                        {item?.completedate} 
                        </p>
                    </div>
                    <p className="my-2 text-[15px] text-gray-800  ">
                      {convertHtmlToPlainText(item?.summery)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div> : null
        }
      </div>
    </div>
  );
};

export default RightLayoutWhitebox;
