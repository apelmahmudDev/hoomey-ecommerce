import type { NextPage } from "next";
import Head from "next/head";
import { CombineCheckout } from "../components/checkout";
import { Layout } from "../components/common";

const Checkout: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<CombineCheckout />
			</Layout>
		</div>
	);
};

export default Checkout;
