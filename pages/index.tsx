import type { NextPage } from "next";
import Head from "next/head";

import Commitment from "../components/common/Commitment";
import Footer from "../components/common/footer";
import NewsLetter from "../components/common/newsLetter";
import { Hero, ForFemale, ForMen, ForKids, LatestProducts, ProvideQuality, Collections } from "../components/home";
import { Navbar } from "../components/common";

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
