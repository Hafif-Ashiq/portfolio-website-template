import React from 'react'

const MentorCards = ({img,title,para}) => {
  return (
    <div className='flex relative sm:px-[98px] px-[20px] py-[20px] bg-secondary sm:h-[220px] h-[180px] rounded-[12px]'>
        <div className='bg-gradient-to-br from-[#3BF686] from-40% to-[#4CA9FF] to-90% sm:w-[120px] sm:h-[120px] w-[60px] h-[60px] flex justify-center items-center rounded-[50%] absolute sm:left-[-60px] left-[39%] sm:top-[25%] top-[-30px]'>
                  <div className='bg-primary sm:w-[116px] w-[56px] sm:h-[116px] h-[56px] rounded-[50%] flex justify-center items-center'>
                      <img src={img} alt="" className='sm:w-[54px] w-[27px] sm:h-[54px] h-[27px]'/>
                  </div>
        </div>
        <div className='flex flex-col justify-center sm:items-start items-center sm:gap-0 gap-[15px]'>
            <h1 className='sm:text-[28px] text-[22px] font-sora font-bold sm:leading-[72px] leading-[20px] max-w-[500px]'>{title}</h1>
            <p className='text-[#C9C9C9] sm:text-[18px] text-[14px] font-inter font-normal sm:leading-[24px] leading-[20px] max-w-[500px] text-center '>{para}</p>
        </div>
    </div>
  )
}

export default MentorCards