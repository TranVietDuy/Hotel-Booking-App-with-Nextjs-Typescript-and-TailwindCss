import Image from "next/image"

import heroImg from "../img/hero-image.jpg"

export default function Hero() {
	return (
		<div className="relative h-[510px] ">
			<Image
				src={heroImg}
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt="Hero"
			/>
			<div className="absolute mx-5 my-28 md:mx-20">
				<h1 className="font-extrabold font-dmsans text-5xl md:text-5xl xl:text-7xl !leading-[116%]  text-darkGray-1">
					Book With Us
					<br />
					And Enjoy your
					<br />
					Journey!
				</h1>
			</div>
		</div>
	)
}
