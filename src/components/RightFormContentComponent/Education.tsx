"use client";

import {
  ArrowDownCircleIcon,
  ChevronDownIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/esm/Button";

interface Form {
  isHoverd: boolean;
  school: string;
  degree: string;
  city: string;
  graduatedate: string;
  startdate: string;
  summery: string;
}

interface myComponentProps{
  EducationForm:Form[];
  setEducationForm:Dispatch<SetStateAction<Form>[]>
}

const About: React.FC<myComponentProps> = ({EducationForm, setEducationForm}) => {


  const AddEducationFormFeild = () => {
    setEducationForm([
      ...EducationForm,
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
  };

  const HoverEducationBox = (index: number) => {
    setEducationForm((preitem:any) => {
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
    if ((EducationForm.length as any) > 1) {
      const data = [...EducationForm];
      data.splice(index, 1);
      setEducationForm(data);
    } else {
      // remove the data from the education form
      setEducationForm((item:any) =>{ 
        const data = [...item];
        return data.map((items) => {
          return { city:'', degree:'', graduatedate:'', isHoverd:false, school:'', startdate:'', summery:'<p><br></p>'}
       })

      })
    }
  };

// 

  return (
    <div id="Education" className="w-full h-auto my-5 slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">Education</h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        provide your Detail information about you study history
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
                className="md:text-[19px] text-[17px] hover:text-blue-500 text-gray-600"
              >
               { EducationForm[index].school !== '' ?  EducationForm[index].school
               : 'School/Instution'
               }
              </h4>
              <div className="flex justify-between items-center space-x-4">
                <ChevronDownIcon
                  onClick={() => HoverEducationBox(index)}
                  className={`h-6   text-gray-600`}
                />
                <TrashIcon
                  onClick={() => DeleteEducationBox(index)}
                  className="h-5 text-red-600 hover:texta-red-700"
                />
              </div>
            </div>
            <div className="mt-7 flex w-full">
              <div className=" space-y-2 w-full">
                <label htmlFor="school">School</label>
                <input
                  type="text"
                  value={EducationForm[index].school as string}
                  onChange={(e) => {
                    const updateForm = [...EducationForm];
                    updateForm[index].school = e.target.value;
                    setEducationForm(updateForm);
                  } }
                  name="school"
                  className="form-control bg-white"
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2">
                <label htmlFor="Degree">Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={EducationForm[index].degree as string}
                  onChange={(e) => {
                    const updateForm = [...EducationForm];
                    updateForm[index].degree = e.target.value;
                    setEducationForm(updateForm);
                  } }
                  className="form-control bg-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="City">City</label>
                <input
                  type="text"
                  name="city"
                  value={EducationForm[index].city as string}
                  onChange={(e) => {
                    const updateForm = [...EducationForm];
                    updateForm[index].city = e.target.value;
                    setEducationForm(updateForm);
                  } }
                  className="form-control bg-white"
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2">
                <label htmlFor="StartDate">Start Date</label>
                <input
                  type="text"
                  name="startdate"
                  value={EducationForm[index].startdate}
                  onChange={(e) => {
                    const updateForm = [...EducationForm];
                    updateForm[index].startdate = e.target.value
                    setEducationForm(updateForm)
                  }}
                  className="form-control bg-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="GraduateDate">Graduate Date</label>
                <input
                  type="text"
                  name="graduatedate"
                  value={EducationForm[index].graduatedate}
                  onChange={(e) => {
                    const updateForm = [...EducationForm];
                    updateForm[index].graduatedate = e.target.value;
                    setEducationForm(updateForm)
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
                    placeholder="Tell little about yourself"
                    className=""
                    theme="snow"
                    value={EducationForm[index].summery}
                    onChange={(e) => {
                      const updateForm = [...EducationForm];
                      updateForm[index].summery = e;
                      setEducationForm(updateForm);
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
          onClick={AddEducationFormFeild}
        >
          <PlusIcon className="h-6" /> Add Form
        </Button>
      </div>
      <div className="mt-[50px] ">
        <a href="#Experience" type="button" className="btn btn-primary block mx-auto">
          Next Page
        </a>
      </div>
    </div>
  );
};

export default About;
