import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/common/Layout";
import { Orders } from "../components/myOrders";

const MyOrders: NextPage = () => {
	return (
		<div>
			<Head>
				<title>My Orders</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Orders />
			</Layout>
		</div>
	);
};

export default MyOrders;
