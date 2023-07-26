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


interface myComponentProps {
  EducationForm: Form[];
  setEducationForm: Dispatch<SetStateAction<Form>[]>;
  ExperienceForm: ExpForm[];
  setExperienceForm: Dispatch<SetStateAction<ExpForm>[]>;
  ProjectForm: ProjForm[];
  setProjectForm: Dispatch<SetStateAction<ProjForm>[]>;
  Achivement:AchivForm[];
  setAchivement: Dispatch<SetStateAction<AchivForm>[]>;
  Award:AwardForm[];
  setAward: Dispatch<SetStateAction<AwardForm>[]>;
  Training:TrainForm[];
  setTraining: Dispatch<SetStateAction<TrainForm>[]>;
  References:ReferForm[];
  setReferences: Dispatch<SetStateAction<ReferForm>[]>;
  setSocialMedia: Dispatch<SetStateAction<SocialIcon>[]>;
  SocialMedia:SocialIcon[];
  LanguageForm:language[];
  setLanguageForm: Dispatch<SetStateAction<language>[]>;
  SkillFormData:SkillForm[];
  setSkillFormData:Dispatch<SetStateAction<SkillForm>>;
}

const CvPageContentRight: React.FC<myComponentProps> = ({
  EducationForm,
  setEducationForm,
  setExperienceForm,
  ExperienceForm,
  setProjectForm,
  ProjectForm,
  setAchivement,
  Achivement,
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
  setSkillFormData
}) => {
  return (
    <div id='mainformdiv' className=" formContainer  h-full md:mt-0 mt-6 rounded-lg w-[420px] overflow-auto border-l border-gray-300 py-5 px-3 ">
      <About {...{SocialMedia, setSocialMedia}}/>
      <Education
        EducationForm={EducationForm}
        setEducationForm={setEducationForm}
      />
      <Experience {...{ setExperienceForm, ExperienceForm }} />
      <Projects {...{ProjectForm, setProjectForm}}/>
      <Skills {...{SkillFormData, setSkillFormData}}/>
      <Achivements {...{setAchivement, Achivement}}/>
      <Traning {...{setTraining, Training}}/>
      <Awards {...{setAward, Award}}/>
      <Language {...{LanguageForm, setLanguageForm}}/>
      <Reference {...{setReferences,References}}/>
    </div>
  );
};

export default CvPageContentRight;
