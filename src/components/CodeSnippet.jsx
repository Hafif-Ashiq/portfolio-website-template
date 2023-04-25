import React from 'react'
import star from "../assets/star.png"

const CodeSnippet = ({title,description,stars,languages}) => {
  return (
    <div className='flex flex-col justify-between items-start sm:w-[600px] w-full gap-[86px] bg-secondary sm:px-[40px] px-[23px] py-[24px] rounded-[20px] cursor-pointer'>
        <div className='flex flex-col justify-between items-start gap-[3px]'>
          <h2 className='font-sora font-bold sm:text-[28px] text-[20px]  sm:leading-[72px] leading-[30px] tracking-[1px]'>{title}</h2>
          <p className='font-inter font-normal sm:text-[18px] text-[14px] sm:leading-[32px] leading-[24px] sm:tracking-[0.014em] tracking-[0.006em]'>{description}</p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex gap-[16px] justify-start items-center'>
            {languages.map((lang) => (
              <img src={lang} alt="" className='sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]' />
            ))}
          </div>
          <p className='font-inter font-normal sm:text-[18px] text-[14px] sm:leading-[32px] leading-[24px] tracking-[0.014em] flex justify-center items-center p-[4px]'>
            <img src={star} alt="" /> {stars} Stars  
          </p>
        </div>
    </div>
  )
}

export default CodeSnippet