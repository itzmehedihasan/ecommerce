import React from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'
import Flex from '../Flex';
import Breadcrumb from '../Breadcrumb';
import Pragraph from '../pragraph';
import Button from '../Button';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import Input from '../Input';

function Sign_up() {
  
//       npm run dev

  const pageName = useSelector(state=> (state.breadCrumb.previousName))
  
  return (
    <section className='mt-32 mb-36'>
      <Container>
          <SubHeading text="Sign up" />
          <Flex className="gap-x-1 mt-3">
            <Link to={pageName == "Home" ? "/" :`/${pageName.toLowerCase()}`}> {pageName} </Link> /
            <Breadcrumb>{window.location.pathname.replace("/","").replace("_"," ")}</Breadcrumb>
          </Flex>
          <Pragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="w-[476px] mt-32"/>
          <div className='border-t border-solid border-ash mt-16'></div>

        <div className='mt-14 border-b border-solid border-ash'>
          <SubHeading text="Your Personal Details"/>

          <Flex className="flex-wrap justify-between pt-11 pb-16 ">
            <div className=" w-48 border-b border-solid border-ash ">
              <Input title=" First Name " placeholder=" First Name " type=" text " className=" py-1 " />
            </div>
            <div className=" w-48 border-b border-solid border-ash ">
              <Input title=" Last Name " placeholder=" Last Name " type=" text " className=" py-1 "/>
            </div>
            <div className=" w-48 border-b border-solid border-ash ">
              <Input title=" Email address " placeholder=" company@domain.com " type=" text " className=" py-1 " /> 
            </div>
            <div className=" w-48 border-b border-solid border-ash ">
              <Input title=" Telephone " placeholder=" Your phone number " type=" text " className=" py-1 " />
            </div>
        </Flex>
        </div>

        <div className=' mt-14 border-b border-solid border-ash '>
          <SubHeading text="New Customer"/>

          <Flex className="flex-wrap justify-between pt-11 pb-16">
            <div className="w-48 border-b border-solid border-ash pb-3">
              <Input title=" Address 1 " placeholder=" Na4279 Zboncak Port Suite 6212 " type="text" className=" py-1 " />
            </div>
            <div className="w-48 border-b border-solid border-ash pb-3" >
              <Input title="Address 2" placeholder=" - " type="text" className=" py-1 "/>
            </div>
            <div className="w-48 border-b border-solid border-ash pb-3">
              <Input title="City" placeholder="Your City" type="text" className=" py-1 " /> 
            </div>
            <div className="w-48 border-b border-solid border-ash pb-3" >
              <Input title="Post Code" placeholder="1234" type="text" className=" py-1 " />
            </div>
            <div className="w-48 border-b border-solid border-ash pb-3" >
              <Input title="Country" placeholder="Please Select" type="text" className=" py-1 "/>
            </div>
            <div className="w-48 border-b border-solid border-ash pb-3" >
              <Input title="Region/State" placeholder="Please Select" type="text" className=" py-1 "/>
            </div>
          </Flex>
          </div>

        <div className='mt-14 border-b border-solid border-ash'>
          <SubHeading text="Your Password"/>

          <Flex className="flex-wrap justify-between pt-11 pb-16">
            <div className="w-48 border-b border-solid border-ash pb-3">
              <Input title=" Password " placeholder=" Password " type="text" className=" py-1 "/>
            </div>
            <div className="w-48 border-b border-solid border-ash pb-3" >
              <Input title=" Reapeat " placeholder=" Reapeat " type="text" className=" py-1 "/>
            </div>
        </Flex>
        </div>

         <div className='mt-14'>
         <input id ="test" className='peer/test' type="checkbox"  hidden/> 
        <label for="test" className='relative before:w-4 before:h-4 before:border before:border-solid before:border-halfBlack before:absolute before:top-1.5 before:left-0 before:content[""] after:w-3 after:h-3 after:absolute after:top-2 after:left-0.5 after:peer-checked/test:border after:peer-checked/test:border-solid after:peer-checked/test:bg-halfBlack after:content[""] cursor-pointer'></label>
        <Pragraph className="ml-8" text="I have read and agree to the Privacy Policy"/>
         </div>

      <Flex className="my-7">
      <p>Subscribe Newsletter</p>
        <input id ="test1" className='peer/test1' type="checkbox" hidden/> 
        <label for="test1" className='relative ml-5 pl-8 before:w-4 before:h-4 before:rounded-full  before:border before:border-solid before:border-halfBlack before:absolute before:top-1.5 before:left-0 before:content[""] after:w-3 after:h-3 after:rounded-full after:absolute after:top-2 after:left-0.5 after:peer-checked/test1:border after:peer-checked/test1:border-solid after:peer-checked/test1:bg-halfBlack after:content[""] cursor-pointer'>YES</label>
      
        <input id ="test2" className='peer/test2' type="checkbox" hidden/> 
        <label for="test2" className='relative ml-4 pl-8 before:w-4 before:h-4 before:rounded-full before:border before:border-solid before:border-halfBlack before:absolute before:top-1.5 before:left-0 before:content[""] after:w-3 after:h-3 after:rounded-full after:absolute after:top-2 after:left-0.5 after:peer-checked/test2:border after:peer-checked/test2:border-solid after:peer-checked/test2:bg-halfBlack after:content[""] cursor-pointer'>No</label>
      </Flex>
      <Button text="Log in" className="w-1/6"/>

      </Container>
    </section>
  )
}

export default Sign_up

//       npm run dev