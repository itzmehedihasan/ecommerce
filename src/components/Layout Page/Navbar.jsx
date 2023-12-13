import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/pngFile/logo.png'
import Li from '../Li'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { pageName } from '../../slices/breadCrumb'

function Navbar() {

  let dispatch = useDispatch()

  let handleBreadCrumb = (name)=>{
    dispatch(pageName(name))
  }

  return (
    <section className='my-10'>
      <Container>
        <Flex>
          <div className='w-1/2'>
            <Image src={Logo}/>
          </div>
          <div className='w-1/2'>
            <ul className='flex gap-x-6 justify-end items-center'>
              <Link onClick={()=>handleBreadCrumb("Home")} to="/">
                <Li text="Home"/>
              </Link>
              <Link onClick={()=>handleBreadCrumb("Shop")} to="/shop">
                <Li text="Shop"/>
              </Link>
              <Li text=""/>
              <Li text="About"/>
              <Li text="Contact"/>
              <Li text="Journal"/>
            </ul>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Navbar