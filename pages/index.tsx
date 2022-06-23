import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/home/hero";
import ForMen from "../components/home/forMen";
import ForFemale from "../components/home/forFemale";
import ForKids from "../components/home/forKids";
import ProvideQuality from "../components/home/provideQuality";
import Collections from "../components/home/collections";
import LatestProducts from "../components/home/latestProducts";

// commons
import Navbar from "../components/common/navbar";
import NewsLetter from "../components/common/newsLetter";
import Footer from "../components/common/footer";
import ManageCookies from "../components/common/manageCookies";
import Commitment from "../components/common/Commitment";

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
				<ManageCookies />
			</footer>
		</div>
	);
};

export default Home;
