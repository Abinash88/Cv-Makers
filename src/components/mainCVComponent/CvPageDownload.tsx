"use client";

import React, { useEffect, useRef, useState } from "react";
import Abinash from "../../../public/abinash.jpg";
import html2pdf from "html2pdf.js";
import LeftLayoutBlackbox from "@/components/mainCvDownloadLayoutBox/LeftLayoutBlackbox";
import RightLayoutWhitebox from "../mainCvDownloadLayoutBox/RightLayoutWhitebox";

interface MyEducationProps {
  EducationForm: Form[];
  ExperienceForm: ExpForm[];
  ProjectForm: PorjForm[];
  Achivement: AchivForm[];
  Award: AwardForm[];
  Training: TrainForm[];
}

const CvPageDownload: React.FC<MyEducationProps> = ({
  EducationForm,
  ExperienceForm,
  ProjectForm,
  Achivement,
  Award,
  Training,
}) => {
  const [CvHeightAuto, setCvHeightAuto] = useState<boolean>(false);
  const [downloadHeight, setDownloadHeight] = useState<boolean>(false);
  const outerdiv = useRef(null);
  const page = useRef<HTMLDivElement>();
  const ChangeToPdf = () => {
    const mypage = page.current;
    console.log(mypage);

    html2pdf().from(mypage).save("my_pdf.pdf");
  };
  const downloadpage = document.getElementById("downloadpage");

  useEffect(() => {
    const CheckOverFlow = () => {
      if (downloadpage?.scrollHeight ?? 0 > downloadpage?.clientHeight ?? 0) {
        setCvHeightAuto(true);
      } else {
        setCvHeightAuto(false);
      }
    };
    CheckOverFlow();
  }, []);

  useEffect(() => {
    const leftblackbox = document.getElementById("leftblackbox");
    const checkHeight = () => {
      if(leftblackbox && downloadpage) {
        if (downloadpage?.scrollHeight ?? 0 > downloadpage?.clientHeight ?? 0) {
          setDownloadHeight(true);
        } else {
          setDownloadHeight(false);
        }
      }
    };
    checkHeight();
  }, []);

  return (
    <div className="flex-1 h-full p-2">
      <div className="flex w-[100%] mb-3 justify-between items-center">
        <div className="w-[30%]">
          <select className="form-control ">
            <option>Proffesional CV</option>
            <option>Proffesional 2 CV</option>
            <option>Proffesional 3 CV</option>
          </select>
        </div>
        <div className="w-[50%] flex justify-end">
          <span
            onClick={ChangeToPdf}
            className="cursor-pointer text-green-600 bg-gray-100 px-4 py-2 "
          >
            Download Your Resume
          </span>
        </div>
      </div>

      <div className="overflow-auto mainCvLayout h-full">
        <div
          id="downloadpage"
          ref={page as any}
          className={`${
            CvHeightAuto ? "h-auto" : "h-[150vh]"
          } relative  flex justify-between overflow-auto w-full pb-[70px] bg-white rounded-md`}
        >
          <LeftLayoutBlackbox Abinash={Abinash} EducationForm={EducationForm} downloadHeight={downloadHeight}/>

          <RightLayoutWhitebox
            {...{ ExperienceForm, ProjectForm, Achivement, Award, Training }}
          />
        </div>
      </div>
    </div>
  );
};

export default CvPageDownload;
