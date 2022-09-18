import Image from "next/image";

import heroImg from "../img/hero-image.jpg";

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
                <h1 className="font-dmsans text-5xl font-extrabold !leading-[116%] text-darkGray-1 md:text-5xl  xl:text-7xl">
                    Book With Us
                    <br />
                    And Enjoy your
                    <br />
                    Journey! testing the conflicts
                </h1>
            </div>
        </div>
    );
}
