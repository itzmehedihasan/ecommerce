import React from 'react'

function Input({title,placeholder,type,className}) {
  //                 npm run dev

  return ( 
    <>
    <h5 className='font-dm font-bold text-base mt-6'>{title}</h5> 
    <input className={`w-full bg-white placeholder:text-dm placeholder:font-normal placeholder:text-sm outline-1 ${className}`} placeholder={placeholder} type={type}/>
    </>            
    )
} 

export default Input

  //                 npm run dev
