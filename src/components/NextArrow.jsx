import React from 'react'
import {GoTriangleLeft} from 'react-icons/go'

function NextArrow ( props ) {
  //                 npm run dev

    const { className, style, onClick } = props;
    // console.log("next",props);
  return (

    <div className='flex justify-center items-center mr-16 mt-8'>
    <div
    className={`flex bg-black w-12 h-12 rounded-full display-block justify-center items-center text-white cursor-pointer hover:bg-white hover:text-black border hover:border-red-500 hover:border-l-4 duration-150 ${className}`}
    // style={{ ...style, display: "block", background: "green", padding:"2px" }}
    onClick={onClick}
  ><GoTriangleLeft/></div>
  </div>

  )
}

export default NextArrow;

  //                 npm run dev
