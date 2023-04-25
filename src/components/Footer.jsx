import React from 'react'
import { footerLinks, footerIcons } from '../constants'

const Footer = () => {
  return (
    <footer className='sm:flex hidden flex-col justify-between items-center gap-[96px] py-[58px]'>
        <div className='border-solid border-[1px] border-[#4D4D4D] my-[10px] w-full'></div>
        <div className='flex flex-col justify-between items-center gap-[48px]'>
            <div className='flex flex-row gap-[64px] p-[10px] '>
            {footerLinks.map((link) => (
                <a href={link.url} key={link.id} className={`font-ibm font-medium text-[14px] text-[#F4F4F4]`}>
                {link.id}
            </a>
            ))}
            </div >
            <div className='flex flex-col justify-between items-center gap-[16px]'>
                <h4 className='font-ibm font-semibold text-[14px] text-[#F4F4F4]'>Reach Me Out</h4>
                <div className='flex flex-row justify-between items-center gap-[24px]'>
                    {footerIcons.map((link) => (
                        <a href={link.link}>
                            <img src={link.icon} key={link.name} alt="" className='w-[24px] h-[24px] cursor-pointer'/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer