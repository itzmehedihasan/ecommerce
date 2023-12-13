import React from 'react'
import Image from './Image'
import product from '../assets/pngFile/product2.png'
import Budge from './Budge'
import PortionHeading from './PortionHeading'
import { AiFillHeart } from 'react-icons/ai';
import ReaturnCercle from '../assets/SvgFile/ReaturnCercle'
import { HiShoppingCart } from 'react-icons/hi';

HiShoppingCart
function Product() {
  //                 npm run dev

  return (
    <>
  <div className='mx-3 p-8 relative'>
      <div className="relative overflow-y-hidden group">
          <Image src={product} className="w-full"/>
          <Budge text='new'/>   
          <div className='absolute w-full bottom-[-20] right-0 bg-[F5F5F5] pr-2 group-hover:bottom-0 duration-700'>
                  <div1 className='flex items-center justify-end gap-x-2'>
                    <p className='font-dm font-normal text-base text-[#767676]'>Add to Wish List</p>
                    <AiFillHeart/>
                  </div1>

                  <div2 className='flex items-center justify-end gap-x-2'>
                      <p className='font-dm font-normal text-base text-[#767676]'>Compare</p>       
                    <ReaturnCercle/>
                  </div2>

                  <div3 className='font-dm font-bold text-base flex items-center justify-end gap-x-2 pb-2'>
                    <p>Add to Cart</p>
                    <HiShoppingCart/>
                  </div3>
          </div>
      </div>

                  <div className='flex justify-between mt-4'>
                    <PortionHeading text="Basic Crew Neck Tee"/>
                      <p className='font-dm font-normal text-base'>$44.00</p>
                 
                      
                  </div>
                      <p className='font-dm font-normal text-base text-[#767676] my-4'>Black</p>
  </div>
  <div className='bg-red-500 w-100px h-50px'></div>
  </>
  )
}

export default Product

  //                 npm run dev
