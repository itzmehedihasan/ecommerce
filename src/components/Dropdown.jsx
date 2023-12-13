import React, { useRef } from 'react'


function Dropdown() {

  //                 npm run dev

  // =============== variable ====================//
    let dropRef = useRef (null)

  // =============== function ====================//

  let handleClick=(e)=>{
      if(e.target.classList[6]=="click"){
       if(dropRef.current.style.display=="block"){
        dropRef.current.style.display="none"
       }else{
        dropRef.current.style.display="block"
       }
    }else{
      if(dropRef.current.style.display=="block"){
        dropRef.current.style.display="none"
      }
    }
 }

  return (
    <>
    <div onClick={handleClick}>
      <button className="items-center mt-8 mb-8 block ml-[870px] hover:underline click text-3xl">  Dropdown Button </button>
      <div className='bg-red-500 mt-4 mb-8 p-2 hidden'ref={dropRef}>
         <ul>
            <li className='border border-y-black  border-x-transparent py-2 text-center text-xl'>Home</li>
            <li className='border border-y-black border-x-transparent py-2 text-center text-xl'>About</li>
            <li className='border border-y-black border-x-transparent  py-2 text-center text-xl'>Service</li>
            <li className='border border-y-black border-x-transparent  py-2 text-center text-xl'>Contact</li>
         </ul>
      </div>
      <h2 className='text-xl mb-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel laborum animi reiciendis corrupti iure ex facere doloribus, ullam maxime!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel laborum animi reiciendis corrupti iure ex facere doloribus, ullam maxime!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel laborum animi reiciendis corrupti iure ex facere doloribus, ullam maxime!</h2>
    </div>

    </>
  )
}

export default Dropdown

  //                 npm run dev
