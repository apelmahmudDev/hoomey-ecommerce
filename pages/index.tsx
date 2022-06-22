import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/home/hero";
import ForMen from "../components/home/forMen";
import ForFemale from "../components/home/forFemale";
import ForKids from "../components/home/forKids";
import ProvideQuality from "../components/home/provideQuality";
import NewsLetter from "../components/home/newsLetter";
import Message from "../components/home/message";
import ManageCookies from "../components/home/manageCookies";
import Footer from "../components/home/footer";
import Collections from "../components/home/collections";
import LatestProducts from "../components/home/latestProducts";
import Navbar from "../components/common/navbar";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <nav>
				<Link href="/about">
					<a>About</a>
				</Link>
			</nav> */}

			<main>
				<Navbar />
				<Hero />
				<ForFemale />
				<ForMen />
				<ForKids />
				<LatestProducts />
				<ProvideQuality />
				<Collections />
				<NewsLetter />
				<Message />
				<Footer />
				<ManageCookies />
			</main>

			{/* <footer>
				<p>Footer</p>
			</footer> */}
		</div>
	);
};

export default Home;
