"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "./Loading/page";

export default function Home() {
  const [myloading, setMyloading] = useState(false);

  const { users } = useSelector((state) => state.users);
  return (
    <main className="w-screen ">
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="flex  w-full flex-col items-center justify-start "
      >
        <div className="mt-[100px] md:mt-[170px] text-center  mb-[40px] md:mb-[60px]">
          <h1 className=" text-[50px] md:mx-0 mx-2 md:text-[55px] heading font-extrabold text-gray-800">
            Create a Proffesional CV{" "}
          </h1>
          <p className="text-center mt-[20px] mb-5 text-[15px] md:text-[17px] font-semibold mx-[50px] md:mx-[100px] lg:mx-[200px] xl:mx-[400px] leading-6 md:leading-8  text-gray-500">
            Create your best Cv for the job Interview or anywhere Faster and
            easy Way. We provide the best user friendly dashboard for managing
            the content and the cv.
          </p>
        </div>
        <div onClick={() => setMyloading(true)} className="CvCreatorLink">
          {users?._id ? (
            <div className="cvlinks relative">
              <Link className="text-white w-full h-full hover:tracking-widest  absolute top-0 left-0 rounded-full flex items-center justify-center" href={`/CreateCV`} prefetch>
                {myloading ? <Loading /> : "Create Cv"}
              </Link>
            </div>
          ) : (
            <div className="cvlinks relative">
              <Link className="text-white w-full h-full hover:tracking-widest absolute top-0 left-0 rounded-full flex items-center justify-center" href={`/LoginPage`} prefetch>
                {myloading ? <Loading /> : "Create Cv"}
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
