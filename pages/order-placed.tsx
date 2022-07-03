import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/common";
import { OrderDetails, ThanksOrder } from "../components/orderPlaced";

const OrderPlaced: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<ThanksOrder />
				<OrderDetails />
			</Layout>
		</div>
	);
};

export default OrderPlaced;
