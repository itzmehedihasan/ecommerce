import React from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'
import Flex from '../Flex'
import Product from '../Product'



function Home() {
  //                 npm run dev


  return (
    <Container>
      <SubHeading text="Our Best Sellers" />
      <Flex>
        <div className='w-25'>
          <Product  heading="product 1" />
        </div>
        <div className='w-25'>
          <Product heading="product 2" />
        </div>
        <div className='w-25'>
          <Product heading="product 3" />
        </div>
        <div className='w-25'>
          <Product heading="product 4" />
        </div>
      </Flex>
      
    </Container>
  )
}

export default Home

  //                 npm run dev
