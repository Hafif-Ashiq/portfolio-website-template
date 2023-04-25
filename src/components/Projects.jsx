import React from 'react'
import arrow from "../assets/Arrowup.svg"

const Projects = ({subject, title, para, img}) => {
  return (
    <div className='flex md:flex-row flex-col justify-start gap-[74px]'>
        <div className='flex md:flex-row flex-col-reverse justify-start sm:gap-[100px] gap-[20px]'>
          <div className='relative md:w-[555px] w-full '>
              <img src={img} alt="" />
              <img src={arrow} alt="" className='sm:p-[4px] p-[1px] bg-[#3F4152] absolute sm:right-[8px] right-[4px] sm:top-[10px] top-[4px] rounded-[9px] cursor-pointer'/>
          </div>
          <div className='flex flex-col justify-center items-start sm:gap-[22px] gap-0'>
              <div className='flex md:flex-col flex-col-reverse gap-[11px]'>
                <h5 className='font-inter font-bold text-[18px] leading-[24px] tracking-[1px] text-[#DEDEDE]'>{subject}</h5>
                <h1 className='font-sora font-bold sm:text-[48px] text-[24px] sm:leading-[56px] leading-[30px] tracking-[1px]'>{title}</h1>
              </div>
              <p className='md:block hidden font-inter font-normal text-[18px] leading-[32px] text-[#D4D4D4] max-w-[800px] '>{para}</p>
              
          </div>
        </div>
        <p className='md:hidden block font-inter font-normal text-[16px] leading-[32px] tracking-[1px] text-[#D4D4D4] max-w-[800px] '>{para}</p>
    </div>
  )
}

export default Projects