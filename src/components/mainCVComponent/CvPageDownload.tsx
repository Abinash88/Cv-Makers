"use client";

import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
// import html2pdf from "html2pdf.js";
import  html2pdf   from 'html2pdf.js'
import LeftLayoutBlackbox from "@/components/mainCvDownloadLayoutBox/LeftLayoutBlackbox";
import RightLayoutWhitebox from "../mainCvDownloadLayoutBox/RightLayoutWhitebox";

interface MyEducationProps {
  EducationForm: Form[];
  ExperienceForm: ExpForm[];
  ProjectForm: PorjForm[];
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

  mainformdiv?.addEventListener('keydown', function(e) {
    if (downloadpage?.scrollHeight > downloadpage?.clientHeight || rightwhitepage?.scrollHeight > rightwhitepage?.clientHeight) {
      console.log("working");
      setCvHeightAuto(true);
    } else {
      console.log("Not working");
      setCvHeightAuto(false);
    }
    console.log(
      CvHeightAuto,
      downloadpage?.scrollHeight,
      downloadpage?.clientHeight,
      rightwhitepage?.scrollHeight,
      rightwhitepage?.clientHeight
    );
  })


  console.log(Height)

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
            CvHeightAuto ? "h-auto" : `h-[${Height}vh]`
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
