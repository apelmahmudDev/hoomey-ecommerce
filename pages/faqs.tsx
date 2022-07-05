import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/common/Layout";
import { Banner, SearchFaqs } from "../components/faqs";

const FAQs: NextPage = () => {
	return (
		<div>
			<Head>
				<title>faqs</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Banner />
				<SearchFaqs />
			</Layout>
		</div>
	);
};

export default FAQs;
