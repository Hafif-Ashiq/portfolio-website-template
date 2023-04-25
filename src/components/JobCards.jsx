import React from 'react'

const JobCards = ({name, para, icon}) => {
  return (
    <div className='bg-secondary relative rounded-[12px]'>
        <div className='flex justify-center items-center'>
            <div className='absolute top-[-33px] '>
                <div >
                <div className='bg-gradient-to-br from-[#3BF686] from-40% to-[#4CA9FF] to-90% w-[72px] h-[72px] flex justify-center items-center rounded-[50%]'>
                    <div className='bg-secondary w-[70px] h-[70px] rounded-[50%] flex justify-center items-center'>
                        <img src={icon} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='px-[19px] pb-[15px] pt-[56px] sm:gap-0 gap-[11px] flex flex-col justify-center items-center max-w-[300px] '>
            <h2 className='font-sora font-semibold sm:text-[16px] text-[14px] sm:leading-[72px] leading-[24px]'>
                {name}
            </h2>
            <p className='font-inter font-normal sm:text-[14px] text-[12px] text-[#EFEDE8] sm:text-center sm:leading-[26px] leading-[20px] tracking-[1px] '>{para}</p>
        </div>
    </div>
  )
}

export default JobCards