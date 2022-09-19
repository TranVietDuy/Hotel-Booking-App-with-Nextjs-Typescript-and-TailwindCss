import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Tour {
    pic: StaticImageData;
    country: string;
    city: string;
    numberOfPlaces: number;
}

interface TopTourProps {
    data: Tour[];
}

function TopTour({ data }: TopTourProps) {
    return (
        <section className="w-full bg-lightGray-6 py-10 text-darkGray-4 dark:bg-darkGray-6 dark:text-white">
            <div className="container mx-auto max-w-6xl space-y-6 px-9 md:px-0">
                <h3 className="mb-3 text-center font-dmsans text-5xl font-bold dark:text-white md:text-left">
                    Top Tour
                </h3>
                <p className="text-center text-lg font-normal text-lightGray-1 dark:text-lightGray-3 md:text-left">
                    Keep calm &amp; Travel On
                </p>
                <div className="container mx-auto flex flex-col md:flex-row md:space-x-5">
                    {data.map((tour) => (
                        <div className="md:max-w-1/3 relative mt-5 h-[31rem] w-full md:w-1/3">
                            <Image
                                src={tour.pic}
                                width="370px"
                                height="495px"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="rounded-2xl"
                            ></Image>
                            <span className="absolute top-6 left-8 rounded-full bg-transparentDark px-5 py-2 text-xl font-medium text-white">
                                {tour.country}
                            </span>
                            <div className="absolute bottom-2 left-4 space-y-2 p-4 text-white">
                                <p className="text-2xl font-bold">
                                    {tour.city}
                                </p>
                                <p className="font-normal">{`${tour.numberOfPlaces} Popular Places`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopTour;
