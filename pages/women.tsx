import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/common";
import { Banner, Collections } from "../components/women";

const Women: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Banner />
				<Collections />
			</Layout>
		</div>
	);
};

export default Women;
