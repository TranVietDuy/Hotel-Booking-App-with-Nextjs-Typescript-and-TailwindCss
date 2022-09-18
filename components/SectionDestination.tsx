import batu from "../img/temp/destinations/destination-1.jpg";
import kuta from "../img/temp/destinations/destination-2.jpg";
import surabaja from "../img/temp/destinations/destination-3.jpg";
import malang from "../img/temp/destinations/destination-4.jpg";
import doemg from "../img/temp/destinations/destination-5.jpg";
import nusa from "../img/temp/destinations/destination-6.jpg";
import bandung from "../img/temp/destinations/destination-7.jpg";
import watatobi from "../img/temp/destinations/destination-8.jpg";

const destinations = [
    { picture: batu, title: "Batu, East Java", numberOfDestinations: "86" },
    { picture: kuta, title: "Kuta", numberOfDestinations: "86" },
    {
        picture: surabaja,
        title: "Surabaja, East Java",
        numberOfDestinations: "86",
    },
    {
        picture: malang,
        title: "Malang, East Java",
        numberOfDestinations: "186",
    },
    { picture: doemg, 
        title: "Doemg", 
        numberOfDestinations: "186"
     },
    {
        picture: nusa,
        title: "Nusa, Central Java",
        numberOfDestinations: "86",
    },
    {
        picture: bandung,
        title: "Bandung, West Java",
        numberOfDestinations: "86",
    },
    {
        picture: watatobi,
        title: "Watatobi, Sumatera",
        numberOfDestinations: "86",
    },
];

export interface SectionDestinationProps {}

export default function SectionDestination(props: SectionDestinationProps) {
    return (
        <div className="mx-auto  bg-white py-12 px-4 sm:px-6 lg:px-8">
            {/* Headline */}
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <p className=" mt-2 font-dmsans text-3xl font-bold leading-10 tracking-tight text-darkGray-4 sm:text-4xl ">
                    Search a best place in the world
                </p>
                <p className="mt-4 max-w-prose   font-dmsans text-base text-lightGray-1 lg:mx-auto">
                    Whether you’re looking for places for a vacation. We are
                    here to Guide you/_next/image about the details you need to check in and
                    ease your trips in advance
                </p>
            </div>
            {/* Destination cards */}
            <div></div>
        </div>
    );
}


