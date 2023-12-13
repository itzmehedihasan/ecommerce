import React from 'react'
import {GoTriangleRight} from 'react-icons/go'

function PrevArrow ( props ) {
const { className, style, onClick } = props;
// console.log("prev",props);

  return (
    
    <div className='flex justify-center items-center ml-16'>
      <div
          className={`bg-black inline-block p-4 rounded-[100%] text-white absolute bottom-0 justify-center hover:bg-white hover:text-black border hover:border-red-500 hover:border-r-4 duration-150 ${className }`}
          // style={{ ...style, display: "block", background: "green", padding:"2px" }}
          onClick={onClick}
          > <GoTriangleRight/>
        </div>
      </div>
  
  )
}
// bg-[#979797] w-16 h-16 block justify-center items-center text-white cursor-pointer 
export default PrevArrow;

  //                 npm run dev

   