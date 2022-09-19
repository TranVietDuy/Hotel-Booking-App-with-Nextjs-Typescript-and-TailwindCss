import Image, { StaticImageData } from "next/image";

interface SectionDestinationProps {
    data: SectionDestinationCard[];
}

interface SectionDestinationCard {
    picture: StaticImageData;
    title: string;
    numberOfDestinations: string;
}

export default function SectionDestination({ data }: SectionDestinationProps) {
    return (
        <div className="mx-auto bg-lightGray-6 px-4 pt-32 sm:px-6 lg:px-8">
            {/* Headline */}

            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <p className=" mt-2 font-dmsans text-3xl font-bold leading-10 tracking-tight text-darkGray-4 sm:text-4xl ">
                    Search a best place in the world
                </p>
                <p className="mt-4 max-w-prose  font-dmsans text-base text-lightGray-1 lg:mx-auto">
                    Whether you’re looking for places for a vacation. We are
                    here to Guide you about the details you need to check in and
                    ease your trips in advance
                </p>
            </div>

            {/* Destination cards */}

            <div className=" md:m-30 my-10 grid snap-x grid-flow-col gap-4 overflow-scroll px-4 py-6 sm:mx-40 sm:grid-flow-dense sm:grid-cols-2 sm:gap-8 md:mx-10 md:grid-cols-3 lg:grid-cols-4 ">
                {data.map((destination) => (
                    <div
                        key={destination.title}
                        className="w-64 cursor-pointer snap-center rounded-xl border-[1.3px] border-slate-200 p-5 transition-transform duration-200 ease-out hover:scale-105 hover:bg-white  hover:shadow-lg sm:w-auto"
                    >
                        <div className="relative h-16 w-16 ">
                            <Image
                                src={destination.picture}
                                alt=""
                                layout="fill"
                                className="rounded-lg "
                            />
                        </div>
                        <div className="  ">
                            <h3 className="mt-5 text-lg font-medium text-darkGray-4">
                                {destination.title}
                            </h3>
                            <p className="mt-2 text-sm text-lightGray-1">
                                {destination.numberOfDestinations} destinations
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
