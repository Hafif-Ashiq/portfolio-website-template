import React from 'react'
import arrow from "../assets/ArrowOrnament.svg"
import { FeaturedProjects } from '../components'

const Portfolio = () => {
  return (
    <div>
        <div className='flex gap-[30px] justify-start items-center '>
            <h2 className='sm:text-[48px] text-[24px] font-sora font-bold leading-[56px] tracking-[1px] my-[45px] max-w-[450px]'>Projects that i have <span className='text-[#3BF686]'>Done</span></h2>
            <img src={arrow} alt="" className='sm:block hidden'/>
        </div>
        <FeaturedProjects />
    </div>
  )
}

export default Portfolio