import React from 'react'
import emoji from  "../assets/emoji.svg"

const CourseOutline = ({title,para}) => {
  return (
    <div className='flex flex-col justify-start items-start gap-[20px]'>
        <div className='flex gap-[10px] justify-start items-center'>
            <img src={emoji} alt="" />
            <h2 className='sm:text-[24px] text-[18px] font-sora font-bold sm:leading-[32px] leading-[20px] max-w-[80px]'> {title}</h2>
        </div>
        <p className='text-[#D6D6D6] sm:text-[18px] text-[14px] font-inter font-normal sm:leading-[24px] leading-[20px] max-w-[180px]' >{para}</p>
    </div>
  )
}

export default CourseOutline