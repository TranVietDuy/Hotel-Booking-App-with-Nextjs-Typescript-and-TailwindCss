import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";

export default function Header() {
    return (
        <header className="sticky z-50 top-0 shadow-md flex items-center justify-between bg-lightGray-7 px-6 py-5 ">
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
                <Link href="/login">
                    <a className="hover:text-gray-900 font-dmsans text-base font-bold text-darkGray-1">
                        Login
                    </a>
                </Link>
                <Link href="/signup">
                    <a className="rounded-md bg-blue-600 px-4 py-2 font-dmsans text-base text-white hover:bg-blue-700">
                        signup
                    </a>
                </Link>
            </nav>
        </header>
    );
}
