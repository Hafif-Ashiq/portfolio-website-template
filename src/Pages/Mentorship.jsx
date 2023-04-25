import React from 'react'
import {CourseOutline, MentorCards, SeeMore} from '../components'
import { mentorshipWeeks, mentorContent } from '../constants'
import manImg from "../assets/man.svg"

const Mentorship = () => {
  return (
    <section>
        <div className='flex sm:flex-row flex-col justify-between items-center '>
          <div className='flex flex-col gap-[20px] sm:mb-[50px] sm:justify-start justify-center sm:items-start items-center'>
            <h2 className='sm:text-[48px] text-[24px] font-sora font-bold leading-[56px] tracking-[1px] my-[45px]'>Mentorship</h2>
            <div className='flex flex-col gap-[25px] sm:justify-start justify-center sm:items-start items-center'>
              <p className='text-[#D6D6D6] sm:text-[18px] text-[14px] font-sora font-normal tracking-[0.014em] sm:leading-[32px] leading-[24px] max-w-[500px] sm:text-left text-center'>Spending a lot of time studying on your own and still feeling stuck?</p>
              <div className='flex gap-[15px]  items-center'>
                <div className='bg-gradient-to-br from-[#3BF686] from-40% to-[#4CA9FF] to-90% h-[77px] w-[5px]'></div>
                <p className='text-[#D6D6D6] sm:text-[18px] text-[14px] font-sora font-normal sm:leading-[32px] leading-[24px] tracking-[0.014em] max-w-[500px]'>This Frontend Mentorship is the answer to your problem. Because here, you will feel more personal mentoring</p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex sm:flex-row flex-col bg-secondary py-[29px] px-[53px] gap-[20px] rounded-[12px] mt-[70px]'>
              {mentorshipWeeks.map((week) => (
                  <CourseOutline title={week.title} key={week.title} para={week.para} />
                ))}
            </div>
            <div className='flex flex-col justify-end items-start'>
              <SeeMore smallView={true}/>
            </div>
          </div>
        </div>
            
        <div className='flex sm:flex-row flex-col justify-between sm:my-[70px] my-0 sm:gap-0 gap-[50px] sm:py-0 py-[40px]'>
          <div className='flex flex-col justify-center sm:items-start items-center gap-[30px]'>
          <h1 className='font-sora font-bold sm:text-[64px] text-[24px] leading-[56px] tracking-[1px] sm:max-w-[180px] max-w-full sm:text-left text-center sm:px-[80px] px-0'>Mentorship Benefits</h1>
            <img src={manImg} alt="" className='w-[500px] h-[500px] sm:block hidden'/>
          </div>
          <div className='flex flex-col justify-center items-center sm:gap-[30px] gap-[40px]'>
            {mentorContent.map((card) => (
              <MentorCards title={card.title} para={card.para} img={card.img} />
            ) )}
          </div>
        </div>
    </section>
  )
}

export default Mentorship