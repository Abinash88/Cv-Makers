"use client";

import {
  ArrowDownCircleIcon,
  ChevronDownIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useRef, useState, SetStateAction, Dispatch, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/esm/Button";

interface AchivForm {
  isHoverd: Boolean;
  AchivTitle: string;
  summery: string;
}

interface myComponentProps {
  Achivement: AchivForm[];
  setAchivement: Dispatch<SetStateAction<AchivForm>[]>;
}

const About: React.FC<myComponentProps> = ({ Achivement, setAchivement }) => {
  const Textbox = useRef<HTMLInputElement>(null);
  const [values, setValue] = useState<String>("");
  const [EducationBoxHover, setEducationBoxHover] = useState<Boolean>(false);

  const AddAchivementFeild = () => {
    setAchivement([
      ...Achivement,
      { isHoverd: false, AchivTitle: "", summery: "" },
    ]);
  };

  interface maindata {
    isHoverd:boolean;
    AchivTitle:string;
    summery:string;
  }

  const HoverEducationBox = (index: number) => {
    setAchivement((preitem) => {
      const data = [...preitem];
      const newData = data.map((objs: any, i: number) => {
        return i === index
          ? { ...objs, isHoverd: !data[index].isHoverd }
          : { ...objs, isHoverd: false };
      });
      return newData;
    });
  };

  const DeleteEducationBox = (index: number) => {
    if ((Achivement.length as any) > 1) {
      const data = [...Achivement];
      data.splice(index, 1);
      setAchivement(data);
    } else {
      // remove the data from the education form
      setAchivement((item) =>{ 
        const data = [...item];
        return data.map((items) => {
          return { isHoverd: false,
            AchivTitle: "", summery:'<p><br></p>'}
       })

      })
    }
  };

  return (
    <div id="Achivements" className="w-full h-auto my-5 slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">
        Achivements
      </h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        Talk About your achivements.
      </p>
      {Achivement?.map((item, index) => {
        return (
          <form
            key={index}
            className={` ${
              item.isHoverd ? "h-[400px] " : "h-[60px] "
            } border-b border-gray-300  overflow-hidden transition-all duration-400 my-6  w-full`}
          >
            <div className="flex justify-between items-center cursor-pointer hover:text-blue-500">
              <h4
                onClick={() => HoverEducationBox(index)}
                className="md:text-[19px] text-[17px]  hover:text-blue-500 text-gray-600"
              >
               {Achivement[index].AchivTitle !== '' ? Achivement[index].AchivTitle  : 'Achivement Title'}
              </h4>
              <div className="flex justify-between items-center space-x-4">
                <ChevronDownIcon
                  onClick={() => HoverEducationBox(index)}
                  className={`h-6 ${
                    EducationBoxHover ? "transform" : ""
                  }  text-gray-600`}
                />
                <TrashIcon
                  onClick={() => DeleteEducationBox(index)}
                  className="h-5 text-red-600 hover:texta-red-700"
                />
              </div>
            </div>
            <div className="mt-7 flex w-full">
              <div className=" space-y-2 w-full">
                <label htmlFor="school">Title</label>
                <input
                  type="text"
                  value={Achivement[index].AchivTitle}
                  onChange={(e) => {
                    const updateitem = [...Achivement];
                    updateitem[index].AchivTitle = e.target.value;
                    setAchivement(updateitem);
                  }}
                  className="form-control bg-white"
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="Summery">Description</label>
              <div className="w-full mt-1 rounded-md h-[250px]  ">
                <div className="p-2 flex  relative  cursor-pointer">
                  <ReactQuill
                    placeholder="Tell little about yourself"
                    className=""
                    theme="snow"
                    value={Achivement[index].summery}
                    onChange={(e) => {
                      const updateitem = [...Achivement];
                      updateitem[index].summery = e;
                      setAchivement(updateitem);
                    }}
                  />
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
          onClick={AddAchivementFeild}
        >
          <PlusIcon className="h-6" /> Add Form
        </Button>
      </div>
      <div className="mt-[50px] ">
        <a href="#Traning" type="button" className="btn btn-primary block mx-auto">
          Next Page
        </a>
      </div>
    </div>
  );
};

export default About;
