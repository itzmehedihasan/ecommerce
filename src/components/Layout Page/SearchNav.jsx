import React, { useEffect, useState } from 'react';
import Container from '../Container';
import Flex from '../Flex';
import { FaUser } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';
import { IoMdCart, IoMdSearch , IoIosRemoveCircleOutline} from 'react-icons/io';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pageName } from '../../slices/breadCrumb';
import { increment,decrement,remove } from '../../slices/cartSlice'
import { BsPlus } from "react-icons/bs";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import {  } from "react-icons/io";

function SearchNav() {
  let [cartOpen, setCartOpen] = useState(false);

  let [total, setTotal] = useState(0);

  let dispatch = useDispatch();

  let handleBreadCrumb = (name) => {
    dispatch(pageName(name));
  }

  let cartItem = useSelector((state) => state.cart.cartItem);
  
  let handleIncrement =(item)=>{
    dispatch(increment(item))
  }

  let handleDecrement =(item)=>{
    dispatch(decrement(item))
  }
  let handleRemove=(item)=>{
    dispatch(remove(item))
  }

  useEffect(()=>{
    let total= 0
    cartItem.map(item =>{
      total += item.price*item.Quantity
    })
setTotal(total)
  },[cartItem])
  return (
    <section className='bg-ash py-10'>
      <Container>
        <Flex>
          <div className='flex items-center gap-x-4 w-3/12'>
            <HiMiniBars3BottomLeft className='text-2xl' />
            <p>Shop by Category</p>
          </div>
          <div className='relative w-6/12'>
            <input className='w-full px-4 py-3' type='text' placeholder='Search Product' />
            <IoMdSearch className='text-2xl absolute top-3 right-4' />
          </div>
          <div className='flex gap-x-6 w-3/12 items-center justify-end'>
            <Flex className='gap-x-2 items-center'>
              <Link onClick={() => handleBreadCrumb('Sign-up')} to='/sign_up'>
                <FaUser className='text-xl' />
              </Link>
              <TiArrowSortedDown className='text-3xl' />
            </Flex>
            <IoMdCart onClick={ ()=>setCartOpen(!cartOpen) } className='text-2xl cursor-pointer' /> {cartItem.length}
          </div>
        </Flex>

        {cartOpen && (
          <div className='w-2/6 h-screen bg-white absolute right-0 top-0 z-10'>
            <RxCross2 onClick={() => setCartOpen(false)} className='text-3xl cursor-pointer' />
            <ul className='flex justify-between bg-ash py-2 px-5 border-b border-black border-solid '>
              <li>Action</li>
              <li>Image</li>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
            {cartItem.length > 0 ? (
              cartItem.map(item => (
                <ul className='flex justify-between items-center border-b border-black border-solid bg-ash py-2 px-5'>
                  <li>
                      <IoIosRemoveCircleOutline className='text-red-500 text-2xl cursor-pointer' onClick={()=>handleRemove(item)}/>
                  </li>
                  <li>
                      <img className='w-20 h-20' src={item.productImg} alt="Product Image" />
                  </li>
                  <li>
                      {item.title}
                  </li>
                  <li>
                      {item.price}
                  </li>
                  <li className='flex border border-black border-solid py-1 px-3 '>
                      <HiOutlineMinusSmall className='mr-2 translate-y-1 cursor-pointer' onClick={()=>handleDecrement(item)}/>
                      {item.Quantity}
                      <BsPlus className='ml-2 translate-y-1 cursor-pointer' onClick={()=>handleIncrement(item)}/>
                  </li>
                  <li>
                      {item.price*item.Quantity}
                  </li>
                </ul>
              ))
              ) : 
              (
                <h1 className='text-black text-center text-xl font-bold translate-y-96 drop-shadow'>Cart Is Empty</h1>
                )}
                <h1 className='absolute text-black text-center right-5 bottom-5 bg-ash px-5 py-3'>Total : {total}</h1>
          </div>
        )}
      </Container>
    </section>
  );
}

export default SearchNav;
