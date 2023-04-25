import React from 'react'
import {  biography,footerIcons } from '../constants'
import bitmoji from "../assets/bitmoji.png"
import { mainHeading } from '../constants'

const HeroHome = () => {
  return (
    <div className='sm:flex-col  flex flex-col-reverse justify-center items-start gap-[62px] '>
          <h1 className='bg-gradient-to-br from-[#3BF686] from-40% to-[#4CA9FF] to-90% bg-clip-text text-transparent font-sora font-bold sm:text-[56px] text-[22px] sm:leading-[72px] leading-[36px] tracking-[1px] max-w-[1030px] md:text-left text-center'>
            {mainHeading}
          </h1>
          <div className='flex md:flex-row flex-col sm:justify-start justify-center w-full items-center sm:gap-0 gap-[22px] '>
            <div>
              <div className='bg-gradient-to-br from-[#3BF686] from-40% to-[#4CA9FF] to-90% w-[155px] h-[155px] flex justify-center items-center rounded-[50%]'>
                  <div className='bg-primary w-[148px] h-[148px] rounded-[50%] flex justify-center items-center'>
                      <img src={bitmoji} alt="" />
                  </div>
              </div>
            </div>
            <div className='flex md:flex-row flex-col sm:justify-around justify-center sm:items-start items-center   w-full gap-[85px]'>
              <div className='sm:flex hidden  flex-col items-start'>
                <h2 className='text-[28px] font-sora font-bold leading-[72px] tracking-[1px]'>Biography</h2>
                <p className='text-[#D6D6D6] text-[18px] font-sora font-normal leading-[32px] max-w-[500px]'>
                  {biography}
                </p>
              </div>
            
              <div className='flex flex-col gap-[10px] '>
                <h2 className='sm:block hidden text-[28px] font-sora font-bold leading-[72px]'>Let's Connect</h2>
                <div className='flex gap-[17px] items-center justify-center w-full'>
                  {footerIcons.map((link) => (
                    <img src={link.icon} key={link.name} alt="" className='w-[32px] h-[32px]' />
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default HeroHome