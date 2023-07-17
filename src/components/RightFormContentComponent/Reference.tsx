"use client";

import {
  ArrowDownCircleIcon,
  ChevronDownIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState, SetStateAction, Dispatch } from "react";

interface myComponentProps {
  References: ReferForm[];
  setReferences: Dispatch<SetStateAction<ReferForm>[]>;
}

const References: React.FC<myComponentProps> = ({
  setReferences,
  References,
}) => {
  const Textbox = useRef<HTMLInputElement>(null);
  const [values, setValue] = useState<String>("");
  const [EducationBoxHover, setEducationBoxHover] = useState<Boolean>(false);

  const AddReferencesFeild = () => {
    setReferences([
      ...References,
      {
        isHoverd: false,
        firstname: "",
        lastname: "",
        company: "",
        designation: "",
        phone: 0,
        email: "",
      },
    ]);
  };

  const HoverEducationBox = (index: number) => {
    setReferences((preitem) => {
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
    if ((References.length as any) > 1) {
      const data = [...References];
      data.splice(index, 1);
      setReferences(data);
    } else {
      // remove the data from the education form
    }
  };

  return (
    <div id="References" className="w-full h-auto my-5 References slider">
      <h2 className="text-green-600 font-semibold w-full h-full ">
        References
      </h2>
      <p className="text-gray-500 h-full w-full text-[15px]">
        Add your referencess. It can be anyone from your co-workers, employers,
        or even professors.
      </p>
      {References?.map((item, index) => {
        return (
          <form
            key={index}
            className={` ${
              item.isHoverd ? "h-[330px] " : "h-[60px] "
            } border-b border-gray-300  overflow-hidden transition-all duration-400 my-6  w-full`}
          >
            <div className="flex justify-between items-center cursor-pointer hover:text-blue-500">
              <h4
                onClick={() => HoverEducationBox(index)}
                className="text-[19px] hover:text-blue-500 text-gray-600"
              >
                References
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
            <div className="mt-7 space-x-3  flex ">
              <div className=" ">
                <label htmlFor="FirstName">First Name</label>
                <input
                  type="text"
                  placeholder="Reema"
                  name="firstName"
                  className="form-control bg-white"
                  value={References[index].firstname}
                  onChange={(e) => {
                    const updateitem= [...References];
                    updateitem[index].firstname = e.target.value;
                    setReferences(updateitem)
                  }}
                />
              </div>
              <div className=" ">
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  placeholder="Sharma"
                  className="form-control bg-white"
                  value={References[index].lastname}
                  onChange={(e) => {
                    const updateitem= [...References];
                    updateitem[index].lastname = e.target.value;
                    setReferences(updateitem)
                  }}
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2">
                <label htmlFor="Company">Company</label>
                <input
                  type="text"
                  name="Company"
                  placeholder="Info tech solutions"
                  className="form-control bg-white"
                  value={References[index].company}
                  onChange={(e) => {
                    const updateitem= [...References];
                    updateitem[index].company = e.target.value;
                    setReferences(updateitem)
                  }}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="Designation">Designation</label>
                <input
                  type="text"
                  name="Designation"
                  placeholder="Manager"
                  className="form-control bg-white"
                  value={References[index].designation}
                  onChange={(e) => {
                    const updateitem= [...References];
                    updateitem[index].designation = e.target.value;
                    setReferences(updateitem)
                  }}
                />
              </div>
            </div>

            <div className="mt-3 flex space-x-3">
              <div className="space-y-2">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="983474362"
                  className="form-control bg-white"
                   value={References[index].phone}
                  onChange={(e) => {
                    const updateitem= [...References];
                    updateitem[index].phone = e.target.value;
                    setReferences(updateitem)
                  }}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="form-control bg-white"
                   value={References[index].email}
                  onChange={(e) => {
                    const updateitem= [...References];
                    updateitem[index].email = e.target.value;
                    setReferences(updateitem)
                  }}
                />
              </div>
            </div>
          </form>
        );
      })}

      <div className="">
        <button
          type="button"
          className="text-blue-500 flex space-x-2"
          onClick={AddReferencesFeild}
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

export default References;
