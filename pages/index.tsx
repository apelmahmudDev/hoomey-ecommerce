import type { NextPage } from "next";
import Head from "next/head";

import { Hero, ForFemale, ForMen, ForKids, LatestProducts, ProvideQuality, Collections } from "../components/home";
import { Commitment, Footer, Navbar, NewsLetter } from "../components/common";
import { SignUp } from "../components/common/AuthPopup";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome Hoomey</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav>
				<Navbar />
			</nav>
			{/* <Toastify severity="info" /> - kept here for testing purpose */}
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
			{/* popup & others section area*/}
			{/* <NewsLetterPopup /> */}
			{/* <RatingPopup /> */}
			<SignUp />
			{/* <SignIn /> */}
			{/* <PasswordChange /> */}
			{/* <ForgetPassword /> */}
			{/* <FilterDropdwon /> */}
			{/* <PaymentPopup /> */}
			{/* <CTAPopup /> */}
			{/* <AbondonCart /> */}
			{/* <SizeChart /> */}
		</div>
	);
};

export default Home;
