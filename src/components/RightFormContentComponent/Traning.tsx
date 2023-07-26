"use client";

import {
  ArrowDownCircleIcon,
  ChevronDownIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useRef, useState, SetStateAction, Dispatch } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface myComponentProps {
  Training: TrainForm[];
  setTraining: Dispatch<SetStateAction<AwardForm>[]>;
}

const About: React.FC<myComponentProps> = ({ setTraining, Training }) => {
  const Textbox = useRef<HTMLInputElement>(null);
  const [values, setValue] = useState<String>("");
  const [EducationBoxHover, setEducationBoxHover] = useState<Boolean>(false);

  const AddTrainingFeild = () => {
    setTraining([
      ...Training,
      {
        isHoverd: false,
        certificatetitle: "",
        organization: "",
        completedate: "",
        summery: "",
      },
    ]);
  };

  const HoverEducationBox = (index: number) => {
    setTraining((preitem) => {
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
    if ((Training.length as any) > 1) {
      const data = [...Training];
      data.splice(index, 1);
      setTraining(data);
    } else {
      // remove the data from the education form
      setTraining((item) =>{ 
        const data = [...item];
        return data.map((items) => {
          return { isHoverd: false,
            certificatetitle: "",
            organization: "",
            completedate: "", summery:'<p><br></p>'}
       })

      })
    }
  };

  return (
    <div id="Traning" className="w-full h-auto my-5 slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">Traning</h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        provide your Detail information about Traning
      </p>
      {Training?.map((item, index) => {
        return (
          <form
            key={index}
            className={` ${
              item.isHoverd ? "h-[560px] " : "h-[60px] "
            } border-b border-gray-300  overflow-hidden transition-all duration-400 my-6  w-full`}
          >
            <div className="flex justify-between items-center cursor-pointer hover:text-blue-500">
              <h4
                onClick={() => HoverEducationBox(index)}
                className="md:text-[19px] text-[17px]  hover:text-blue-500 text-gray-600"
              >
                {Training[index].certificatetitle !== '' ? Training[index].certificatetitle : 'Certification Title'}
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
                <label htmlFor="school">Training/Certification Title</label>
                <input
                  type="text"
                  name="Training/Certification"
                  className="form-control bg-white"
                  value={Training[index].certificatetitle}
                  onChange={(e) => {
                    const updateitem = [...Training];
                    updateitem[index].certificatetitle = e.target.value;
                    setTraining(updateitem);
                  }}
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2 w-full">
                <label htmlFor="Degree">Institution/Organization</label>
                <input
                  type="text"
                  name="Institution/Organization"
                  className="form-control w-full bg-white"
                  value={Training[index].organization}
                  onChange={(e) => {
                    const updateitem = [...Training];
                    updateitem[index].organization = e.target.value;
                    setTraining(updateitem);
                  }}
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2 w-full">
                <label htmlFor="StartDate w-full">Completion Date</label>
                <input
                  type="text"
                  name="Completion Date"
                  className="form-control bg-white"
                  value={Training[index].completedate}
                  onChange={(e) => {
                    const updateitem = [...Training];
                    updateitem[index].completedate = e.target.value;
                    setTraining(updateitem);
                  }}
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
                    value={Training[index].summery}
                    onChange={(e) => {
                      const updateitem = [...Training];
                      updateitem[index].summery = e;
                      setTraining(updateitem);
                    }}
                  />
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
          onClick={AddTrainingFeild}
        >
          <PlusIcon className="h-6" /> Add Form
        </button>
      </div>
      <div className="mt-[50px] ">
        <a href="#Awards" type="button" className="btn btn-primary block mx-auto">
          Next Page
        </a>
      </div>
    </div>
  );
};

export default About;
