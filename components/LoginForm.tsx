import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signIn } from "next-auth/react";

export interface LoginFormProps {
    isModal: boolean;
    closeModal?: any;
}

export function LoginForm({ isModal, closeModal }: LoginFormProps) {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [passwordIsVisible, togglePasswordVisibility] = useState(false);

    function handleChange(e: any) {
        setLoginData((current: any) => {
            return {
                ...current,
                [e.target.name]: e.target.value,
            };
        });
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log("handleSubmit():");
        console.log(loginData);
    }

    function handleGoogleSignIn(e: any) {
        e.preventDefault();
        signIn("google", { callbackUrl: "/" });
    }

    return (
        <div
            className="relative space-y-4 rounded-3xl bg-whitish-2 py-8 px-10 dark:bg-darkGray-5 md:w-7/12 xl:w-1/3"
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
                Welcome Back!
            </h2>
            <div className="flex">
                <button
                    className="modalButton justify-around font-medium"
                    onClick={(e) => handleGoogleSignIn(e)}
                >
                    <FaGoogle className="relative bottom-[2px] mr-1 inline" />
                    <span> Sign in with Google</span>
                </button>
                <button className="ml-3 w-1/4 rounded-xl bg-darkGray-1 text-white hover:bg-darkGray-4 md:w-1/6">
                    <RiFacebookFill className="inline-block h-8 w-8" />
                </button>
            </div>
            <div className="flex items-center justify-around space-x-1 text-sm text-lightGray-1 dark:text-lightGray-3">
                <hr className="inline-block w-1/4 sm:w-1/3" />
                <span className="whitespace-nowrap">or continue with</span>
                <hr className="inline-block w-1/4 sm:w-1/3" />
            </div>
            <div className="w-full text-sm text-darkGray-4 dark:text-lightGray-3">
                <label className="block " htmlFor="email">
                    Email Address
                </label>
                <input
                    className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 px-4 dark:bg-darkGray-4 dark:text-lightGray-3"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="text-sm text-darkGray-4 dark:text-lightGray-3">
                <label className="block" htmlFor="password">
                    Password
                </label>
                <div className="relative w-full">
                    <input
                        autoComplete="current-password"
                        className="mt-3 w-full rounded-lg bg-lightGray-3 py-4 pl-4 pr-8 dark:bg-darkGray-4 dark:text-lightGray-3"
                        type={passwordIsVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        name="password"
                        value={loginData.password}
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
                <div className="flex w-full justify-end py-4">
                    <Link href="/reset-password">
                        <a
                            className="text-sm text-blueMain"
                            onClick={() => {
                                if (closeModal) closeModal();
                            }}
                        >
                            Forgot your password?
                        </a>
                    </Link>
                </div>
                <div>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className="modalButton font-bold"
                    >
                        Sign In
                    </button>
                </div>
            </div>
            <p className="text-center text-sm font-normal text-darkGray-1 dark:text-lightGray-3">
                <span>Don't have an account?</span>
                <Link href="/signup">
                    <a
                        className="text-blueMain"
                        onClick={() => {
                            if (closeModal) closeModal();
                        }}
                    >
                        {" "}
                        Sign Up
                    </a>
                </Link>
            </p>
        </div>
    );
}
