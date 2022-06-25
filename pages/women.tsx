import type { NextPage } from "next";
import Head from "next/head";

// men components
import Banner from "../components/women/banner";
import Collections from "../components/women/collections";

// common components
import Navbar from "../components/common/navbar";
import AppBreadcrumb from "../components/common/AppBreadcrumb";
import NewsLetter from "../components/common/newsLetter";
import Footer from "../components/common/footer";
import ManageCookies from "../components/common/manageCookies";
import Commitment from "../components/common/Commitment";

const Women: NextPage = () => {
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
				<AppBreadcrumb />
				<Banner />
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

export default Women;
