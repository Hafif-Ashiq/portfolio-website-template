import React from 'react'
import { biography, jobCards, whatIdo } from '../constants'
import arrow from "../assets/arrow.svg"
import JobCards from './JobCards'


const WhatIdo = () => {
  return (
    <div className=''>
        <div className='sm:hidden flex  flex-col items-center justify-center  py-[22px]'>
          <h2 className='text-[20px] font-sora font-bold leading-[30px] tracking-[1px] text-center w-full mb-[12px]'>Biography</h2>
          <p className='text-[#D6D6D6] sm:text-[18px] text-[14px] font-sora font-normal sm:leading-[32px] leading-[24px]'>
            {biography}
          </p>

        </div>
        <div className='flex md:flex-row flex-col justify-between items-center sm:py-[81px] gap-[45px]'>
          <div>
            <h2 className='sm:text-[28px] text-[20px] font-sora font-bold leading-[72px] tracking-[1px] sm:text-left text-center'>What I do</h2>
            <p className='text-[#D6D6D6] sm:text-[18px] text-[14px] font-sora font-normal sm:leading-[32px] leading-[24px] max-w-[600px]'>
              {whatIdo}
            </p>
          </div>
          <div className='flex  gap-[30px] flex-row my-26px'>
            {jobCards.map((card) => (
              <JobCards name={card.title} para={card.para} icon={card.icon} key={card.title}/>
            ))}
          </div>
          <img src={arrow} alt="" className='md:block hidden cursor-pointer'/>
        </div>

      </div>
  )
}

export default WhatIdo