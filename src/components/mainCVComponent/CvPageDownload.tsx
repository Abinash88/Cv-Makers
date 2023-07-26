"use client";

import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
// import html2pdf from "html2pdf.js";
import  html2pdf   from 'html2pdf.js'
import LeftLayoutBlackbox from "@/components/mainCvDownloadLayoutBox/LeftLayoutBlackbox";
import RightLayoutWhitebox from "../mainCvDownloadLayoutBox/RightLayoutWhitebox";
interface Form {
  isHoverd: Boolean;
  school: string;
  degree: string;
  city: string;
  graduatedate: string;
  startdate: string;
  summery: string;
}
interface ExpForm {
  isHoverd: Boolean;
  jobtitle: string;
  organization: string;
  location: string;
  startdate: string;
  enddate: string;
  summery: string;
}
interface AchivForm {
  isHoverd: Boolean;
  AchivTitle: string;
  summery: string;
}
interface AwardForm {
  isHoverd: Boolean;
  awardtitle: string;
  organization: string;
  location: string;
  receveddate: string;
  summery: string;
}
interface TrainForm {
  isHoverd: Boolean;
  certificatetitle: string;
  organization: string;
  completedate: string;
  summery: string;
}
interface ReferForm {
  isHoverd: Boolean;
  firstname: string;
  lastname: string;
  company: string;
  designation: string;
  phone: any;
  email: string;
}
interface SocialIcon {
  linkname:string;
  links:string;
}
interface language{
  isHoverd:boolean;
  Langtype:string;
  LangLevel:string;
  Skill:Skill[];
}

interface Skill{
  isChoose:boolean;
  level:string;
  getlevel:boolean;
}
interface SkillForm {
  isHoverd: Boolean;
  Skilltype:string;
  Skill: Array<any>;
  skillLevel:string;
}
interface ProjForm {
  isHoverd: Boolean;
  Projecttitle: string;
  projectlink: string;
  summery: string;
}


interface MyEducationProps {
  EducationForm: Form[];
  ExperienceForm: ExpForm[];
  ProjectForm: ProjForm[];
  Achivement: AchivForm[];
  Award: AwardForm[];
  Training: TrainForm[];
  SocialMedia: SocialIcon[];
  References: ReferForm[];
  InputSkillType: string;
  LanguageForm: language[];
  SkillFormData: SkillForm[];
  setGetCvStle:Dispatch<SetStateAction<string>>;
  GetCvStyle:string;
}

const CvPageDownload: React.FC<MyEducationProps> = ({
  EducationForm,
  ExperienceForm,
  ProjectForm,
  Achivement,
  Award,
  Training,
  SocialMedia,
  References,
  InputSkillType,
  LanguageForm,
  SkillFormData,
  setGetCvStle,
  GetCvStyle
}) => {
  const [CvHeightAuto, setCvHeightAuto] = useState<boolean>(false);
  const page = useRef<HTMLDivElement>();
  let [Height, setHeight] = useState<number>(150)
  const ChangeToPdf = () => {
    const mypage = page.current;

    html2pdf().from(mypage).save("my_pdf.pdf");
  };
  const downloadpage = document.getElementById("downloadpage");
  // const leftblackbox = document.getElementById("leftblackbox");
  const mainformdiv = document.getElementById("mainformdiv");
  const rightwhitepage = document.getElementById('rightwhitepage');




  return (
    <div className="flex-1  h-full p-2">
      <div className="flex w-[100%] md:static absolute left-0  top-[25px] md:bg-transparent  z-20  mb-3 justify-between items-center">
        <div className="w-[30%]">
          <select onChange={(e) => setGetCvStle(e.target.value)} className="form-control ">
            <option>Proffesional CV</option>
            <option>Proffesional 2 CV</option>
          </select>
        </div>
        {/* <div className="w-[50%] ml-3 flex items-center justify-around">
          <div onClick={() => setHeight(Height += 10)} className="text-gray-600 text-[16px] px-2 py-1 bg-gray-100 hover:bg-gray-100 cursor-pointer font-semibold"> Increase Height (+10)</div>
          <div  onClick={() => setHeight(Height -= 10)} className="text-gray-600 text-[16px] px-2 py-1 bg-gray-100 hover:bg-gray-200 cursor-pointer font-semibold"> Decrease Height (-10)</div>
        </div> */}
        <div className="w-[50%] flex justify-end">
          <span
            onClick={ChangeToPdf}
            className="cursor-pointer hover:bg-black transition-all duration-150 rounded-md hover:text-green-500 text-green-600 bg-gray-200 px-4 py-2 "
          >
            Download Your Resume
          </span>
        </div>
      </div>

      <div className="overflow-auto mainCvLayout  hidden  lg:flex h-full">
        <div
          id="downloadpage"
          ref={page as any}
          className={`${
            CvHeightAuto ? "h-auto" : `h-[170vh]`
          } relative  flex justify-between overflow-y-auto w-full pb-[70px]  rounded-md`}
        >
          <LeftLayoutBlackbox
            CvHeightAuto={CvHeightAuto}
            SkillFormData={SkillFormData}
            InputSkillType={InputSkillType}
            LanguageForm={LanguageForm}
            References={References}
            EducationForm={EducationForm}
            SocialMedia={SocialMedia}
            GetCvStyle={GetCvStyle}
          />

          <RightLayoutWhitebox
            {...{ ExperienceForm, ProjectForm, Achivement, Award, Training, GetCvStyle }}
          />
        </div>
      </div>
    </div>
  );
};

export default CvPageDownload;
