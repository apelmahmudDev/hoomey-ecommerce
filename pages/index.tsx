import type { NextPage } from "next";
import Head from "next/head";
import { Commitment, Footer, Navbar, NewsLetter } from "../components/common";
import { Hero, ForFemale, ForMen, ForKids, LatestProducts, ProvideQuality, Collections } from "../components/home";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav>
				<Navbar />
			</nav>

			<main>
				<Hero />
				<ForFemale />
				<ForMen />
				<ForKids />
				<LatestProducts />
				<ProvideQuality />
				<Collections />
				<NewsLetter />
				<Commitment />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
