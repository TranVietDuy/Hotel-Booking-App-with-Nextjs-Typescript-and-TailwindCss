import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.svg'

function Footer() {
  return (
    <footer className='w-full bg-gray pt-24 pb-4 px-8 mt-4 dark:bg-darkGray-4'>
        <div className="container mx-auto flex flex-col-reverse md:flex-row">
            {/* Logo and mode toggle section */}
            <div className='md:max-w-2xl md:w-1/3 space-y-6'>
                <div className='flex items-center'>
                    <Image src={logo} width="40px" height="38px" className='w-8 h-8'/>
                    <span className='text-darkGray-4 dark:text-white font-dmsans font-bold text-xl ml-2'>TripGuide</span>
                </div>
                <p className='text-lightGray-1 dark:text-lightGray-3 leading-6 text-left hidden md:block'>This is the team that specializes in making sure in the find it a your interior looks cool</p>
                {/* Night Mode Toggle with no functionality yet */}
                <div className='nightModeToggle'>
                        <span className='text-base font-dmsans text-lightGray-1 dark:text-lightGray-3'>Dark mode</span>
                        <input type="checkbox" id="switch"/>
                        <label className='toggle--label' htmlFor="switch">Toggle
                        </label>
                </div>
            </div>

            {/* Menus Group */}

            <div className='flex flex-col md:flex-row justify-between w-full'>
                
                {/* First Menu */}
                <div className='py-4 border-b-2 border-lightGray-3 md:border-b-0'>
                    <h3 className='text-2xl text-darkGray-4 dark:text-white font-dmsans mb-4'>Services</h3>
                    <ul className='space-y-3'>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Travel Booking</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Flight Booking</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Car Booking</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Fivestar Hotel</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Traveling</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                    
                    {/* Second Menu */}
                <div  className='py-4 border-b-2 border-lightGray-3 md:border-b-0'>
                    <h3 className='text-2xl text-darkGray-4 dark:text-white font-dmsans mb-4'>Support</h3>
                    <ul className='space-y-3'>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Account</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Legal</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Terms &amp; Conditions</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Privacy policy</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                    {/* Third Menu */}
                <div  className='py-4'>
                    <h3 className='text-2xl text-darkGray-4 dark:text-white font-dmsans mb-4'>Business</h3>
                    <ul className='space-y-3'>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Success</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>About Locato</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Information</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className='text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1'>Travel Guide</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer