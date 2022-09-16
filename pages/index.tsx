import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Cta from '../components/Cta'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Pun Hotel Booking App</title>
    </Head>
    <div className='text-white bg-darkGray-5 font-dmsans'>Feel free to delete, just checking if everithing connected properly</div>
    <Cta />
    <Footer />
    </>
  )
}

export default Home
