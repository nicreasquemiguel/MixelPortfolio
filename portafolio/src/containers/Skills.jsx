import React from 'react'
import Skill from '../components/Skill'

const Skills = () => {
  return (
    <section className='  h-dvh  grid min-h-[600px] xxs:grid-cols-1 sm:grid-cols-2 items-center text-center snap-mandatory snap-y'>
        <div className='bg-green-700 h-full  text-center  dark:bg-black bg-blend-overlay dark:bg-blend-multiply bg-cover  grid place-content-center p-10'>
            <img src='brain.png' className=' invert place-self-center pb-3 max-w-80 xs:w-1/6 sm:w-2/6' />
            <h1 className='font-nectarine text-white pb-5  drop-shadow-[0px_-2px_0px_var(--tw-shadow-color)] shadow-black tracking-widest text-4xl  text-center font-bold '>
              Skills
            </h1>

            <div className='grid grid-cols-5  gap-8 px-10'>
                <Skill src="technologies/python.svg" title="Python" />
                <Skill src="technologies/django.svg" title="Django" />
                <Skill src="technologies/apis.svg" title="REST API's" />
                <Skill src="technologies/javascript.svg" title="Javascript" />
                <Skill src="technologies/html.svg" title="HTML" />
                <Skill src="technologies/css.svg" title="CSS" />
                <Skill src="technologies/tailwind.svg" title="Tailwind" />
                <Skill src="technologies/bootstrap.svg" title="Bootstrap" />
                <Skill src="technologies/sql.svg" title="SQL/NO SQL" />
                <Skill src="technologies/git.svg" title="Git" />
                <Skill src="technologies/support.svg" title="IT Support" />
                <Skill src="technologies/network.svg" title="General Networks" />
                <Skill src="technologies/hardware.svg" title="Hardware" />
                <Skill src="technologies/security.svg" title="Security" />
                <Skill src="technologies/pc.svg" title="Operating Systems" />
            </div>
        </div>
        <div className='bg-yellow-500    dark:bg-white bg-grainy- bg-blend-multiply dark:bg--screen bg-cover h-full flex items-center justify-center'>
      

              <img className='p-10 mix-blend-luminosity dark:mix-blend-darken sm:h-svh sm:w-auto sm:max-h-[500px] 'src='banner-pc.png' />



        </div>

    </section>
  )
}

export default Skills