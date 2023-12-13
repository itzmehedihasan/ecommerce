import React from 'react'

function Budge({text,className}) {
  return (
    <div className={`font-dm font-normal text-sm bg-black text-white inline-block px-7 py-2
    absolute top-5 left-5 cursor-pointer ${className}`}>{text}</div>
  )
}

export default Budge

  //                 npm run dev


