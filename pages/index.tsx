import type { NextPage } from "next";
import useModal from "../hooks/useModal";
import Head from "next/head";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionDestination from "../components/SectionDestination";
import Trending from "../components/Trending";
import Explore from "../components/Explore";
import { testData } from "../tempData/explore";
import { topTours } from "../tempData/top-tour";
import { featuredDestinations } from "../tempData/featured-destinations";
import { destinations } from "../tempData/section-destination";
import FeaturedDestination from "../components/FeaturedDestination";
import TopTour from "../components/TopTour";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pun Hotel Booking App</title>
            </Head>
            <Hero />
            <SectionDestination data={destinations} />
            <FeaturedDestination data={featuredDestinations} />
            <TopTour data={topTours} />
            <Explore numberOfEntries={10788} exploreCards={testData} />
            <Trending />
            <Cta />
        </>
    );
};

export default Home;
