import React from 'react'

import {Hero, WhatIdo,FeaturedProjects,CodeSnippet,SeeMore } from '../components'

import { codeSnippets } from '../constants'



const Home = () => {
  return (
    <section className='py-[61px]'>
      <Hero />
      <WhatIdo />
      <FeaturedProjects smallView={true} home={true } />

      {/* Code Snippets */}
      <div className='sm:block hidden'>
        <h1 className='font-sora font-bold text-[48px] leading-[56px] tracking-[1px] my-[60px]'>Code Snippets</h1>
        <div className='flex flex-wrap w-full justify-between gap-[30px] h-[670px] overflow-hidden'>
          {codeSnippets.map((snippet) => (
            <CodeSnippet title={snippet.title
            } description={snippet.description}  languages={snippet.languages} stars={snippet.stars} />
          )) }
        </div>
        <SeeMore to={"snippet"} smallView={true}/>
      </div>
    </section>
  )
}

export default Home