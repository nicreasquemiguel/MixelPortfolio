import React from 'react'

const Skill = ({ src, title }) => {
  return (
    <div className=" max-w-96 rounded-lg grid place-content-center text-center invert">
        <div className="  bg-cover bg-no-repeat place-self-center">
            <img className="h-12 drop-shadow-[0px_-2px_0px_var(--tw-shadow-color)] shadow-white rounded-t-lg transition-all" src={src} alt={title} />
        </div>
        <div className="p-2 text-center">
            <p className=" text-sm uppercase font-bold">
            {title}
            </p>
        </div>
    </div>
    )
}

export default Skill