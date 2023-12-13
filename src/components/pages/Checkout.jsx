import React from 'react'
import SubHeading from '../SubHeading'
import Container from '../Container'
import Breadcrumb from '../Breadcrumb'
import Flex from '../Flex';
import Pragraph from '../pragraph';
import PortionHeading from '../PortionHeading';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../Input';


function Checkout() {

    //               npm run dev
    // console.log(window.location.pathname);
  const pageName = useSelector(state=> (state.breadCrumb.previousName))

  return (
    <section className='mt-32 mb-36'>
        <Container>
            <SubHeading text=" Checkout " />
            <Flex className=" gap-x-1 mt-3 mb-32 ">
            <Link to={pageName == "Home" ? "/" :`/${pageName.toLowerCase()}`}> {pageName} </Link> /
            <Breadcrumb>{window.location.pathname.replace("/","")}</Breadcrumb>
            </Flex>
           
            <Link to="/">Have a coupon? Click here to enter your code </Link>
            

           <div className=' mt-28 '>
                <SubHeading text=" Billing Details " />
                <Flex className=" justify-between pt-11 pb-6 ">
                    <div className=" w-48 border-b border-solid border-ash pb-3 ">
                    <Input title=" First Name* " placeholder=" First Name* " type=" text " className=" py-1 "/>
                    </div>
                    <div className=" w-48 border-b border-solid border-ash pb-3 " >
                    <Input title=" Last Name* " placeholder=" Last Name* " type=" text " className=" py-1 "/>
                    </div>                  
                </Flex>
                <div className=" border-b border-solid border-ash pb-3 " >
                    <Input title=" Companye Name (optional) " placeholder=" Companye Name " type=" text " className=" py-1 "/>
                </div> 
                <div className=" border-b border-solid border-ash pb-3 " >
                    <Input placeholder=" Apartment, suite, unit etc. (optional) " type=" text " className=" py-1 "/>
                </div> 
                <div className=" border-b border-solid border-ash pb-3 " >
                    <Input title=" Town/City * " placeholder=" Town/City * " type=" text " className=" py-1 "/>
                </div> 
                <div className=" border-b border-solid border-ash pb-3 " >
                    <Input title=" County (optional) " placeholder=" County " type=" text " className=" py-1 "/>
                </div> 
                <div className=" border-b border-solid border-ash pb-3 " >
                    <Input title=" Post Code * " placeholder=" Post Code " type=" text " className=" py-1 "/>
                </div> 
                <div className=" border-b border-solid border-ash pb-3 " >
                    <Input title=" Phone * " placeholder=" Phone " type=" text " className=" py-1 "/>
                </div> 
                <div className=" border-b border-solid border-ash pb-3 " >
                    <Input title=" Email Address * " placeholder=" Email Address " type=" text " className=" py-1 "/>
                </div> 
            </div>
            <div className='mt-32 border-b border-solid border-ash '>
            <SubHeading text="Additional Information"/>
            <PortionHeading text=" Other Notes (optional) " className="mt-11 mb-2.5"/> 
            <Pragraph className="mb-20" text="Notes about your order, e.g. special notes for delivery." />
            </div>

            <div className=' mt-32 mb-16 '>
            <SubHeading text=" Your Order " className=" mb-12 "/>
            <Flex className=" flex-wrap w-2/6 ">
              <div className=' w-1/2 border border-solid py-2 pl-2 '>
              <PortionHeading text=" Product "/>
              </div>
              <div className=' w-1/2 border border-solid py-2 pl-2 ' >
              <Pragraph text=" Totla "/>
              </div>
              <div className=' w-1/2 border border-solid py-2 pl-2 '>
              <PortionHeading text=" Product name x 1 "/>
              </div>
              <div className=' w-1/2 border border-solid py-2 pl-2 ' >
              <Pragraph text=" 389.99 $ "/>
              </div>
              <div className=' w-1/2 border border-solid py-2 pl-2 '>
              <PortionHeading text=" Subtotal "/>
              </div>
              <div className=' w-1/2 border border-solid py-2 pl-2 ' >
              <Pragraph text=" 389.99 $ "/>
              </div>
              <div className=' w-1/2 border border-solid py-2 pl-2 '>
              <PortionHeading text=" Total "/>
              </div>
              <div className=' w-1/2 border border-solid py-2 pl-2 ' >
              <Pragraph text=" 389.99 $ "/>
              </div>
            </Flex>
            </div>
        </Container>
    </section>
  )
}

export default Checkout

    //               npm run dev
