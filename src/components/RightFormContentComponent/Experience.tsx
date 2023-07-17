"use client";

import {
  ArrowDownCircleIcon,
  ChevronDownIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useRef, useState, Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface myComponentProps {
  ExperienceForm: ExpForm[];
  setExperienceForm: Dispatch<SetStateAction<Form>[]>;
}

const About: React.FC<myComponentProps> = ({
  ExperienceForm,
  setExperienceForm,
}) => {
  const Textbox = useRef<HTMLInputElement>(null);
  const [values, setValue] = useState<String>("");
  const [EducationBoxHover, setEducationBoxHover] = useState<Boolean>(false);


  const AddExperienceFormFeild = () => {
    setExperienceForm([
      ...ExperienceForm,
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
    console.log(ExperienceForm);
  };

  const HoverEducationBox = (index: number) => {
    setExperienceForm((preitem) => {
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
    if ((ExperienceForm.length as any) > 1) {
      const data = [...ExperienceForm];
      data.splice(index, 1);
      setExperienceForm(data);
    } else {
      // remove the data from the education form
    }
  };

  return (
    <div id="Experience" className="w-full h-auto my-5 slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">
        Experience
      </h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        provide your Detail information about you Work Experience
      </p>
      {ExperienceForm?.map((item, index) => {
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
                Job Title
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
                <label htmlFor="school">Job title</label>
                <input
                  type="text"
                  name="jobtitle"
                  className="form-control bg-white"
                  value={ExperienceForm[index].jobtitle}
                  onChange={(e) => {
                    const updateitem = [...ExperienceForm];
                    updateitem[index].jobtitle = e.target.value;
                    setExperienceForm(updateitem);
                  }}
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2">
                <label htmlFor="Degree">Employer/Organization</label>
                <input
                  type="text"
                  value={ExperienceForm[index].organization}
                  onChange={(e) => {
                    const updateitem = [...ExperienceForm];
                    updateitem[index].organization = e.target.value;
                    setExperienceForm(updateitem);
                  }}
                  className="form-control bg-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="City">Location</label>
                <input
                  type="text"
                  value={ExperienceForm[index].location}
                  onChange={(e) => {
                    const updateitem = [...ExperienceForm];
                    updateitem[index].location = e.target.value;
                    setExperienceForm(updateitem);
                  }}
                  className="form-control bg-white"
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2">
                <label htmlFor="StartDate">Start Date</label>
                <input
                  type="text"
                  value={ExperienceForm[index].startdate}
                  onChange={(e) => {
                    const updateitem = [...ExperienceForm];
                    updateitem[index].startdate = e.target.value;
                    setExperienceForm(updateitem);
                  }}
                  className="form-control bg-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="GraduateDate">End Date</label>
                <input
                  type="text"
                  value={ExperienceForm[index].enddate}
                  onChange={(e) => {
                    const updateitem = [...ExperienceForm];
                    updateitem[index].enddate = e.target.value;
                    setExperienceForm(updateitem);
                  }}
                  className="form-control bg-white"
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="Summery">Summery</label>
              <div className="w-full mt-1 rounded-md h-[250px]  ">
                <div className="p-2 flex  relative  cursor-pointer">
                  <ReactQuill
                    placeholder="Mention briefly what sorts of noteworthy tasks you performed at this workplace. Feel free to add your major highlights/achievements as well."
                    className=""
                    theme="snow"
                    value={ExperienceForm[index].summery}
                    onChange={(e) => {
                      const updateitem = [...ExperienceForm];
                      updateitem[index].summery = e;
                      setExperienceForm(updateitem);
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
          onClick={AddExperienceFormFeild}
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
