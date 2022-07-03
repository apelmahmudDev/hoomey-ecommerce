import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/common";
import Contact from "../components/contactUs";

const ContactUs: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Contact />
			</Layout>
		</div>
	);
};

export default ContactUs;
