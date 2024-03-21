import React from 'react'
import Landing from './Landing'
import Skills from './Skills'

const Home = () => {
  return (
    <div className='min-h-[600px] grid grid-cols-1 place-self-center items-center justify-center place-content-center snap-y snap-mandatory overflow-scroll'>
        <Landing className='snap-start'/>
        <Skills className='snap-start'/>
    </div>
  )
}

export default Home