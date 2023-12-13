import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import PortionHeading from '../PortionHeading'
import Li from '../Li'
import Image from '../Image'
import logo from '../../assets/pngFile/logo.png'
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

function Footer() {
  return (
    <section className='bg-ash py-14'>
      <Container>
        <Flex>
          <div className='w-2/12'>
            <PortionHeading text="MENU" className="mb-3"/>
            <ul className='flex flex-col gap-y-1'>
              <Li text="Home"/>
              <Li text="Shop"/>
              <Li text="About"/>
              <Li text="Contact"/>
              <Li text="Journal"/>
            </ul>
          </div>
          <div className='w-2/12'>
          <PortionHeading text="SHOP" className="mb-3"/>
          <ul className='flex flex-col gap-y-1'>
              <Li text="Category 1"/>
              <Li text="Category 2"/>
              <Li text="Category 3"/>
              <Li text="Category 4"/>
              <Li text="Category 5"/>
            </ul>
          </div>
          <div className='w-2/12'>
          <PortionHeading text="HELP" className="mb-3"/>
          <ul className='flex flex-col gap-y-1'>
              <Li text="Privacy Policy"/>
              <Li text="Terms & Conditions"/>
              <Li text="Special E-shop"/>
              <Li text="Shipping"/>
            </ul>
          </div>
          <div className='w-2/12'>
          <PortionHeading text="(052) 611-5711"/>
          <PortionHeading text="company@domain.com" className="mb-3"/>
          <p>575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
            <div className='w-[35%] translate-x-32'>
              <Image src={logo}/>
            </div>
        </Flex>
        <Flex>
          <div className='flex w-1/2 gap-x-3 mt-16'>
            <RiFacebookFill className='text-2xl'/>   
            <FaLinkedinIn className='text-2xl'/>
            <BiLogoInstagramAlt className='text-2xl'/>
          </div>
          <Flex className='w-1/2 items-end justify-end'>
            <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </Flex>
        </Flex> 
      </Container>

    </section>
  )
}

export default Footer