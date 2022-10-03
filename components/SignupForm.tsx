import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";

export interface SignupFormProps {
    isModal: boolean;
    closeModal?: any;
}

function SignupForm({ isModal, closeModal }: SignupFormProps) {
    const [signupData, setSignupData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        consent: false,
    });

    const [passwordIsVisible, togglePasswordVisibility] = useState(false);

    function handleChange(e: any) {
        setSignupData((current) => {
            if (e.target.type == "checkbox") {
                return {
                    ...current,
                    consent: !current.consent,
                };
            }
            return {
                ...current,
                [e.target.name]: e.target.value,
            };
        });
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log(`handleSubmit():`);
        console.dir(signupData);
    }

    return (
        <div
            className="relative mx-auto space-y-4 rounded-3xl bg-whitish-2 py-8 px-10 dark:bg-darkGray-5 md:w-7/12 xl:w-1/3"
            onClick={(e) => e.stopPropagation()}
        >
            {isModal ? (
                <div
                    className="absolute top-0 right-0 flex h-8 w-8 translate-x-1/3 -translate-y-1/3 cursor-pointer items-center justify-center rounded-full border-2 border-lightGray-3 bg-lightGray-5 text-2xl text-lightGray-1"
                    onClick={() => closeModal()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            ) : null}
            <h2 className="text-center text-5xl font-bold text-darkGray-5 dark:text-lightGray-5 sm:whitespace-nowrap">
                Let's Go
            </h2>
            <div className="flex">
                <button className="modalButton justify-around font-medium">
                    <FaGoogle className="relative bottom-[2px] mr-1 inline" />
                    <span> Sign up with Google</span>
                </button>
                <button className="ml-3 w-1/4 rounded-xl bg-darkGray-1 text-white hover:bg-darkGray-4 md:w-1/6">
                    <RiGithubFill className="inline-block h-8 w-8" />
                </button>
            </div>
            <div className="flex items-center justify-around space-x-1 text-sm text-lightGray-1 dark:text-lightGray-3">
                <hr className="inline-block w-1/4 sm:w-1/3" />
                <span className="whitespace-nowrap">or continue with</span>
                <hr className="inline-block w-1/4 sm:w-1/3" />
            </div>

            <div className="flex flex-col space-y-4 text-darkGray-4 dark:text-lightGray-3 sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-4">
                <div className="text-sm sm:w-1/2">
                    <label className="block " htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 px-4"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        value={signupData.firstname}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="text-sm sm:w-1/2">
                    <label className="block " htmlFor="lastname">
                        Last Name
                    </label>
                    <input
                        className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 px-4"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        value={signupData.lastname}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="w-full text-sm text-darkGray-4 dark:text-lightGray-3">
                <label className="block " htmlFor="email">
                    Email Address
                </label>
                <input
                    className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 px-4"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={signupData.email}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="text-sm text-darkGray-4 dark:text-lightGray-3">
                <label className="block" htmlFor="password">
                    Password
                </label>
                <div className="relative w-full">
                    <input
                        autoComplete="new-password"
                        className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 pl-4 pr-8"
                        type={passwordIsVisible ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        value={signupData.password}
                        onChange={(e) => handleChange(e)}
                    />
                    {passwordIsVisible ? (
                        <AiOutlineEyeInvisible
                            className="absolute right-2 bottom-3 h-6 w-6"
                            onClick={() =>
                                togglePasswordVisibility(!passwordIsVisible)
                            }
                        />
                    ) : (
                        <AiOutlineEye
                            className="absolute right-2 bottom-3 h-6 w-6"
                            onClick={() =>
                                togglePasswordVisibility(!passwordIsVisible)
                            }
                        />
                    )}
                </div>
                <div className="mt-4 w-2/3">
                    <label
                        className="grid grid-cols-[1.5em_max-content] grid-rows-2 gap-2 hover:cursor-pointer"
                        htmlFor="legalConsent"
                    >
                        <input
                            className="required appearance-none rounded-sm border-lightGray-1 bg-lightGray-3 text-sm checked:border-4 checked:border-lightGray-3 checked:bg-blueMain hover:cursor-pointer"
                            type="checkbox"
                            id="legalConsent"
                            name="consent"
                            checked={signupData.consent}
                            onChange={(e) => handleChange(e)}
                        />
                        <span>
                            I’ve read and accepted
                            <Link href="#">
                                <a className="text-blueMain">
                                    {` Terms of Service `}
                                </a>
                            </Link>
                        </span>
                        <div></div>
                        <div>
                            and
                            <Link href="#">
                                <a className="text-blueMain"> Privacy Policy</a>
                            </Link>
                        </div>
                    </label>
                </div>
                <div className="my-5">
                    <button
                        className="modalButton font-bold"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            <p className="text-center text-sm font-normal text-darkGray-1 dark:text-lightGray-2">
                <span>Already have an account?</span>
                <Link href="/login">
                    <a
                        className="text-blueMain"
                        onClick={() => {
                            if (closeModal) closeModal();
                        }}
                    >
                        {" "}
                        Log In
                    </a>
                </Link>
            </p>
        </div>
    );
}

export default SignupForm;
