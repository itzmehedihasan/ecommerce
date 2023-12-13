import React from 'react'

function Pragraph({text,className}) {
  return (
    <p className={`font-dm text-[#6D6D6D] text-base ${className}`}>{text}</p>
  )
}

export default Pragraph