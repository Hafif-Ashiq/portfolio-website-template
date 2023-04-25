import React from 'react'
import search from "../assets/Search.svg"
import { codeSnippets } from '../constants'
import { CodeSnippet } from '../components'

const CodeSnippetPage = () => {
  return (
    <div>
        <h2 className='sm:text-[48px] text-[24px] font-sora font-bold leading-[56px] tracking-[1px] my-[45px]'>Code Snippet</h2>
        <p className='sm:block hidden font-inter font-bold text-[18px] leading-[48px] tracking-[1px]]'>Search Code Snippet</p>
        <div className='relative flex items-center justify-center z-0'>
            <input type="text" placeholder='Type your favorite snippet here...' className='bg-secondary text-[#9C9C9C] w-full sm:px-[26px] px-[19px] sm:text-[18px] text-[14px] sm:py-[23px] py-[9px] rounded-[10px] '/>
            <img src={search} alt=""  className='sm:w-[37px] sm:h-[37px] w-[18px] h-[18px] absolute top-[25%] sm:right-[23px] right-[12px] cursor-pointer'/>
        </div>
        
            
            <div className='flex flex-wrap w-full justify-between gap-[30px]  overflow-hidden sm:py-[28px] py-[16px]'>
            {codeSnippets.map((snippet) => (
                <CodeSnippet title={snippet.title
                } description={snippet.description} key={snippet.title}  languages={snippet.languages} stars={snippet.stars} />
            )) }
            </div>
            
    </div>
  )
}

export default CodeSnippetPage