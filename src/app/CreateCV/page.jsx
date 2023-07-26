"use client";

import React, { useState, useEffect } from "react";
import CvPageDownload from "../../components/mainCVComponent/CvPageDownload";
import CvPageContentLeft from "../../components/mainCVComponent/CvPageContentLeft";
import CvPageContentRight from "../../components/mainCVComponent/CvPageContentRight";
import { FetchGetUser } from "@/ReduxSlices/GetUserSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const CreateCv = () => {


 const dispatch = useDispatch();
 const router = useRouter()
 const {users} = useSelector((state) => state.users)

 useEffect(() => {
  dispatch(FetchGetUser());
 },[])



  // Education form Data start here
 
  const [EducationForm, setEducationForm] = useState([
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
 
  const [ExperienceForm, setExperienceForm] = useState([
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
  const [ProjectForm, setProjectForm] = useState([
    {
      isHoverd: false,
      Projecttitle: "",
      projectlink: "",
      summery: "",
    },
  ]);
  // Project form Data end here

  // Achivment form Data start here

  const [Achivement, setAchivement] = useState([
    {
      isHoverd: false,
      AchivTitle: "",
      summery: "",
    },
  ]);
  // Achivment form Data end here

  // Award form Data start here

  const [Award, setAward] = useState([
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

  const [Training, setTraining] = useState([
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

  const [References, setReferences] = useState([
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


  // const social media links start here 
  const [SocialMedia, setSocialMedia] = useState([
  ]);
  // const social media links end here 



 
  // language skill choose 
  const [LanguageForm, setLanguageForm] = useState([
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

  const [InputSkillType ,setInputSkillType] = useState('')

  // Skill section data store start 

  const [SkillFormData, setSkillFormData] = useState([
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

  const [GetCvStyle, setGetCvStle] = useState('')
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
