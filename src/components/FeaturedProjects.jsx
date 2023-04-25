import React from 'react'
import Projects from './Projects'
import { projs } from '../constants'
import SeeMore from './SeeMore'

const FeaturedProjects = ({smallView,home}) => {

  // const navigate = Navigate()

  return (
    <section className={`${home ?  "sm:flex hidden" : "flex" } flex-col`}>
        <h1 className={`${smallView ? "block" : "hidden"} font-sora font-bold sm:text-[48px] text-[24px] sm:leading-[56px] leading-[30px] tracking-[1px] my-[60px]`}>Featured Project</h1>
        <div className='flex flex-col gap-[66px]'>
            {projs.map((project) => (
                <Projects key={project.title} img={project.img} title={project.title} subject={project.subject} para={project.para} />
            ))}
        </div>
        <SeeMore to={"portfolio"} smallView= {smallView}/>
    </section>
  )
}

export default FeaturedProjects