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


  return (
    <div className=" h-full hidden sm:w-[100px]  md:w-[200px] mt-6 md:mt-0 overflow-auto leftbox">
      <div className="md:h-[150vh] h-[125vh]   w-full flex-col  flex items-center p-3 justify-center">
        <a href="#About">
          <Button className="btn ">
            {" "}
            <UserIcon className="h-8 icons text-gray-500" /> <span>About</span>{" "}
          </Button>
        </a>
        <a href="#Education">
          <Button className="btn ">
            {" "}
            <AcademicCapIcon className="h-8 icons text-gray-500" />{" "}
            <span>Education</span>
          </Button>
        </a>
        <a href="#Experience">
          <Button className="btn ">
            <BriefcaseIcon className="h-8 icons text-gray-500" />{" "}
            <span>Experience</span>
          </Button>
        </a>
        <a href="#Projects">
          {" "}
          <Button className="btn ">
            {" "}
            <RocketLaunchIcon className="h-8 icons text-gray-500" />{" "}
            <span>Projects</span>
          </Button>
        </a>
        <a href="#Skills">
          <Button className="btn ">
            {" "}
            <LightBulbIcon className="h-8 icons text-gray-500" />{" "}
            <span>Skills</span>
          </Button>
        </a>
        <a href="#Achivements">
          <Button className="btn ">
            {" "}
            <TrophyIcon className="h-8 icons text-gray-500" />{" "}
            <span>Achivements</span>
          </Button>
        </a>
        <a href="#Traning">
          <Button className="btn ">
            {" "}
            <WindowIcon className="h-8 icons text-gray-500" />{" "}
            <span>Traning</span>
          </Button>
        </a>
        <a href="#Awards">
          <Button className="btn ">
            {" "}
            <GiftIcon className="h-8 icons text-gray-500" /> <span>Awards</span>
          </Button>
        </a>
        <a href="#Language">
          <Button className="btn ">
            <LanguageIcon className="h-8 icons text-gray-500" />{" "}
            <span>Language</span>
          </Button>
        </a>
        <a href="#Reference">
          <Button className="btn ">
            <UserPlusIcon className="h-8 icons text-gray-500" />{" "}
            <span>Refrence</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CvPageContent;
