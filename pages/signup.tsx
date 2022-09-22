import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

function SignupForm() {
    return (
        <div className="mx-auto space-y-4 bg-whitish-2 py-8 px-10 md:w-7/12 xl:w-1/3">
            <h2 className="text-center text-5xl font-bold text-darkGray-5 sm:whitespace-nowrap">
                Let's Go
            </h2>
            <div className="flex">
                <button className="modalButton justify-around font-medium">
                    <FaGoogle className="relative bottom-[2px] mr-1 inline" />
                    <span> Sign up with Google</span>
                </button>
                <button className="ml-3 w-1/4 rounded-xl bg-darkGray-1 text-white hover:bg-darkGray-4 md:w-1/6">
                    <RiFacebookFill className="inline-block h-8 w-8" />
                </button>
            </div>
            <div className="flex items-center justify-around space-x-1 text-sm text-lightGray-1">
                <hr className="inline-block w-1/4 sm:w-1/3" />
                <span className="whitespace-nowrap">or continue with</span>
                <hr className="inline-block w-1/4 sm:w-1/3" />
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-4">
                <div className="text-sm text-darkGray-4 sm:w-1/2">
                    <label className="block " htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 px-4"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
                <div className="text-sm  text-darkGray-4 sm:w-1/2">
                    <label className="block " htmlFor="lastname">
                        Last Name
                    </label>
                    <input
                        className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 px-4"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div className="w-full text-sm text-darkGray-4">
                <label className="block " htmlFor="email">
                    Email Address
                </label>
                <input
                    className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 px-4"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="text-sm text-darkGray-4">
                <label className="block" htmlFor="password">
                    Password
                </label>
                <div className="relative w-full">
                    <input
                        className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 pl-4 pr-8"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <AiOutlineEye className="absolute right-2 bottom-3 h-6 w-6" />
                </div>
                <div className="flex w-full justify-end py-4">
                    <Link href="/reset-password">
                        <a className="text-sm text-blueMain">
                            Forgot your password?
                        </a>
                    </Link>
                </div>
                <div className="w-2/3">
                    <label
                        className="grid grid-cols-[1.5em_max-content] gap-2 hover:cursor-pointer"
                        htmlFor="legalConsent"
                    >
                        <input
                            className="required appearance-none rounded-sm border-lightGray-1 bg-lightGray-3 checked:border-4 checked:border-lightGray-3 checked:bg-blueMain hover:cursor-pointer"
                            type="checkbox"
                            id="legalConsent"
                        />
                        <span>
                            I’ve read and accepted
                            <Link href="#">
                                <a className="text-blueMain">
                                    {` Terms of Service `}
                                </a>
                            </Link>
                            and
                            <Link href="#">
                                <a className="text-blueMain"> Privacy Policy</a>
                            </Link>
                        </span>
                    </label>
                </div>
                <div className="my-5">
                    <button className="modalButton font-bold">Sign Up</button>
                </div>
            </div>
            <p className="text-center text-sm font-normal text-darkGray-1">
                <span>Already have an account?</span>
                <Link href="/login">
                    <a className="text-blueMain"> Log In</a>
                </Link>
            </p>
        </div>
    );
}

export default SignupForm;
