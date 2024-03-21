import React from 'react'

const Landing = () => {
  return (
    <section className='  h-dvh  grid min-h-[600px] xxs:grid-cols-1 sm:grid-cols-2 items-center text-center snap-mandatory snap-y'>
        <div className='bg-sky-200    dark:bg-white bg-grainy- bg-blend-multiply dark:bg-screen bg-cover h-full flex items-center justify-center'>
      

              <img className='p-10 mix-blend-luminosity dark:mix-blend-darken sm:h-svh sm:w-auto sm:max-h-[500px] 'src='banner-pc.png' />



        </div>
        <div className='bg-red-700 h-full  text-center  dark:bg-black bg-blend-overlay dark:bg-blend-multiply bg-cover  grid place-content-center p-10'>
            <img src='fire.png' className=' invert place-self-center pb-3 max-w-80 xs:w-2/6 sm:w-3/4' />
            <h1 className='font-nectarine text-white  drop-shadow-[0px_-2px_0px_var(--tw-shadow-color)] shadow-black tracking-widest text-4xl  text-center font-bold pb-3'>
              Miguel Pineda
            </h1>
            <p className='font-madami xs:px-16 sm:px-32 text-white xs:text-xl sm:text-xl drop-shadow-[0px_-2px_0px_var(--tw-shadow-color)] shadow-black text-lg'> 
            Versatile software developer with expertise in Python/Django backend development and a strong understanding of front-end technologies. Crafting robust and scalable solutions. Also extensive experience in IT support, ensuring smooth operations and troubleshooting technical issues.
            </p>
        </div>
    </section>
  )
}

export default Landing