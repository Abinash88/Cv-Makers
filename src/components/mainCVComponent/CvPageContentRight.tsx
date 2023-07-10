import React from 'react'
import About from '../RightFormContentComponent/About'
import Education from '../RightFormContentComponent/Education'
import Experience from '../RightFormContentComponent/Experience'
import Projects from '../RightFormContentComponent/Projects'
import Skills from '../RightFormContentComponent/Skills'
import Achivements from '../RightFormContentComponent/Achivements'
import Traning from '../RightFormContentComponent/Traning'
import Awards from '../RightFormContentComponent/Awards'
import Language from '../RightFormContentComponent/Language'
import Reference from '../RightFormContentComponent/Reference'

const CvPageContentRight = () => {
  return (
    <div className=' h-full rounded-lg w-[500px] overflow-auto border-l border-gray-300 p-5'>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Achivements/>
      <Traning/>
      <Awards/>
      <Language/>
      <Reference/>
    </div>
  )
}

export default CvPageContentRight