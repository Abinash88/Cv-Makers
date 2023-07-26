"use client";

import React, { useState, useEffect } from "react";
import CvPageDownload from "../../components/mainCVComponent/CvPageDownload";
import CvPageContentLeft from "../../components/mainCVComponent/CvPageContentLeft";
import CvPageContentRight from "../../components/mainCVComponent/CvPageContentRight";
import { FetchGetUser } from "@/ReduxSlices/GetUserSlice";
import { useAppDispatch, useAppSelector } from "@/ReduxSlices/hook";
import { useRouter } from "next/navigation";

const CreateCv: React.FC = () => {


 const dispatch = useAppDispatch();
 const router = useRouter()
 const {users} = useAppSelector((state:any) => state.users)

 useEffect(() => {
  dispatch(FetchGetUser());
 },[])



  // Education form Data start here
  interface Form {
    isHoverd: Boolean;
    school: string;
    degree: string;
    city: string;
    graduatedate: string;
    startdate: string;
    summery: string;
  }
  const [EducationForm, setEducationForm] = useState<Form[]>([
    {
      isHoverd: false,
      school: "",
      degree: "",
      city: "",
      graduatedate: "",
      startdate: "",
      summery: "",
    },
  ]);
  // Education form Data end here

  // Experience form Data start here
  interface ExpForm {
    isHoverd: Boolean;
    jobtitle: string;
    organization: string;
    location: string;
    startdate: string;
    enddate: string;
    summery: string;
  }
  const [ExperienceForm, setExperienceForm] = useState<ExpForm[]>([
    {
      isHoverd: false,
      jobtitle: "",
      organization: "",
      location: "",
      startdate: "",
      enddate: "",
      summery: "",
    },
  ]);
  // Experience form Data end here

  // Project form Data start here
  interface ProjForm {
    isHoverd: Boolean;
    Projecttitle: string;
    projectlink: string;
    summery: string;
  }
  const [ProjectForm, setProjectForm] = useState<ProjForm[]>([
    {
      isHoverd: false,
      Projecttitle: "",
      projectlink: "",
      summery: "",
    },
  ]);
  // Project form Data end here

  // Achivment form Data start here
  interface AchivForm {
    isHoverd: Boolean;
    AchivTitle: string;
    summery: string;
  }
  const [Achivement, setAchivement] = useState<AchivForm[]>([
    {
      isHoverd: false,
      AchivTitle: "",
      summery: "",
    },
  ]);
  // Achivment form Data end here

  // Award form Data start here
  interface AwardForm {
    isHoverd: Boolean;
    awardtitle: string;
    organization: string;
    location: string;
    receveddate: string;
    summery: string;
  }
  const [Award, setAward] = useState<AwardForm[]>([
    {
      isHoverd: false,
      awardtitle: "",
      organization: "",
      location: "",
      receveddate: "",
      summery: "",
    },
  ]);
  // Award form Data end here

  // Training form Data start here
  interface TrainForm {
    isHoverd: Boolean;
    certificatetitle: string;
    organization: string;
    completedate: string;
    summery: string;
  }
  const [Training, setTraining] = useState<TrainForm[]>([
    {
      isHoverd: false,
      certificatetitle: "",
      organization: "",
      completedate: "",
      summery: "",
    },
  ]);
  // Training form Data end here

  // References form Data start here
  interface ReferForm {
    isHoverd: Boolean;
    firstname: string;
    lastname: string;
    company: string;
    designation: string;
    phone: any;
    email: string;
  }
  const [References, setReferences] = useState<ReferForm[]>([
    {
      isHoverd: false,
      firstname: "",
      lastname: "",
      company: "",
      designation: "",
      phone: undefined,
      email: "",
    },
  ]);
  // References form Data end here

  interface SocialIcon {
    linkname:string;
    links:string;
  }

  // const social media links start here 
  const [SocialMedia, setSocialMedia] = useState<SocialIcon[]>([
  ]);
  // const social media links end here 

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
 
  // language skill choose 
  const [LanguageForm, setLanguageForm] = useState<language[]>([
    {
      Langtype: "",
      LangLevel: "",
      isHoverd: false,
      Skill: [
        {  isChoose: false, getlevel:false, level: "noob" },
        {  isChoose: false, getlevel:false, level: "Begginer" },
        {  isChoose: false, getlevel:false, level: "Skillful" },
        {  isChoose: false, getlevel:false, level: "Experienced" },
        {  isChoose: false, getlevel:false, level: "Expert" },
      ],
    },
  ]);

  const [InputSkillType ,setInputSkillType] = useState<string>('')

  // Skill section data store start 
  interface SkillForm {
    isHoverd: Boolean;
    Skilltype:string;
    Skill: Array<any>;
    skillLevel:string;
  }

  const [SkillFormData, setSkillFormData] = useState<SkillForm[]>([
    {
      isHoverd: false,
      Skilltype:'',
      skillLevel:'',
      Skill: [
        { isChoose: false, getlevel:false, level: "Noob" },
        { isChoose: false, getlevel:false, level: "Begginer" },
        { isChoose: false, getlevel:false, level: "Skillful" },
        { isChoose: false, getlevel:false, level: "Experienced" },
        { isChoose: false, getlevel:false, level: "Expert" },
      ],
    },
  ]);
  // Skill section data store end

  const [GetCvStyle, setGetCvStle] = useState<string>('')
  return (
    <div
      style={{ height: "calc(100vh - 70px)" }}
      className="bg-gray-50 w-screen flex md:mt-0  justify-between"
    >
      <div className="flex justify-between  relative h-full w-[98%]  m-auto items-start overflow-hidden">
        <CvPageContentLeft />
        <CvPageDownload
          {...{
            ExperienceForm,
            EducationForm,
            ProjectForm,
            Achivement,
            Award,
            Training,
            References,
            SocialMedia,
            InputSkillType,
            SkillFormData,
            LanguageForm,
            setGetCvStle,
            GetCvStyle,
          }}
        />
        <CvPageContentRight
          {...{
            EducationForm,
            setEducationForm,
            setExperienceForm,
            ExperienceForm,
            ProjectForm,
            setProjectForm,
            Achivement,
            setAchivement,
            Award,
            setAward,
            Training,
            setTraining,
            References,
            setReferences,
            SocialMedia,
            setSocialMedia,
            LanguageForm,
            setLanguageForm,
            SkillFormData,
            setSkillFormData,
          }}
        />
      </div>
    </div>
  );
};

export default CreateCv;
