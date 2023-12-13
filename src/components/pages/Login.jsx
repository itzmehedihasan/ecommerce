import React from 'react'
import SubHeading from '../SubHeading'
import Container from '../Container'
import Breadcrumb from '../Breadcrumb'
import Flex from '../Flex'
import Pragraph from '../pragraph'
import PortionHeading from '../PortionHeading'
import Button from '../Button'
import Input from '../Input'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Login() {
  //           npm run dev


  const pageName = useSelector(state=> (state.breadCrumb.previousName))
 
  return (
    <section className='mt-32 mb-36'>
        <Container>
            <div>
            <SubHeading text=" Login " className=" mb-3 "/>
            <Flex className=" gap-x-1 ">
            <Link to={pageName == "Home" ? "/" :`/${pageName.toLowerCase()}`}> {pageName} </Link> /
            <Breadcrumb>{window.location.pathname.replace("/","")}</Breadcrumb>
            </Flex>
            </div>
            <Pragraph text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className=" w-[544px] mt-32 "/>
            <div className=' border-b border-solid border-ash mt-16 '></div>

            <div className=' mt-14 '>
            <SubHeading text=" Returning Customer "/>
            <Flex className=" pt-11 pb-16 ">
                <div className=" w-1/3 border-b border-solid border-ash pb-3 ">
                <Input title=" Email address " placeholder=" Your email " type=" email " className=" py-1 " />
                </div>
                <div className=" w-1/3 border-b border-solid border-ash pb-3 ">
                <Input title=" Password " placeholder=" ..... " type=" Password "  className=" py-1 text-2xl" />
                </div>
            </Flex>
            </div>
            <Button className=" mb-16 " text=" Log in "/>

            <div>
            <SubHeading text=" New Customer "/>
            <Pragraph text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. " className=" w-[544px] mb-4 mt-3 "/>
            <Button className=" mt-14 " text=" Continue "/>
            </div>
        </Container>
    </section>
  )
}

export default Login

  //                 npm run dev
