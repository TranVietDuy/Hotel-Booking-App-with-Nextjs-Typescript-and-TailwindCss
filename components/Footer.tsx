import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";

function Footer() {
  return (
    <footer className="mt-4 w-full bg-whitish-2 px-8 pt-24 pb-4 dark:bg-darkGray-4">
      <div className="container mx-auto flex flex-col-reverse md:flex-row">
        {/* Logo and mode toggle section */}
        <div className="space-y-6 md:w-1/3 md:max-w-2xl">
          <div className="flex items-center">
            <Image src={logo} width="40px" height="38px" className="h-8 w-8" />
            <span className="ml-2 font-dmsans text-xl font-bold text-darkGray-4 dark:text-white">
              TripGuide
            </span>
          </div>
          <p className="hidden text-left leading-6 text-lightGray-1 dark:text-lightGray-3 md:block">
            This is the team that specializes in making sure in the find it a
            your interior looks cool
          </p>
          {/* Night Mode Toggle with no functionality yet */}
          <div className="nightModeToggle">
            <span className="font-dmsans text-base text-lightGray-1 dark:text-lightGray-3">
              Dark mode
            </span>
            <input type="checkbox" id="switch" />
            <label className="toggle--label" htmlFor="switch">
              Toggle
            </label>
          </div>
        </div>

        {/* Menus Group */}

        <div className="flex w-full flex-col justify-between md:flex-row">
          {/* First Menu */}
          <div className="border-b-2 border-lightGray-3 py-4 md:border-b-0">
            <h3 className="mb-4 font-dmsans text-2xl text-darkGray-4 dark:text-white">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Travel Booking
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Flight Booking
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Car Booking
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Fivestar Hotel
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Traveling
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Menu */}
          <div className="border-b-2 border-lightGray-3 py-4 md:border-b-0">
            <h3 className="mb-4 font-dmsans text-2xl text-darkGray-4 dark:text-white">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Account
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Legal
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Terms &amp; Conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Privacy policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* Third Menu */}
          <div className="py-4">
            <h3 className="mb-4 font-dmsans text-2xl text-darkGray-4 dark:text-white">
              Business
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Success
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    About Locato
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Information
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-base text-lightGray-1 hover:text-darkGray-1 dark:text-lightGray-3 dark:hover:text-lightGray-1">
                    Travel Guide
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
