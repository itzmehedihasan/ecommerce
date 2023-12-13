import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdCart,IoMdSearch } from "react-icons/io";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { pageName } from '../../slices/breadCrumb'

//            npm run dev  

function SearchNav() {

  let dispatch = useDispatch()

  let handleBreadCrumb = (name)=>{
    dispatch(pageName(name))
  }

  return (
    <section className='bg-ash py-10'>
        <Container>
            <Flex>
                <div className='flex items-center gap-x-4 w-3/12'>
                <HiMiniBars3BottomLeft className='text-2xl'/>
                <p>Shop by Category</p>
                </div>
                <div className='relative w-6/12'>
                    <input className='w-full px-4 py-3' type="text" placeholder='Search Product' />
                    <IoMdSearch className='text-2xl absolute top-3 right-4'/>
                </div>
                <div className='flex gap-x-6 w-3/12 items-center justify-end'>
                    <Flex className="gap-x-2 items-center">
                      <Link onClick={()=>handleBreadCrumb("Sign-up")} to="/sign_up">
                      <FaUser className='text-xl'/>
                      </Link>
                        <TiArrowSortedDown className='text-3xl'/>
                    </Flex>
                    <IoMdCart className='text-2xl'/>
                </div>
             
            </Flex>
        </Container>
    </section>
  )
}

export default SearchNav

//            npm run dev  