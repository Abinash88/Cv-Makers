import React, { Dispatch, SetStateAction } from "react";
import About from "../RightFormContentComponent/About";
import Education from "../RightFormContentComponent/Education";
import Experience from "../RightFormContentComponent/Experience";
import Projects from "../RightFormContentComponent/Projects";
import Skills from "../RightFormContentComponent/Skills";
import Achivements from "../RightFormContentComponent/Achivements";
import Traning from "../RightFormContentComponent/Traning";
import Awards from "../RightFormContentComponent/Awards";
import Language from "../RightFormContentComponent/Language";
import Reference from "../RightFormContentComponent/Reference";




const CvPageContentRight = ({
  EducationForm,
  setEducationForm,
  ExperienceForm,
  setExperienceForm,
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
}) => {
  return (
    <div
      id="mainformdiv"
      className=" formContainer  h-full md:mt-0 mt-6 rounded-lg w-[420px] overflow-auto border-l border-gray-300 py-5 px-3 "
    >
      <About {...{ SocialMedia, setSocialMedia }} />
      <Education
        EducationForm={EducationForm}
        setEducationForm={setEducationForm}
      />
      <Experience {...{ setExperienceForm, ExperienceForm }} />
      <Projects {...{ ProjectForm, setProjectForm }} />
      <Skills {...{ SkillFormData, setSkillFormData }} />
      <Achivements {...{ setAchivement, Achivement }} />
      <Traning {...{ setTraining, Training }} />
      <Awards {...{ setAward, Award }} />
      <Language {...{ LanguageForm, setLanguageForm }} />
      <Reference {...{ setReferences, References }} />
    </div>
  );
};

export default CvPageContentRight;
