import type { NextPage } from "next"
import Head from "next/head"
import Cta from "../components/Cta"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Trending from "../components/Trending"


const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pun Hotel Booking App</title>
			</Head>
			<Header />
			<Hero />
<<<<<<< HEAD

=======
			<Trending />
>>>>>>> 75fb4d8c845b5f1cb6e884c30f9f447da69cb0e4
			<Cta />
			<Footer />
		</>
	)
}

export default Home
