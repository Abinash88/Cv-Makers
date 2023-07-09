"use client";

import {
  ArrowDownCircleIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { ChangeEvent, useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const About: React.FC = () => {
  const ClickingTheImageFile = useRef<HTMLInputElement>(null);
  const [values, setValue] = useState<String>("");

  interface Form {
    string:string
  }

  const [formList, setFormList] = useState<Form[]>([]);
  const addForm = () => {
    setFormList([...formList, {string:''}]);
    console.log(formList)
  };


  const handleFormChange = (event:ChangeEvent<HTMLInputElement>, index:number) => {
    const { name, value } = event.target;
    const updatedFormList = [...formList];
    (updatedFormList[index] as any)[name] = value;
    setFormList(updatedFormList);
  };

  const ClickTheFile = () => {
    if (ClickingTheImageFile.current) {
      ClickingTheImageFile.current.click();
    }
  };

  const TrashHanlder = (index:number) => {
      const data = [...formList];
      data.splice(index, 1);
      setFormList(data);
  }

  return (
    <div className="w-full h-auto ">
      <h2 className="text-green-600 font-semibold ">About</h2>
      <p className="text-gray-500 text-[15px]">provide your Detail information about your self.</p>
      <form action="">
        <div className="flex space-x-3">
          <div className="w-[70px] h-[70px] border-gray-300 border rounded-full ">
            <img src="" className="w-full h-full rounded-full " alt="" />
          </div>
          <input ref={ClickingTheImageFile} type="file" className="hidden" />
          <h5
            onClick={ClickTheFile}
            className="flex items-center text-[18px] space-x-2 cursor-pointer"
          >
            <ArrowDownCircleIcon className="h-7 text-green-600" />{" "}
            <span>Upload Image</span>
          </h5>
        </div>

        <div className="mt-7 flex space-x-3">
          <div className="space-y-2">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control bg-white" />
          </div>
          <div className=" space-y-2">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" className="form-control bg-white" />
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            placeholder="Assistant"
            className="form-control bg-white"
          />
        </div>

        <div className="mt-3 flex space-x-3">
          <div className="space-y-2">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control bg-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control bg-white" />
          </div>
        </div>

        <div className="mt-3 flex space-x-3">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control bg-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="Phone">Phone</label>
            <input type="number" className="form-control bg-white" />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="Summery">Summery</label>
          <div className="w-full mt-1 h-[250px] rounded-md   ">
            <div className="p-2 flex  relative  cursor-pointer">
              <ReactQuill
                className=""
                theme="snow"
                value={values as string}
                onChange={(data) => setValue(data)}
              />
            </div>
          </div>
        </div>
        <div className="">
          {formList.map((form, index) => (
            <div className='flex items-center space-x-3 my-2' key={index}>
              <select className='form-control'>
                <option>Facebook</option>
                <option>Linkdin</option>
                <option>Instagram</option>
                <option>Youtube</option>
                <option>Github</option>
                <option>Twitter</option>
                <option>Website</option>
              </select>
              <input
                type="text"
                name="field1"
                className='form-control '
                value={form.field1}
                onChange={(event) => handleFormChange(event, index)}
              />
              <TrashIcon onClick={() => TrashHanlder(index)} className="h-12 hover:text-red-600 text-red-400"/>
            </div>
          ))}
          
          <button type='button' className='text-blue-500 flex space-x-2' onClick={addForm}><PlusIcon className='h-6'/> Add Form</button>
        </div>

        <div className="mt-[100px]">
          <button type="button" className="btn btn-primary block mx-auto">
            Next Page
          </button>
        </div>
      </form>
    </div>
  );
};

export default About;
