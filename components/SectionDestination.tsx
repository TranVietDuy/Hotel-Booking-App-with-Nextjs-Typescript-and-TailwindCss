const SectionDestination = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center space-y-10">
                <h2 className="font-dmsans text-4xl font-bold text-darkGray-4">
                    Search a best place in the world
                </h2>
                <span className="font-dmsans text-base text-darkGray-1">
                    Whether you’re looking for places for a vacation. We are
                    here to Guide you about the details you need to check in and
                    ease your trips in advance
                </span>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-4 border-orange-800 md:grid-cols-2 lg:grid-cols-3"></div>
        </div>
    );
};

export default SectionDestination;
