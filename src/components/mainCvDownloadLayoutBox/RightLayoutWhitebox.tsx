import React from "react";
import { useSelector } from "react-redux";
import RightSideContentMap from "../smallComponentsPart/RightSideContentMap";

interface MyEducationProps {
  ExperienceForm: ExpForm[];
  ProjectForm: ProjForm[];
  Achivement: AchivForm[];
  Award: AwardsForm[];
  Training: TrainForm[];
}

const RightLayoutWhitebox: React.FC<MyEducationProps> = ({
  ExperienceForm,
  ProjectForm,
  Achivement,
  Award,
  Training,
}) => {
  const { firstname, lastname, designation, summery } = useSelector(
    (state: any) => state.About
  );

  // const data:any = [ExperienceForm, ProjectForm, Achivement, Award, Training]

  function convertHtmlToPlainText(htmls: string) {
    return [
      <div key="formattedText" dangerouslySetInnerHTML={{ __html: htmls }} />,
    ];
  }

  const desc = convertHtmlToPlainText(summery);
  console.log(ExperienceForm);

  return (
    <div className="rightsideLayout h-full flex-1">
      <div className="mt-10 bg-yellow-400 space-y-1 flex flex-col items-start pl-10 justify-center h-[170px] w-full">
        <h1 className="myname">
          <b>{firstname}</b> <span className="font-light">{lastname}</span>
        </h1>
        <h5 className="tracking-wider text-gray-600">{designation}</h5>
      </div>
      <div className="mt-5 ml-[60px]">
        <div className=" h-[200px] aboutyou">
          {desc.length ? (
            <>
              <h5 className="text-[20px] tracking-wider border-b-2 pb-2 border-gray-300">
                About Me
              </h5>
              <p className="text-[15px] mt-3 h-full text-gray-600 leading-1 tracking-wide">
                {convertHtmlToPlainText(summery)}
              </p>
            </>
          ) : null}
        </div>
      </div>
      <div className="p-4">
        {
          <div className="education  ml-[20px] pl-5  mt-[50px] flex flex-col items-start">
            <h3 className="text-black  font-semibold border-b w-full  border-yellow-500  text-[25px] mb-3 pb-2">
              Experience
            </h3>
            <ul className="list-disc">
              {ExperienceForm?.map((item: any, index: number) => {
                return (
                    <li key={index} className="text-black text-base mb-4">
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
                      <p className="my-2 text-[15px] text-gray-700 font-semibold ">
                        {convertHtmlToPlainText(item?.summery)}
                      </p>
                    </li>
                );
              })}
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default RightLayoutWhitebox;
