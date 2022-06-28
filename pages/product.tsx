import type { NextPage } from "next";
import Head from "next/head";

// components
import {
	AlsoLikeProducts,
	ProductDetails,
	ProductView,
	RatingsAndReviews,
	RelatedProducts,
	FloatingAdvertise,
} from "../components/product";

// common components - layout
import Layout from "../components/common/Layout";

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
