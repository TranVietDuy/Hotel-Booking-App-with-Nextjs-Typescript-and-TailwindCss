import { StaticImageData } from "next/image";
import React from "react";
import explore1 from "../img/temp/explore/explore1.png";
import explore2 from "../img/temp/explore/explore2.png";
import explore3 from "../img/temp/explore/explore3.png";
import explore4 from "../img/temp/explore/explore4.png";

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

const testData: ExploreCardData[] = [
    {
        pic: explore1,
        rating: 4.91,
        votes: 147,
        name: "Comfort Space",
        description: "1.2 km to Town Center",
        price: 210,
        location: { city: "Marmaris", country: "Turkey" },
        availableRooms: 375,
    },
    {
        pic: explore2,
        rating: 4.91,
        votes: 147,
        name: "Comfort Space",
        description: "1.2 km to Town Center",
        price: 210,
        location: { city: "Marmaris", country: "Turkey" },
        availableRooms: 375,
    },
    {
        pic: explore3,
        rating: 4.91,
        votes: 147,
        name: "Comfort Space",
        description: "1.2 km to Town Center",
        price: 210,
        location: { city: "Marmaris", country: "Turkey" },
        availableRooms: 375,
    },
    {
        pic: explore4,
        rating: 4.91,
        votes: 147,
        name: "Comfort Space",
        description: "1.2 km to Town Center",
        price: 210,
        location: { city: "Marmaris", country: "Turkey" },
        availableRooms: 375,
    },
];

function Explore({ numberOfEntries, exploreArr }: ExploreProps) {
    return (
        <section className="w-full">
            <div className="container mx-auto max-w-6xl">
                <h3 className="mb-3 text-left font-dmsans text-5xl font-bold text-darkGray-4 dark:text-white">
                    Explore the world
                </h3>
                <p className="text-left text-lg font-normal text-lightGray-1 dark:text-lightGray-3">
                    {numberOfEntries.toLocaleString()} beautiful places to go
                </p>

                <div className="flex flex-row overflow-scroll">
                    {exploreArr.map((cardData) => (
                        <div className="max-w-[17rem]">
                            <ExploreCard data={cardData} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExploreCard(data) {
    return <div className="h-full w-full">{data.name}</div>;
}

export default Explore;
