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
import Button from "react-bootstrap/esm/Button";


const About = ({ ProjectForm, setProjectForm }) => {

  const AddProjectFormFeild = () => {
    setProjectForm([
      ...ProjectForm,
      { isHoverd: false, Projecttitle: "", projectlink: "", summery: "" },
    ]);
  };

  const HoverEducationBox = (index) => {
    setProjectForm((preitem) => {
      const data = [...preitem];
      const newData = data.map((objs, i) => {
        return i === index
          ? { ...objs, isHoverd: !data[index].isHoverd }
          : { ...objs, isHoverd: false };
      });
      return newData;
    });
  };

  const DeleteEducationBox = (index) => {
    if ((ProjectForm.length ) > 1) {
      const data = [...ProjectForm];
      data.splice(index, 1);
      setProjectForm(data);
    } else {
      // remove the data from the education form
      setProjectForm((item) =>{ 
        const data = [...item];
        return data.map((items) => {
          return { isHoverd: false,
            Projecttitle: "",
            projectlink: "", summery:'<p><br></p>'}
       })

      })
    }
  };

  return (
    <div id="Projects" className="w-full h-auto my-5 slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">Projects</h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        provide your Project Name and the link
      </p>
      {ProjectForm?.map((item, index) => {
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
              {ProjectForm[index].Projecttitle? ProjectForm[index].Projecttitle : 'Projects Title'}
              </h4>
              <div className="flex justify-between items-center space-x-4">
                <ChevronDownIcon
                  onClick={() => HoverEducationBox(index)}
                  className={`h-6  text-gray-600`}
                />
                <TrashIcon
                  onClick={() => DeleteEducationBox(index)}
                  className="h-5 text-red-600 hover:texta-red-700"
                />
              </div>
            </div>
            <div className="mt-7 flex w-full">
              <div className=" space-y-2 w-full">
                <label htmlFor="school">Project Title</label>
                <input
                  type="text"
                  value={ProjectForm[index].Projecttitle}
                  onChange={(e) => {
                    const updateitem = [...ProjectForm];
                    updateitem[index].Projecttitle = e.target.value;
                    setProjectForm(updateitem);
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
                    value={ProjectForm[index].summery}
                    onChange={(e) => {
                      const updateitem = [...ProjectForm];
                      updateitem[index].summery = e;
                      setProjectForm(updateitem);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-1 flex space-x-3">
              <div className="space-y-2 w-full">
                <label htmlFor="GraduateDate">Project Link</label>
                <input
                  type="text"
                  value={ProjectForm[index].projectlink}
                  onChange={(e) => {
                    const updateitem = [...ProjectForm];
                    updateitem[index].projectlink = e.target.value;
                    setProjectForm(updateitem);
                  }}
                  className="w-full form-control bg-white"
                />
              </div>
            </div>
          </form>
        );
      })}

      <div className="">
        <Button
          type="button"
          className="text-blue-500 flex space-x-2"
          onClick={AddProjectFormFeild}
        >
          <PlusIcon className="h-6" /> Add Form
        </Button>
      </div>
    </div>
  );
};

export default About;
