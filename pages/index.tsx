import type { NextPage } from "next";
import Head from "next/head";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionDestination from "../components/SectionDestination";
import Trending from "../components/Trending";
import Explore from "../components/Explore";
import { testData } from "../tempData/explore";
import FeaturedDestination from "../components/FeaturedDestination";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pun Hotel Booking App</title>
            </Head>
            <Header />
            <Hero />
            <SectionDestination />
            <FeaturedDestination />
            <Explore numberOfEntries={10788} exploreCards={testData} />
            <Trending />
            <Cta />
            <Footer />
        </>
    );
};

export default Home;
