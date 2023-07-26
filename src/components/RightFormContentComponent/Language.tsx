"use client";

import {
  ArrowDownCircleIcon,
  ChevronDownIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState, SetStateAction, Dispatch } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface myComponentProps {
  LanguageForm: language[];
  setLanguageForm: Dispatch<SetStateAction<language>[]>;
}

const About: React.FC<myComponentProps> = ({
  LanguageForm,
  setLanguageForm,
}) => {
  const Textbox = useRef<HTMLInputElement>(null);
  const [EducationBoxHover, setEducationBoxHover] = useState<Boolean>(false);

  interface SkillLevels {
    string: string;
    isChoose: Boolean;
  }

  const AddLanguageFormFeild = () => {
    setLanguageForm((previtem) => {
      const newData = {
        Langtype: "",
        LangLevel: "",
        isHoverd: false,
        Skill: [
          { isChoose: false, getlevel:false, level: "noob" },
          { isChoose: false, getlevel:false, level: "Begginer" },
          { isChoose: false, getlevel:false, level: "Skillful" },
          { isChoose: false, getlevel:false, level: "Experienced" },
          { isChoose: false, getlevel:false, level: "Expert" },
        ],
      };
      return [...previtem, newData];
    });
  };

  const HoverEducationBox = (index: number) => {
    setLanguageForm((preitem:any) => {
      const data = [...preitem];
      const newData = data.map((objs: any, i: number) => {
        if (index === i) {
          return { ...objs,  isHoverd: !objs.isHoverd };
        } else {
          return { ...objs,  isHoverd: false };
        }
      });
      return newData;
    });
  };

  const DeleteEducationBox = (index: number) => {
    if ((LanguageForm.length as any) > 1) {
      const data = [...LanguageForm];
      data.splice(index, 1);
      setLanguageForm(data);
    } else {
      // remove the data from the education form
      setLanguageForm((item) => {
        const newans = item[0]?.Skill?.map((newData: object[]) => {
          return { ...newData, isChoose: false };
        });
        return [{ ...item, Langtype: "", LangLevel: "", Skill: newans }];
      });
    }
  };

  const ChooseSkills = (index: number, formIndex: number) => {

    const selectedLanguage = LanguageForm[formIndex]?.Skill[index].level;
    setLanguageForm((item:any) => {
      const data = [...item];
      data[formIndex].LangLevel = selectedLanguage !== '' ?selectedLanguage: '';
      return data;
    })

    setLanguageForm((items: Form[]) => {
      const newans = items.map((newData, ind) => {
        if (formIndex === ind) {
          const newArray = newData.Skill.map(
            (item: SkillLevels, j: number) => {
              if (index >= j) {
                return { ...item, getlevel:index === j, isChoose: true};
              } else {
                return { ...item, getlevel:false, isChoose: false };
              }
            }
          );
          return { ...newData, Skill: newArray };
        } else {
          return newData;
        }
      });
      return newans;
    });
  };

  return (
    <div id="Language" className="w-full h-auto my-5 slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">Language</h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        provide your Language skills its Level
      </p>
      {LanguageForm?.map((item, formIndex) => {
        return (
          <form
            key={formIndex}
            className={` ${
              item.isHoverd ? "h-[200px] " : "h-[60px] "
            } border-b border-gray-300  overflow-hidden transition-all duration-400 my-6  w-full`}
          >
            <div className="flex justify-between items-center cursor-pointer hover:text-blue-500">
              <div className="flex flex-col">
                <h4
                  onClick={() => HoverEducationBox(formIndex)}
                  className="md:text-[19px] text-[17px]  hover:text-blue-500 text-gray-600"
                >
                  {LanguageForm[formIndex].Langtype !== ""
                    ? LanguageForm[formIndex].Langtype
                    : `Language`}
                </h4>
                <p className="text-[14px]">{ LanguageForm[formIndex]?.LangLevel}</p>
              </div>
              <div className="flex justify-between items-center space-x-4">
                <ChevronDownIcon
                  onClick={() => HoverEducationBox(formIndex)}
                  className={`h-6 ${
                    EducationBoxHover ? "transform" : ""
                  }  text-gray-600`}
                />
                <TrashIcon
                  onClick={() => DeleteEducationBox(formIndex)}
                  className="h-5 text-red-600 hover:texta-red-700"
                />
              </div>
            </div>
            <div className="mt-7 flex w-full justify-between space-x-3 items-center">
              <div className=" space-y-2 flex-1 flex flex-col">
                <label htmlFor="school">Language</label>
                <input
                  type="text"
                  placeholder="Communication"
                  className="form-control"
                  value={LanguageForm[formIndex].Langtype}
                  onChange={(e) => {
                    const updateitem = [...LanguageForm];
                    updateitem[formIndex].Langtype = e.target.value;
                    setLanguageForm(updateitem);
                  }}
                  required
                />
              </div>
              <div className="flex-1 h-full space-y-2">
                <label htmlFor="level">
                  Level-
                  <span className="text-blue-600">
                    {LanguageForm[formIndex]?.LangLevel}{" "}
                  </span>
                </label>
                <div className="flex items-center cursor-pointer space-x-[1px] justify-between">
                  {LanguageForm[formIndex].Skill.map((item:any, skillIndex:number) => {
                    return (
                      <span
                        onClick={() =>
                          ChooseSkills(skillIndex, formIndex) as any
                        }
                        key={skillIndex}
                        className={`w-[30px] h-[30px] ${
                          item.isChoose ? "bg-blue-700" : "bg-gray-200"
                        } transition-all duration-100 rounded-sm`}
                      ></span>
                    );
                  })}
                </div>
              </div>
            </div>
          </form>
        );
      })}

      <div className="">
        <button
          type="button"
          className="text-blue-500 flex space-x-2"
          onClick={AddLanguageFormFeild}
        >
          <PlusIcon className="h-6" /> Add Form
        </button>
      </div>
      <div className="mt-[50px] ">
        <a href="#Reference" type="button" className="btn btn-primary block mx-auto">
          Next Page
        </a>
      </div>
    </div>
  );
};

export default About;
