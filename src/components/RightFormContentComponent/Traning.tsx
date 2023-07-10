"use client";

import {
  ArrowDownCircleIcon,
  ChevronDownIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const About: React.FC = () => {
  const Textbox = useRef<HTMLInputElement>(null);
  const [values, setValue] = useState<String>("");
  const [EducationBoxHover, setEducationBoxHover] = useState<Boolean>(false);
  const [EducationForm, setEducationForm] = useState<Form[]>([
    { string: "", isHoverd: false },
  ]);

  interface Form {
    string: string;
    isHoverd: Boolean;
  }

  const AddEducationFormFeild = () => {
    setEducationForm([...EducationForm, { string: "", isHoverd: false }]);
  };

  const HoverEducationBox = (index: number) => {
    setEducationForm((preitem) => {
      const data = [...preitem];
      const newData = data.map((objs: any, i: number) => {
        return i === index
          ? { ...objs, isHoverd: !data[index].isHoverd }
          : { ...data, isHoverd: false };
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

  return (
    <div className="w-full h-auto my-5">
      <h2 className="text-green-600 font-semibold w-full h-full ">Traning</h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        provide your Detail information about Traning
      </p>
      {EducationForm?.map((item, index) => {
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
                className="text-[19px] hover:text-blue-500 text-gray-600"
              >
                Certification Title
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
                <input type="text" name="Training/Certification" className="form-control bg-white" />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2 w-full">
                <label htmlFor="Degree">Institution/Organization</label>
                <input type="text" name="Institution/Organization" className="form-control w-full bg-white" />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2 w-full">
                <label htmlFor="StartDate w-full">Completion Date</label>
                <input type="text" name='Completion Date' className="form-control bg-white" />
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
                    value={values as any}
                    onChange={setValue}
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
