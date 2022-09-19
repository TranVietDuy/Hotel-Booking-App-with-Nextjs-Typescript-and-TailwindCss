import * as React from "react";
import Image from "next/image";

import { StaticImageData } from "next/image";

interface FeaturedDestinationCard {
    tittle: string;
    picture: StaticImageData;
    rating: string;
    numberOfActivities: string;
    avatar: string;
}

interface FeaturedDestinationProps {
    data: FeaturedDestinationCard[];
}

export default function FeaturedDestination({
    data,
}: FeaturedDestinationProps) {
    return (
        <div className="mx-auto bg-lightGray-6 py-10 px-4 pt-11 sm:px-6 lg:px-12">
            {/* Headline */}
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className=" font-dmsans text-3xl font-bold leading-10 tracking-tight text-darkGray-4 sm:text-4xl ">
                    Featured Destinations
                </h2>

                <p className="mt-4 max-w-prose  font-dmsans text-base text-lightGray-1 ">
                    Popular destinations open to visitors from Indonesia
                </p>
            </div>
            {/* Featured Destination */}
            <div className="">
                <div className="grid gap-4 ">
                    {data.map((destination) => (
                        <div className="flex flex-col items-center justify-center">
                            <div className="relative h-80 w-full">
                                <Image
                                    src={destination.picture}
                                    layout="fill"
                                    className="rounded-lg "
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
