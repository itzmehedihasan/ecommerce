import React from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'
import Flex from '../Flex'
import Breadcrumb from '../Breadcrumb'
import PortionHeading from '../PortionHeading'
import Pragraph from '../pragraph'
import Button from '../Button'
import Image from '../Image'
import map from '../../assets/pngFile/map.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Input from '../Input'

function Contact() {
  //           npm run dev

  const pageName = useSelector(state=> (state.breadCrumb.previousName))

  return (
    <section className='mt-32 mb-36'>
        <Container>
            <div>
            <SubHeading text="Contact" className="mb-3"/>
            <Flex className="gap-x-1">
            <Link to={pageName == "Home" ? "/" :`/${pageName.toLowerCase()}`}> {pageName} </Link> /
            <Breadcrumb>{window.location.pathname.replace("/","")}</Breadcrumb>
            </Flex>
            </div>
            
            <div className=' mt-32 pb-20 border-b border-solid border-ash '>
                <SubHeading text=" Fill up a Form "/>
                <div className=' w-1/2 '>
                  <div>
                  <Input title=" Name " placeholder=" Your Name Here " className=" py-1 "/>
                  </div>
                  <div>
                  <Input title=" Email " placeholder=" Your email here " className=" py-1 "/>
                  </div>
                  <div>
                  <Input title=" Message " placeholder=" Your message here " className=" py-1 "/>
                  </div>
                </div>
            </div>
                  <Button text=" Log in " className=" mt-8 mb-36 "/>
                  <Image src={map}/>
        </Container>
    </section>
  )
}

export default Contact

  //                 npm run dev
