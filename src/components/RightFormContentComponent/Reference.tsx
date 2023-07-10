"use client";

import { ArrowDownCircleIcon, ChevronDownIcon, ListBulletIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";

const Reference: React.FC = () => {
  const Textbox = useRef<HTMLInputElement>(null);
  const [values, setValue] = useState<String>(''); 
  const [EducationBoxHover, setEducationBoxHover] = useState<Boolean>(false);
  const [EducationForm, setEducationForm] = useState<Form[]>([{string: '', isHoverd:false}]);

  interface Form {
    string :string;
    isHoverd:Boolean;
  }


  const AddEducationFormFeild = () => {
    setEducationForm([...EducationForm, {string:'', isHoverd:false}])
  }


  const HoverEducationBox = (index:number) => {
    setEducationForm((preitem) =>{
      const data = [...preitem];
      const newData = data.map((objs:any, i:number) =>{
       return i === index ? {...objs, isHoverd: !data[index].isHoverd} :{...data, isHoverd:false}
      } )
      return newData;
    })
  }



  const DeleteEducationBox = (index:number) => {
    if(EducationForm.length as any > 1) {
      const data = [...EducationForm];
      data.splice(index, 1);
      setEducationForm(data);
    }else{
      // remove the data from the education form
    }
  }


  return (
    <div className="w-full h-auto my-5">
      <h2 className="text-green-600 font-semibold w-full h-full ">Reference</h2>
      <p className="text-gray-500 h-full w-full text-[15px]">Add your references. It can be anyone from your co-workers, employers, or even professors.</p>
      {
        EducationForm?.map((item, index) => {
          return (
      <form  key={index} className={` ${item.isHoverd ? 'h-[560px] ' : 'h-[60px] '} border-b border-gray-300  overflow-hidden transition-all duration-400 my-6  w-full`}>
        <div   className="flex justify-between items-center cursor-pointer hover:text-blue-500">
          <h4 onClick={() =>HoverEducationBox(index)} className="text-[19px] hover:text-blue-500 text-gray-600">Reference</h4>
          <div  className="flex justify-between items-center space-x-4">
          <ChevronDownIcon onClick={() =>HoverEducationBox(index)} className={`h-6 ${EducationBoxHover? 'transform':''}  text-gray-600`}/>
            <TrashIcon onClick={() => DeleteEducationBox(index)}  className="h-5 text-red-600 hover:texta-red-700"/>
          </div>
        </div>
        <div className="mt-7 space-x-3  flex ">
          <div className=" ">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" placeholder="Reema" name="firstName" className="form-control bg-white" />
          </div>
          <div className=" ">
            <label htmlFor="LastName">Last Name</label>
            <input type="text" name="LastName" placeholder="Sharma" className="form-control bg-white" />
          </div>
        </div>

        <div className="mt-3 flex space-x-3">
          <div className="space-y-2">
            <label htmlFor="Company">Company</label>
            <input type="text" name="Company" placeholder="Info tech solutions" className="form-control bg-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="Designation">Designation</label>
            <input type="text" name="Designation" placeholder="Manager" className="form-control bg-white" />
          </div>
        </div>

        <div className="mt-3 flex space-x-3">
          <div className="space-y-2">
            <label htmlFor="phone">Phone</label>
            <input type="number" name="phone" placeholder="983474362" className="form-control bg-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" placeholder="example@gmail.com" className="form-control bg-white" />
          </div>
        </div>

      </form>)
        })

      }

        <div className="">
        <button type='button' className='text-blue-500 flex space-x-2' onClick={AddEducationFormFeild}><PlusIcon className='h-6'/> Add Form</button>
        </div>
        <div className="mt-[50px] ">
            <button type='button' className='btn btn-primary block mx-auto' >Next Page</button>
        </div>
    </div>
  );
};

export default Reference;
