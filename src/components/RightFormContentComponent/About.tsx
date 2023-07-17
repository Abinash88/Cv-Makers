"use client";

import {
  ArrowDownCircleIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { ChangeEvent, useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import {
  Address,
  City,
  Designation,
  Email,
  FirstName,
  LastName,
  Phone,
  Summery,
} from "@/ReduxSlices/AboutSlice";

const About: React.FC = () => {
  const ClickingTheImageFile = useRef<HTMLInputElement>(null);
  const {
    firstname,
    lastname,
    designation,
    phone,
    email,
    city,
    address,
    summery,
  } = useSelector((state: any) => state.About);
  const dispatch = useDispatch();
  interface Form {
    string: string;
  }
  const [formList, setFormList] = useState<Form[]>([]);
  const addForm = () => {
    setFormList([...formList, { string: "" }]);
  };

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
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

  const TrashHanlder = (index: number) => {
    const data = [...formList];
    data.splice(index, 1);
    setFormList(data);
  };
  return (
    <div id="About" className="w-full h-auto slider ">
      <h2 className="text-green-600 font-semibold ">About</h2>
      <p className="text-gray-500 text-[15px]">
        provide your Detail information about your self.
      </p>
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
            <input
              value={firstname}
              type="text"
              onChange={(e) => dispatch(FirstName(e.target.value as string))}
              className="form-control bg-white"
            />
          </div>
          <div className=" space-y-2">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => dispatch(LastName(e.target.value as string))}
              className="form-control bg-white"
            />
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            placeholder="Assistant"
            className="form-control bg-white"
            value={designation}
            onChange={(e) => dispatch(Designation(e.target.value as string))}
          />
        </div>

        <div className="mt-3 flex space-x-3">
          <div className="space-y-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => dispatch(Address(e.target.value as string))}
              className="form-control bg-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => dispatch(City(e.target.value as string))}
              className="form-control bg-white"
            />
          </div>
        </div>

        <div className="mt-3 flex space-x-3">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => dispatch(Email(e.target.value as string))}
              className="form-control bg-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="Phone">Phone</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => dispatch(Phone(e.target.value as number))}
              className="form-control bg-white"
            />
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="Summery">Summery</label>
          <div className="w-full mt-1 h-[250px] rounded-md">
            <div className="p-2 flex  relative  cursor-pointer">
              <ReactQuill
                className=""
                theme="snow"
                value={summery}
                onChange={(data) => dispatch(Summery(data))}
              />
            </div>
          </div>
        </div>
        <div className="">
          {formList.map((form, index) => (
            <div className="flex items-center space-x-3 my-2" key={index}>
              <select className="form-control">
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
                className="form-control "
                value={form.field1}
                onChange={(event) => handleFormChange(event, index)}
              />
              <TrashIcon
                onClick={() => TrashHanlder(index)}
                className="h-12 hover:text-red-600 text-red-400"
              />
            </div>
          ))}

         <Button
            type="button"
            className="text-blue-500 flex space-x-2"
            onClick={addForm}
          >
            <PlusIcon className="h-6" /> 
          </Button>
        </div>

        <div className="mt-[100px]">
          <Button type="button" className="btn btn-primary block mx-auto">
            Next Page
          </Button>
        </div>
      </form>
    </div>
  );
};

export default About;
