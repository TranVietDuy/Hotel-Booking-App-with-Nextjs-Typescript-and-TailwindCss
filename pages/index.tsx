import type { NextPage } from "next";
import Head from "next/head";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Explore from "../components/Explore";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pun Hotel Booking App</title>
            </Head>
            <Header />
            <Hero />
            <Explore numberOfEntries={10788} />
            <Trending />
            <Cta />
            <Footer />
        </>
    );
};

export default Home;
