import React from 'react'

function Button({text,className}) {
  return (
    <button className={`font-dm font-bold text-sm px-16 py-4 bg-black text-white border border-solid border-tarnsparent border-1 hover:bg-white hover:text-black border hover:border-black duration-500 ${className}`}>{text}</button>
  )
}

export default Button

  //                 npm run dev
