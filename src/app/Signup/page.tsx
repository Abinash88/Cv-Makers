"use client";

import React, { FormEvent, useState } from "react";
import {toast} from 'react-hot-toast'
import {useRouter} from 'next/navigation'
import Button from "react-bootstrap/esm/Button";


const LoginPage:React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const SubmitSignupData = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      toast.success(data.message);
      router.push('/LoginPage')
    } catch (err:any) {
      console.log(err.message);
    }
  };

  return (
    <div
      style={{ height: "calc(100vh - 70px)" }}
      className="bg-gray-100 w-full "
    >
      <div className="px-[50px] flex justify-center items-center h-full lg:w-[80%] w-[100%] m-auto">
        <div className="left flex-col justify-start pt-[100px] lg:flex hidden w-[50%] h-full ">
          <h1 className="text-[50px] font-bold text-gray-600 ">Cv Maker</h1>
          <p className="mt-3">Cv app for your easy cv Creating purpose</p>
        </div>
        <div className="right lg:w-[50%] w-[100%] flex items-center justify-center bg-white h-auto py-4">
          <form onSubmit={SubmitSignupData} className="w-[80%] h-[90%] " action="">
            <div className="w-full h-[50px]">
              <h2 className="text-center text-gray-900 font-semibold">
                Signup
              </h2>
            </div>
            <div className="w-full mt-10  mb-3 ">
              <label htmlFor="email" className="text-gray-600 text-[17px]">
                User Name
              </label>
              <input
                type="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 mt-1 rounded-md px-4 bg-blue-50 text-[17px] h-[50px] py-2 w-full"
                placeholder="User Name"
              />
            </div>
            <div className="w-full   mb-3 ">
              <label htmlFor="email" className="text-gray-600 text-[17px]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 mt-1 rounded-md px-4 bg-blue-50 text-[17px] h-[50px] py-2 w-full"
                placeholder="User Email"
              />
            </div>
            <div className="w-full  mb-3 ">
              <label htmlFor="email" className="text-gray-600 text-[17px]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 mt-1 rounded-md px-4 bg-blue-50 py-2 text-[17px] h-[50px] h- w-full"
                placeholder="Password"
              />
            </div>
            <Button
              className="mx-auto px-5 lg:py-3 py-[10px] block mt-4 bg-green-600 hover:bg-green-700 text-white rounded-lg "
              type="submit"
            >
              Submit
            </Butt>{" "}
            <br />
            <div className="w-full text-center">
              <p>or</p>
              <a href="/LoginPage">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
