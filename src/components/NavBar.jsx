import React, { useState } from 'react'
import {navLinks,name} from "../constants/index"
import { NavLink } from 'react-router-dom'
import menu from "../assets/menu.svg"

const NavBar = () => {

    const [toggle,setToggle] = useState(false);

  return (
    <nav >
        <div className='flex items-center justify-between '>
            <h2 className='text-white font-poppins font-bold sm:text-[24px] text-[18px] py-[18px]'>
                {name}
            </h2>
            <div className='sm:flex hidden flex-col'>
                <ul className='list-none flex flex-row md:gap-[64px] gap-[20px] p-[10px]'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <NavLink to={link.url}  className={ ({isActive}) => isActive? `font-inter font-semibold text-[16px] tracking-[1px] leading-[80.5px] ` : `font-inter font-semibold text-[16px] tracking-[1px] leading-[80.5px] text-grey`}>
                                {link.id}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='sm:hidden block '>
                <img src={menu} alt="" 
                className='w-[32px] h-[32px]'
                onClick={() => setToggle((prev) => !prev)}
                />

            </div>
            <div className={`${toggle? "flex" : "hidden"} justify-center items-center absolute top-[70px] right-[20px] min-w-[140px] rounded-xl sidebar bg-gradient-to-br from-[#3BF686] from-40% to-[#4CA9FF] to-90% z-50` }>

            
                <div className={`bg-primary min-w-[138px] rounded-xl`}>
                    <ul className='list-none flex flex-col  justify-center items-center w-full py-[10px] gap-[10px]'>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <NavLink to={link.url}  className={ ({isActive}) => isActive? `font-inter font-semibold text-[16px] tracking-[1px] cursor-pointer text-center py-[10px]` : ` text-center font-inter font-semibold text-[16px] tracking-[1px] text-grey cursor-pointer`}>
                                    {link.id}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
        <div className='border-solid border-[1px] border-[#4D4D4D] sm:my-[10px] my-[2px]'>
        </div>
    </nav>
  )
}

export default NavBar