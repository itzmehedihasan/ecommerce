import React from 'react'
import { CiShoppingTag } from 'react-icons/ci';
import Flex from './Flex';
import IconReturn from '../assets/SvgFile/iconreturn';


function Facility() {
  //                 npm run dev

  return (
    <div> 
        <Flex className="items-center gap-x-4">
          <CiShoppingTag/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, suscipit.</p>
          <IconReturn/>
        </Flex>
    </div>
  )
}

export default Facility

  //                 npm run dev
