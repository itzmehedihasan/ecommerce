import React from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'
import Pragraph from '../pragraph'
import PortionHeading from '../PortionHeading'
import Flex from '../Flex'
import Breadcrumb from '../Breadcrumb'
import Image from '../Image'
import BrandProduct from '../../assets/pngFile/brandProduct.png'
import StoreProduct from '../../assets/pngFile/storeProduct.png'

function About() {
  //                 npm run dev

  return (
    <section className='my-48'>
        <Container>
            <SubHeading text="About" className="mb-4"/>
            <Flex className="gap-x-1">
             Home /
            <Breadcrumb>{window.location.pathname.replace("/","")}</Breadcrumb>
            </Flex>

            <Flex className="mt-36 mb-32">
                <div className='w-1/2'>
                <Image src={BrandProduct}/>
                </div>
                <div className='w-1/2'>
                <Image src={StoreProduct}/>
                </div>
            </Flex>
            <div>
            <Pragraph className="text-[45px] leading-[52px] mb-28" text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."/>

              <Flex className="justify-between">
                <div className='w-1/4'>
                <PortionHeading text="Our Vision"/>
              <Pragraph className="w-[463px] mt-3" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
                <div className='w-1/4'>
                <PortionHeading text="Our Vision"/>
              <Pragraph className="w-[462px] mt-3" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>
                </div>
                <div className='w-1/4'>
                <PortionHeading text="Our Story"/>
              <Pragraph className="w-[432px] mt-3" text="Lorem Ipsum is simply dummy text of the printing and typesetting in dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
                </div>
              </Flex>
            </div>
        </Container>
    </section>
  )
}

export default About

  //                 npm run dev
