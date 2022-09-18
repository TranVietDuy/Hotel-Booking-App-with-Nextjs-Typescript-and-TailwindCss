import React from "react";

interface ExploreProps {
    numberOfEntries: number;
}

function Explore(props: ExploreProps) {
    return (
        <section className="w-full">
            <div className="container mx-auto max-w-6xl">
                <h3 className="mb-3 text-left font-dmsans text-5xl font-bold text-darkGray-4 dark:text-white">
                    Explore the world
                </h3>
                <p className="text-left text-lg font-normal text-lightGray-1 dark:text-lightGray-3">
                    {props.numberOfEntries.toLocaleString()} beautiful places to
                    go
                </p>

                <div className="flex flex-row overflow-scroll">
                    <div className="max-w-[17rem]">1</div>
                </div>
            </div>
        </section>
    );
}

function ExporeCard() {
    return <div className="h-full w-full">Card</div>;
}

export default Explore;
