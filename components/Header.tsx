import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import { GoTriangleDown } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { RiLogoutCircleLine, RiSuitcaseLine } from "react-icons/ri";
import { signOut } from "next-auth/react";

export interface HeaderProps {
    openLogin: any;
    closeLogin: any;
    openSignup: any;
    closeSignup: any;
}

export default function Header({
    openLogin,
    closeLogin,
    openSignup,
    closeSignup,
}: HeaderProps) {
    const router = useRouter();

    const { data: session, status } = useSession();

    function handleLoginButtonClick() {
        openLogin();
        router.push("/?login", "/login", { shallow: true });
    }

    function handleSignupButtonClick() {
        router.push("/?signup", "/signup", { shallow: true });
        openSignup();
    }

    return (
        <header className="sticky top-0 z-10 flex items-center justify-between bg-lightGray-7 px-6 py-5 shadow-md ">
            <Link href="/">
                <a className="flex items-center space-x-2">
                    <Image
                        src={logo}
                        width="40px"
                        height="38px"
                        className="h-8 w-8"
                    />
                    <span className="ml-2 font-dmsans text-xl font-bold text-darkGray-4">
                        TripGuide
                    </span>
                </a>
            </Link>
            <nav className="flex items-center space-x-9 ">
                {session && <UserMenu menuOpen={false} session={session} />}
                {status != "loading" && !session && (
                    <button
                        className="hover:text-gray-900 font-dmsans text-base font-bold text-darkGray-1"
                        onClick={handleLoginButtonClick}
                    >
                        Login
                    </button>
                )}

                {status != "loading" && !session && (
                    <button
                        className="rounded-md bg-blue-600 px-4 py-2 font-dmsans text-base text-white hover:bg-blue-700"
                        onClick={handleSignupButtonClick}
                    >
                        Signup
                    </button>
                )}
            </nav>
        </header>
    );
}

interface UserMenuProps {
    menuOpen: boolean;
    session: any;
}

function UserMenu({ menuOpen, session }: UserMenuProps) {
    const [isOpen, toggleOpen] = useState(menuOpen);
    useEffect(() => {
        window.addEventListener("click", () => toggleOpen(false));
    }, []);

    function handleClick(e: any) {
        e.stopPropagation();
        toggleOpen((current) => !current);
    }
    return (
        <div
            className="relative flex cursor-pointer flex-row items-center space-x-3 text-darkGray-1"
            onClick={(e) => {
                handleClick(e);
            }}
        >
            <div className="h-8 w-8 overflow-hidden rounded-full">
                <Image
                    src={session.user?.image || logo}
                    width={32}
                    height={32}
                ></Image>
            </div>

            <div className="font-roboto text-sm font-medium">
                {session.user?.name}
            </div>

            <div className={`${isOpen && "rotate-180"} transition-all`}>
                <GoTriangleDown className="text-darkGray-1" />
            </div>
            <ul
                className={
                    "text-md absolute right-0 top-16 w-60 cursor-default space-y-4 rounded-2xl bg-white p-4 font-dmsans text-darkGray-4 opacity-100 transition-all " +
                    `${
                        isOpen
                            ? " h-36 "
                            : " h-0 overflow-hidden py-0 opacity-0"
                    }`
                }
                onClick={(e) => e.stopPropagation()}
            >
                <li className="cursor-pointer transition hover:text-lightGray-1">
                    <Link href={"/profile"}>
                        <a>
                            <FiUser className="mr-3 inline-block text-lightGray-8" />
                            <span>My Profile</span>
                        </a>
                    </Link>
                </li>

                <li className="cursor-pointer transition hover:text-lightGray-1">
                    <Link href={"/bookings"}>
                        <a>
                            <RiSuitcaseLine className="mr-3 inline-block text-lightGray-8" />
                            <span>Bookings</span>
                        </a>
                    </Link>
                </li>

                <li className="cursor-pointer transition hover:text-lightGray-1">
                    <a onClick={() => signOut()}>
                        <RiLogoutCircleLine className="mr-3 inline-block text-lightGray-8" />
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
