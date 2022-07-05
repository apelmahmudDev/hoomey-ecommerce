import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/common";
import { FavoritesProduct } from "../components/favorites";

const Favorites: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Favorites</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<FavoritesProduct />
			</Layout>
		</div>
	);
};

export default Favorites;
