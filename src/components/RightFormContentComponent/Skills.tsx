"use client";

import {
  ArrowDownCircleIcon,
  ChevronDownIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const About: React.FC = () => {
  const Textbox = useRef<HTMLInputElement>(null);
  const [values, setValue] = useState<String>("");
  const [EducationBoxHover, setEducationBoxHover] = useState<Boolean>(false);
  const [skillLevels, setSkillLevels] = useState<String>("");
  const [EducationForm, setEducationForm] = useState<Form[]>([
    {
      string: "",
      isHoverd: false,
      Skill: [
        { string: "", isChoose: false },
        { string: "", isChoose: false },
        { string: "", isChoose: false },
        { string: "", isChoose: false },
        { string: "", isChoose: false },
      ],
    },
  ]);

  interface Form {
    string: string;
    isHoverd: Boolean;
    Skill: Array<any>;
  }

  interface SkillLevels {
    string: string;
    isChoose: Boolean;
  }

  const AddEducationFormFeild = () => {
    setEducationForm((previtem) => {
      const newData = {
        string: "",
        isHoverd: false,
        Skill: [
          { string: "", isChoose: false },
          { string: "", isChoose: false },
          { string: "", isChoose: false },
          { string: "", isChoose: false },
          { string: "", isChoose: false },
        ],
      };
      return [...previtem, newData];
    });
  };

  const HoverEducationBox = (index: number) => {
    setEducationForm((preitem) => {
      const data = [...preitem];
      const newData = data.map((objs: any, i: number) => {
        if (index === i) {
          return { ...objs, isHoverd: !objs.isHoverd };
        } else {
          return { ...objs, isHoverd: false };
        }
      });
      return newData;
    });
  };

  const DeleteEducationBox = (index: number) => {
    if ((EducationForm.length as any) > 1) {
      const data = [...EducationForm];
      data.splice(index, 1);
      setEducationForm(data);
    } else {
      // remove the data from the education form
    }
  };

  const ChooseSkills = (index: number, formIndex: number) => {
    setSkillLevels(
      index === 0
        ? "Noob"
        : index === 1
        ? "Beginner"
        : index === 2
        ? "Skillfull"
        : index === 3
        ? "Experienced"
        : index === 4
        ? "Pro"
        : ""
    );
    setEducationForm((items: Form[]) => {
      const newans = items.map((newData, ind) => {
        if (formIndex === ind) {
          const newArray = (newData.Skill = newData.Skill.map(
            (item: SkillLevels, j: number) => {
              if (index >= j) {
                return { ...item, isChoose: true };
              } else {
                return { ...item, isChoose: false };
              }
            }
          ));
          return { ...newData, Skill: newArray };
        }
        return newData
      });
      return newans;
    });
  };

  return (
    <div id='Skills' className="w-full h-auto my-5 slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">Skills</h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        provide your Skills and its Level
      </p>
      {EducationForm?.map((item, formIndex) => {
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
                  className="text-[19px] hover:text-blue-500 text-gray-600"
                >
                  Skills
                </h4>
                <p className="text-[14px]">{skillLevels}</p>
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
                <label htmlFor="school">Skills</label>
                <input
                  type="text"
                  placeholder="Communication"
                  className="form-control"
                  required
                />
              </div>
              <div className="flex-1 h-full space-y-2">
                <label htmlFor="level">
                  Level-<span className="text-blue-600">{skillLevels} </span>
                </label>
                <div className="flex items-center cursor-pointer space-x-[1px] justify-between">
                  { EducationForm[0].Skill.map((item, skillIndex) => {
                    return (
                      <span
                        onClick={() => ChooseSkills(skillIndex, formIndex) as any}
                        key={skillIndex}
                        className={`w-[30px] h-[30px] ${
                          item.isChoose  ? "bg-blue-700" : "bg-gray-200"
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
          onClick={AddEducationFormFeild}
        >
          <PlusIcon className="h-6" /> Add Form
        </button>
      </div>
      <div className="mt-[50px] ">
        <button type="button" className="btn btn-primary block mx-auto">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default About;
