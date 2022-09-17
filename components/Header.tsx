import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";

export default function Header() {
  return (
		<header className="flex items-center justify-between px-6 py-5">
			<Link href="/">
				<a className="flex items-center space-x-2">
					<Image
						src={logo}
						width="40px"
						height="38px"
						className="w-8 h-8"
					/>
					<span className="text-darkGray-4 font-dmsans font-bold text-xl ml-2">
						TripGuide
					</span>
				</a>
			</Link>
			<nav className="flex items-center space-x-9">
				<Link href="/login">
					<a className="text-base font-dmsans font-bold text-darkGray-1 hover:text-gray-900">
						Login
					</a>
				</Link>
				<Link href="/signup">
					<a className="px-4 py-2 text-base font-dmsans text-white bg-blue-600 rounded-md hover:bg-blue-700">
						signup
					</a>
				</Link>
			</nav>
		</header>
  )
}

    

    