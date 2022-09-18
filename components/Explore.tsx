import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaHotel } from "react-icons/fa";

interface ExploreProps {
    numberOfEntries: number;
    exploreCards: ExploreCardData[];
}

interface ExploreCardData {
    pic: StaticImageData;
    rating: number;
    votes: number;
    name: string;
    description: string;
    price: number;
    location: {
        city: string;
        country: string;
    };
    availableRooms: number;
}

function Explore({ numberOfEntries, exploreCards }: ExploreProps) {
    return (
        <section className="w-full bg-lightGray-7 py-10 text-darkGray-4 dark:bg-darkGray-6 dark:text-white">
            <div className="container mx-auto max-w-6xl space-y-6">
                <h3 className="mb-3 text-center font-dmsans text-5xl font-bold dark:text-white md:text-left">
                    Explore the world
                </h3>
                <p className="text-center text-lg font-normal text-lightGray-1 dark:text-lightGray-3 md:text-left">
                    {numberOfEntries.toLocaleString()} beautiful places to go
                </p>

                <div className="flex flex-row space-x-7 overflow-x-scroll md:justify-between md:space-x-0">
                    {exploreCards.map((cardData) => (
                        <div className="w-[17rem]">
                            <ExploreCard
                                pic={cardData.pic}
                                rating={cardData.rating}
                                votes={cardData.votes}
                                name={cardData.name}
                                description={cardData.description}
                                price={cardData.price}
                                location={cardData.location}
                                availableRooms={cardData.availableRooms}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExploreCard({
    pic,
    rating,
    votes,
    name,
    description,
    price,
    location,
    availableRooms,
}: ExploreCardData) {
    return (
        <div className="w-full rounded-2xl bg-white p-4 pb-6 text-darkGray-6 dark:bg-darkGray-4 dark:text-lightGray-3">
            <div className="space-y-2">
                <div className="rounded-2xl">
                    <Image
                        src={pic}
                        layout="fixed"
                        width="240px"
                        height={"150px"}
                    ></Image>
                </div>

                <div className="my-2">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 11.9532L3.43074 13.9147C2.91697 14.1971 2.31846 13.7374 2.4171 13.1362L3.09765 8.98853L0.213886 6.0502C-0.203981 5.62442 0.0251203 4.87905 0.600728 4.79162L4.59003 4.18568L6.37322 0.408861C6.6306 -0.136287 7.3694 -0.136287 7.62678 0.408861L9.40997 4.18568L13.3993 4.79162C13.9749 4.87905 14.204 5.62442 13.7861 6.0502L10.9023 8.98853L11.5829 13.1362C11.6815 13.7374 11.083 14.1971 10.5693 13.9147L7 11.9532Z"
                            fill="#FFD166"
                        />
                    </svg>
                    <span className="font-dmsans text-sm text-darkGray-1 dark:text-lightGray-4">{` ${rating}`}</span>
                    <span className="font-dmsans text-sm text-lightGray-1 dark:text-lightGray-2">{` (${votes})`}</span>
                </div>
                <div className="relative">
                    <h4 className="text-lg font-medium dark:text-lightGray-5">
                        {name}
                    </h4>
                    <span className="absolute right-0 top-0 inline-block rounded-lg bg-blueMain px-3 py-1 font-bold text-white dark:bg-blueTransparent dark:text-lightGray-5">{`$${price}`}</span>
                </div>
                <p className="text-sm font-medium text-lightGray-1">
                    {description}
                </p>
                <p className="flex-start flex flex-row items-center space-x-1">
                    <HiOutlineLocationMarker color="#B1B5C4" />
                    <span className="text-sm text-lightGray-1 dark:text-lightGray-2">{`${location.country}, ${location.city}`}</span>
                </p>
                <p className="flex-start flex flex-row items-center space-x-1">
                    <FaHotel color="#B1B5C4" />
                    <span className="text-sm text-lightGray-1 dark:text-lightGray-2">{`Rooms available: ${availableRooms}`}</span>
                </p>
            </div>
        </div>
    );
}

export default Explore;
