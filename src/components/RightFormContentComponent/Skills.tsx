"use client";

import {
  ArrowDownCircleIcon,
  ChevronDownIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState, Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/esm/Button";

interface skillLevel{
  string:string;
  isChoose:boolean;
  getlevel:boolean;
  level:string;
}

interface SkillForm {
  isHoverd: Boolean;
  Skilltype:string;
  Skill: skillLevel[];
  skillLevel:string;
}

interface myskillcomponent {
  SkillFormData: SkillForm[];
  setSkillFormData: Dispatch<SetStateAction<SkillForm>>;
}

const About: React.FC<myskillcomponent> = ({
  SkillFormData,
  setSkillFormData,
}) => {

  interface SkillLevels {
    string: string;
    isChoose: Boolean;
  }

  const AddSkillFormDataFeild = () => {
    setSkillFormData((previtem:any[]) => {
      const newData = {
        isHoverd: false,
        Skilltype: "",
        skillLevel: "",
        Skill: [
          { string: "", isChoose: false, getlevel:false, level: "Noob" },
          { string: "", isChoose: false, getlevel:false, level: "Begginer" },
          { string: "", isChoose: false, getlevel:false, level: "Skillful" },
          { string: "", isChoose: false, getlevel:false, level: "Experienced" },
          { string: "", isChoose: false, getlevel:false, level: "Expert" },
        ],
      };
      return [...previtem, newData];
    });
  };

  const HoverEducationBox = (index: number) => {
    setSkillFormData((preitem:any[]) => {
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
    if ((SkillFormData.length as any) > 1) {
      const data:any[] = [...SkillFormData];
      data.splice(index, 1);
      setSkillFormData(data);
    } else {
      // remove the data from the education form
      setSkillFormData((item:any[]) => {
        const newans = item[0]?.Skill?.map((newData: object[]) => {
          return { ...newData, Skilltype:'', isChoose: false };
        });
        return [{ ...item, Skilltype:'',skillLevel:'',  Skill: newans }];
      });
    }
  };
  

  const ChooseSkills = (index: number, formIndex: number) => {
    let selectedSkillLevelIndex = SkillFormData[formIndex]?.Skill[index]
    const leveldata = selectedSkillLevelIndex
      ? selectedSkillLevelIndex?.level
      : "";
    if (leveldata !== "") {
      setSkillFormData((e:any[]) => {
        const updateitems = [...SkillFormData];
        updateitems[formIndex].skillLevel = leveldata;
        return updateitems
      })
    }


    setSkillFormData((items: Form[]) => {
      const newans = items.map((newData, ind) => {
        if (formIndex === ind) {
          const newArray = (newData.Skill = newData.Skill.map(
            (item: SkillLevels, j: number) => {
              if (index >= j) {
                return { ...item, getlevel: j === index, isChoose: true };
              } else {
                return { ...item, getlevel:false, isChoose: false };
              }
            }
          ));
          return { ...newData, Skill: newArray };
        }
        return newData;
      });
      return newans;
    });

   
  
  };


 


  return (
    <div id="Skills" className="w-full h-auto my-5 slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">Skills</h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        provide your Skills and its Level
      </p>
      {SkillFormData?.map((item, formIndex) => {
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
                  onClick={() => {
                    HoverEducationBox(formIndex);
                  }}
                  className="md:text-[19px] text-[17px]  hover:text-blue-500 text-gray-600"
                >
                { SkillFormData[formIndex].Skilltype !== '' ? SkillFormData[formIndex].Skilltype  :'Skills'}
                </h4>
                <p>{SkillFormData[formIndex]?.skillLevel}</p>
              </div>
              <div className="flex justify-between items-center space-x-4">
                <ChevronDownIcon
                  onClick={() => {
                    HoverEducationBox(formIndex);
                  }}
                  className={`h-6 `}
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
                  value={SkillFormData[formIndex].Skilltype}
                  className="form-control"
                  onChange={(e) => {
                    const updateitem = [...SkillFormData];
                    updateitem[formIndex].Skilltype = e.target.value;
                    setSkillFormData(updateitem);
                  }}
                  required
                />
              </div>
              <div className="flex-1 h-full space-y-2">
                <label htmlFor="level">
                  Level-
                  <span className="text-blue-600">
                    {SkillFormData[formIndex]?.skillLevel }{" "}
                  </span>
                </label>
                <div className="flex items-center cursor-pointer space-x-[1px] justify-between">
                  {SkillFormData[formIndex]?.Skill?.map(
                    (item: any, mainindex: number) => {
                      return (
                        <>
                          <span
                            onClick={() => {
                              ChooseSkills(mainindex, formIndex) as any;
                            }}
                            key={mainindex}
                            className={`w-[30px] h-[30px] ${
                              item.isChoose ? "bg-blue-700" : "bg-gray-200"
                            } transition-all duration-100 rounded-sm`}
                          ></span>
                        </>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </form>
        );
      })}

      <div className="">
        <Button
          type="button"
          className="text-blue-500 flex space-x-2"
          onClick={AddSkillFormDataFeild}
        >
          <PlusIcon className="h-6" /> Add Form
        </Button>
      </div>
      <div className="mt-[50px] ">
        <a href='#Achivements'  type="button" className="btn btn-primary block mx-auto">
          Next Page
        </a>
      </div>
    </div>
  );
};

export default About;
