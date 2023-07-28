"use client";

import React, { useEffect, useRef, useState } from "react";
import html2pdf from 'html2pdf.js'
import LeftLayoutBlackbox from "@/components/mainCvDownloadLayoutBox/LeftLayoutBlackbox";
import RightLayoutWhitebox from "../mainCvDownloadLayoutBox/RightLayoutWhitebox";
import dynamic from "next/dynamic";
// const html2pdf = dynamic(() => import('html2pdf.js')) 

const CvPageDownload = ({
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
  GetCvStyle,
}) => {
  const [CvHeightAuto, setCvHeightAuto] = useState(false);
  const page = useRef();
  console.log(typeof window)
  const ChangeToPdf = async () => {
    
    try {
      if (typeof window !== 'undefined') {
        html2pdf().from(page.current).save();
      }
    } catch (err) {
      console.log(err.message)
    }
  };




  return (
    <div className="flex-1  h-full p-2">
      <div className="flex w-[100%] md:static absolute left-0  top-[25px] md:bg-transparent  z-20  mb-3 justify-between items-center">
        <div className="w-[30%]">
          <select onChange={(e) => setGetCvStle(e.target.value)} className="form-control ">
            <option>Proffesional CV</option>
            <option>Proffesional 2 CV</option>
          </select>
        </div>
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
          ref={page}
          className={`${CvHeightAuto ? "h-auto" : `h-[170vh]`
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
