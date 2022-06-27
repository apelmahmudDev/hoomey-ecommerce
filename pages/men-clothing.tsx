import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Clothing } from "../components/menClothing";
import Layout from "../components/common/Layout";

const MenClothing: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Banner />
				<Clothing />
			</Layout>
		</div>
	);
};

export default MenClothing;
