import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../components/common";

// components
import {
	AlsoLikeProducts,
	ProductDetails,
	ProductView,
	RatingsAndReviews,
	RelatedProducts,
	FloatingAdvertise,
} from "../../components/product";

const Product: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<ProductView />
				<ProductDetails />
				<RatingsAndReviews />
				<RelatedProducts />
				<AlsoLikeProducts />
				<FloatingAdvertise />
			</Layout>
		</div>
	);
};

export default Product;
