import * as React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { nanoid } from "nanoid";

interface FeaturedDestinationCard {
    title: string;
    picture: StaticImageData;
    rating: string;
    numberOfActivities: string;
    avatar: StaticImageData;
}

interface FeaturedDestinationProps {
    data: FeaturedDestinationCard[];
}

export default function FeaturedDestination({
    data,
}: FeaturedDestinationProps) {
    return (
        <section className="w-full bg-lightGray-6 dark:bg-darkGray-5">
            <div className="mx-auto py-10 px-4 pt-11 sm:px-6 lg:px-12">
                {/* Headline */}
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="font-dmsans text-3xl font-bold leading-10 tracking-tight text-darkGray-4 sm:text-4xl ">
                        Featured Destinations
                    </h2>

                    <p className="mt-4 max-w-prose font-dmsans text-base text-lightGray-1 ">
                        Popular destinations open to visitors from Indonesia
                    </p>
                </div>
                {/* Featured Destination */}
                <div>
                    <div className="gallery grid space-y-3 md:gap-6 md:space-y-0">
                        {data.map((destination, index) => {
                            return (
                                <div
                                    key={nanoid()}
                                    className={`destination-grid${index}`}
                                >
                                    <DestinationCard
                                        title={destination.title}
                                        picture={destination.picture}
                                        rating={destination.rating}
                                        numberOfActivities={
                                            destination.numberOfActivities
                                        }
                                        avatar={destination.avatar}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function DestinationCard(data: FeaturedDestinationCard) {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="relative h-full w-full">
                <Image
                    src={data.picture}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="h-full w-full rounded-lg"
                />
                <span className="absolute left-6 top-4 rounded-full bg-white py-0 px-4 text-lg font-bold text-redPrimary dark:bg-white/50">
                    {data.rating}
                </span>

                <div className="absolute left-6 bottom-4 space-y-6">
                    <h5 className="text-5xl font-bold text-white">{`${data.title}`}</h5>
                    <p className=" flex flex-row items-center space-x-3 text-xl text-white">
                        <Image
                            className="inline-block rounded-full"
                            src={data.avatar}
                            width="43px"
                            height="43px"
                            objectFit="cover"
                            objectPosition="center"
                            alt="avatar"
                        />
                        <span>{` ${data.numberOfActivities} Activities`}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
