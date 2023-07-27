"use client";

import {
  ArrowDownCircleIcon,
  ListBulletIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, {
  ChangeEvent,
  useRef,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {
  Address,
  City,
  Designation,
  Email,
  FirstName,
  LastName,
  Phone,
  Summery,
  Image,
} from "@/ReduxSlices/AboutSlice";

const About = ({SocialMedia, setSocialMedia}) => {
  const ClickingTheImageFile = useRef(null);
  const {
    firstname,
    lastname,
    designation,
    phone,
    email,
    city,
    address,
    summery,
    image,
  } = useSelector((state) => state.About);
  const dispatch = useDispatch();

  const addForm = () => {
    setSocialMedia([...SocialMedia, { linkname: "", links: "" }]);
  };

  // const handleFormChange = (
  //   event,
  //   index
  // ) => {
  //   const { name, value } = event.target;
  //   const updatedFormList = [...SocialMedia];
  //   (updatedFormList[index] )[name] = value;
  //   setSocialMedia(updatedFormList);
  // };

  const ClickTheFile = () => {
    if (ClickingTheImageFile.current) {
      ClickingTheImageFile.current.click();
    }
  };

  const TrashHanlder = (index) => {
    const data = [...SocialMedia];
    data.splice(index, 1);
    setSocialMedia(data);
  };

  const GetImage = (e) => {
    const data = e.target.files[0];
    if (data) {
      const images = URL.createObjectURL(data);
      dispatch(Image(images));
    }
  };

  const DeleteImage = () => {
    const imgs = "";
    dispatch(Image(imgs));
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
            <img src={image} className="w-full h-full rounded-full " alt="" />
          </div>
          <input
            ref={ClickingTheImageFile}
            onChange={GetImage}
            type="file"
            className="hidden"
          />
          <div className="">
            <h5
              onClick={ClickTheFile}
              className="flex items-center text-[18px] space-x-2 cursor-pointer"
            >
              <ArrowDownCircleIcon className="md:h-7 h-5 text-green-600" />{" "}
              <span className='md:text-[17px] text-[15px]'>Upload Image</span>
            </h5>
            <span
              onClick={DeleteImage}
              className="font-semibold text-red-600 text-[14px] space-x-2 cursor-pointer flex items-center ml-9"
            >
              <TrashIcon className="md:h-4  h-3  text-red-600" />{" "}
              <span className="text-[12px] md:text-[14px]">Delete Image</span>
            </span>
          </div>
        </div>

        <div className="mt-7 flex space-x-3">
          <div className="space-y-2">
            <label htmlFor="firstname">First Name</label>
            <input
              value={firstname}
              type="text"
              onChange={(e) => dispatch(FirstName(e.target.value ))}
              className="form-control bg-white"
            />
          </div>
          <div className=" space-y-2">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => dispatch(LastName(e.target.value ))}
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
            onChange={(e) => dispatch(Designation(e.target.value ))}
          />
        </div>

        <div className="mt-3 flex space-x-3">
          <div className="space-y-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => dispatch(Address(e.target.value))}
              className="form-control bg-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => dispatch(City(e.target.value))}
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
              onChange={(e) => dispatch(Email(e.target.value ))}
              className="form-control bg-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="Phone">Phone</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => dispatch(Phone(e.target.value ))}
              className="form-control bg-white"
            />
          </div>
        </div>

        <div className="mt-3 h-[280px] border-b-2 overflow-auto">
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
        <div className="mt-5">
          {SocialMedia.map((form, index) => (
             <div className="flex items-center space-x-3 my-2" key={index}>
              <select
                value={SocialMedia[index]?.linkname}
                onChange={(e) => {
                  const updateitem = [...SocialMedia];
                  updateitem[index].linkname = e.target.value;
                  setSocialMedia(updateitem);

                }}
                className="form-control"
              >
                <option>-slect option-</option>
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
                value={SocialMedia[index]?.links}
                onChange={(e) =>{
                  const updateitem = [...SocialMedia];
                  updateitem[index].links = e.target.value
                  setSocialMedia(updateitem);
                }}
              />
              <TrashIcon
                onClick={() => TrashHanlder(index)}
                className="h-12 hover:text-red-600 text-red-400"
              />
            </div>
          ))}

          <Button
            type="button"
            className="text-blue-500  flex items-center justify-center flex-col space-x-2"
            onClick={addForm}
          >
          <span>Add social link</span>
          </Button>
        </div>

        <div className="mt-[100px]">
          <a href="#Education" type="button" className="btn btn-primary block mx-auto">
            Next Page
          </a>
        </div>
      </form>
    </div>
  );
};

export default About;
