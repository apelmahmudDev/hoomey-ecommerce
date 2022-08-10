import type { NextPage } from "next";
import Head from "next/head";

import { Hero, ForFemale, ForMen, ForKids, LatestProducts, ProvideQuality, Collections } from "../components/home";
import { Commitment, Footer, Navbar, NewsLetter } from "../components/common";
import { Box } from "@mui/material";
import {
	// OfferEmail,
	PurchasedEmail,
} from "../components/emailTemplate";

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
			{/* <SignUp /> */}
			{/* <SignIn /> */}
			{/* <PasswordChange /> */}
			{/* <AbondonCart /> */}

			{/* email-template */}
			<Box my={5}>
				{/* <AdminEmail /> */}
				{/* <NewsletterEmail /> */}
				{/* <UserAdminEmail /> */}
				{/* <NewUserEmail /> */}
				{/* <OrderPlacedEmail /> */}
				{/* <AbondonCartEmail /> */}
				{/* <OfferEmail /> */}
				<PurchasedEmail />
			</Box>
		</div>
	);
};

export default Home;
