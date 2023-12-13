import React from 'react'
import Container from '../Container'
import Image from '../Image'
import error from '../../assets/pngFile/404.png'
import Pragraph from '../pragraph'
import { IoMdSearch } from "react-icons/io"
import Button from '../Button'

function Error() {
  //                 npm run dev

  return (
    <section className='my-32'>
        <Container>
            <Image src={error}/>
            <Pragraph text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?" className='w-[644px] my-8'/>
            <div className='w-2/5 relative'>
            <input type="text" placeholder='Type to search' className='w-full py-3 pl-4 border border-solid' />
            <IoMdSearch className='text-2xl absolute top-3 right-4'/>
            </div>
            <Button text="Back to Home" className="mt-8"/>
        </Container>
    </section>
  )
}

export default Error

  //                 npm run dev
