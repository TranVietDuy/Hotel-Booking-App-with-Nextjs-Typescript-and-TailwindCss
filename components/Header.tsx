import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";

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

    function handleLoginButtonClick() {
        console.log("handleLoginButtonClick()");
        openLogin();
        router.push("/?login", "/login", { shallow: true });
    }

    function handleSignupButtonClick() {
        console.log("handleSignupButtonClick()");
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
                <button
                    className="hover:text-gray-900 font-dmsans text-base font-bold text-darkGray-1"
                    onClick={handleLoginButtonClick}
                >
                    Login
                </button>
                <button
                    className="rounded-md bg-blue-600 px-4 py-2 font-dmsans text-base text-white hover:bg-blue-700"
                    onClick={handleSignupButtonClick}
                >
                    Signup
                </button>
            </nav>
        </header>
    );
}
