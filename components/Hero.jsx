import Image from "next/image"

import heroImg from "../img/hero-image.jpg"

export default function Hero() {
	return (
		<div className="relative h-[510px]">
			<Image
				src={heroImg}
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt="Hero"
			/>

			<div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
				<h1 className="mt-6 text-6xl font-bold text-gray-300 max-w-3xl">
					Book With Us <br/>And Enjoy<br/>your Yourney!
				</h1>
			</div>
		</div>
	)
}
