"use client";

import React from "react";
import {
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  TrophyIcon,
  WindowIcon,
  GiftIcon,
  LanguageIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

const CvPageContent = () => {
  // if (typeof window !== "undefined") {
  //   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //     anchor.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       const target = document.querySelector(this.getAttribute("href"));
  //       target?.scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     });
  //   });
  // }

  return (
    <div className=" h-full w-[200px] overflow-auto leftbox">
      <div className="h-[150vh]   w-full flex-col  flex items-center p-3 justify-center">
        <a href="#About">
          <button className="btn ">
            {" "}
            <UserIcon className="h-8 icons text-gray-500" /> <span>About</span>{" "}
          </button>
        </a>
        <a href="#Education">
          <button className="btn ">
            {" "}
            <AcademicCapIcon className="h-8 icons text-gray-500" />{" "}
            <span>Education</span>
          </button>
        </a>
        <a href="#Experience">
          <button className="btn ">
            <BriefcaseIcon className="h-8 icons text-gray-500" />{" "}
            <span>Experience</span>
          </button>
        </a>
        <a href="#Projects">
          {" "}
          <button className="btn ">
            {" "}
            <RocketLaunchIcon className="h-8 icons text-gray-500" />{" "}
            <span>Projects</span>
          </button>
        </a>
        <a href="#Skills">
          <button className="btn ">
            {" "}
            <LightBulbIcon className="h-8 icons text-gray-500" />{" "}
            <span>Skills</span>
          </button>
        </a>
        <a href="#Achivements">
          <button className="btn ">
            {" "}
            <TrophyIcon className="h-8 icons text-gray-500" />{" "}
            <span>Achivements</span>
          </button>
        </a>
        <a href="#Traning">
          <button className="btn ">
            {" "}
            <WindowIcon className="h-8 icons text-gray-500" />{" "}
            <span>Traning</span>
          </button>
        </a>
        <a href="#Awards">
          <button className="btn ">
            {" "}
            <GiftIcon className="h-8 icons text-gray-500" /> <span>Awards</span>
          </button>
        </a>
        <a href="#Language">
          <button className="btn ">
            <LanguageIcon className="h-8 icons text-gray-500" />{" "}
            <span>Language</span>
          </button>
        </a>
        <a href="#Reference">
          <button className="btn ">
            <UserPlusIcon className="h-8 icons text-gray-500" />{" "}
            <span>Refrence</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default CvPageContent;
