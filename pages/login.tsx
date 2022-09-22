import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

function LoginForm() {
    return (
        <div className="mx-auto space-y-4 bg-whitish-2 py-8 px-10 md:w-7/12 xl:w-1/3">
            <h2 className="text-center text-5xl font-bold text-darkGray-5 sm:whitespace-nowrap">
                Welcome Back!
            </h2>
            <div className="flex">
                <button className="modalButton justify-around font-medium">
                    <FaGoogle className="relative bottom-[2px] mr-1 inline" />
                    <span> Sign in with Google</span>
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
                <div>
                    <button className="modalButton font-bold">Sign In</button>
                </div>
            </div>
            <p className="text-center text-sm font-normal text-darkGray-1">
                <span>Don't have an account?</span>
                <Link href="/signup">
                    <a className="text-blueMain"> Sign Up</a>
                </Link>
            </p>
        </div>
    );
}

export default LoginForm;
