import { url } from 'inspector'
import React from 'react'
import bg from '../img/cta-bg.png'

function Cta() {
  return (
    <section className='bg-white'>
        <div className="cta flex flex-row justify-between items-center container mx-auto py-12 px-20 bg-blueMain rounded-2xl relative top-16">
            {/* Text */}
            <div className='space-y-4 max-w-sm'>
                <h2 className='text-4xl tracking-wide text-white font-poppins font-extrabold'>Get our pro offers</h2> 
                <p className='text-white font-light'>Create a visual identity for your company, and an overall brand</p> 
            </div>

            <form className='flex flex-row w-1/3'>
                <input className='w-full text-xs pl-6 pr-32 py-4 rounded-sm focus:outline-none' type="email" placeholder='Type your email here' />
                <button className='text-white text-xs bg-darkGray-2 hover:bg-darkGray-1 active:bg-darkGray-2 px-6 my-1 rounded-sm -ml-28 focus:outline-none' onClick={(e) => e.preventDefault()}>Subscribe</button>
            </form>
        </div>

    </section>
  )
}

export default Cta