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
  Award: AwardForm[];
  setAward: Dispatch<SetStateAction<AwardForm>[]>;
}

const About: React.FC<myComponentProps> = ({ setAward, Award }) => {
  const [values, setValue] = useState<String>("");

  const AddAwardFeild = () => {
    setAward([
      ...Award,
      {
        isHoverd: false,
        awardtitle: "",
        organization: "",
        location: "",
        receveddate: "",
        summery: "",
      },
    ]);
  };

  const HoverEducationBox = (index: number) => {
    setAward((preitem) => {
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
    if (Award.length > 1) {
      const data = [...Award];
      data.splice(index, 1);
      setAward(data);
    } else {
      // remove the data from the education form
      setAward((item:any[]) => {
        const data = [...item];
        return data.map((items) => {
          return {
            isHoverd: false,
            awardtitle: "",
            organization: "",
            location: "",
            receveddate: "",
            summery: "<p><br></p>",
          };
        });
      });
    }
  };

  return (
    <div id="Awards" className="w-full h-auto my-5 slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">Award</h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        provide your Detail information about your Award
      </p>
      {Award?.map((item, index) => {
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
                Award Title
              </h4>
              <div className="flex justify-between items-center space-x-4">
                <ChevronDownIcon
                  onClick={() => HoverEducationBox(index)}
                  className={`h-6 ${Award ? "transform" : ""}  text-gray-600`}
                />
                <TrashIcon
                  onClick={() => DeleteEducationBox(index)}
                  className="h-5 text-red-600 hover:texta-red-700"
                />
              </div>
            </div>
            <div className="mt-7 flex w-full">
              <div className=" space-y-2 w-full">
                <label htmlFor="school">Award Title</label>
                <input
                  type="text"
                  name="AwardTitle"
                  className="form-control bg-white"
                  value={Award[index].awardtitle}
                  onChange={(e) => {
                    const updateitem = [...Award];
                    updateitem[index].awardtitle = e.target.value;
                    setAward(updateitem);
                  }}
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2">
                <label htmlFor="Organization">Organization</label>
                <input
                  type="text"
                  name="Organization"
                  className="form-control bg-white"
                  value={Award[index].organization}
                  onChange={(e) => {
                    const updateitem = [...Award];
                    updateitem[index].organization = e.target.value;
                    setAward(updateitem);
                  }}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="Location">Location</label>
                <input
                  type="text"
                  name="Location"
                  className="form-control bg-white"
                  value={Award[index].location}
                  onChange={(e) => {
                    const updateitem = [...Award];
                    updateitem[index].location = e.target.value;
                    setAward(updateitem);
                  }}
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2 w-full">
                <label htmlFor="Recived Year">Recived Year</label>
                <input
                  type="text"
                  className="form-control w-full bg-white"
                  value={Award[index].receveddate}
                  onChange={(e) => {
                    const updateitem = [...Award];
                    updateitem[index].receveddate = e.target.value;
                    setAward(updateitem);
                  }}
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="Description">Description</label>
              <div className="w-full mt-1 rounded-md h-[250px]  ">
                <div className="p-2 flex  relative  cursor-pointer">
                  <ReactQuill
                    placeholder="Tell little about yourself"
                    className=""
                    theme="snow"
                    value={Award[index].summery}
                    onChange={(e) => {
                      const updateitem = [...Award];
                      updateitem[index].summery = e;
                      setAward(updateitem);
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
          onClick={AddAwardFeild}
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
