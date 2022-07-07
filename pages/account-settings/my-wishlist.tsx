import type { NextPage } from "next";
import Head from "next/head";
import { MyWishlist } from "../../components/accountSettings";
import { AccountSettingsLayout, Layout } from "../../components/common";

const MyWishlistView: NextPage = () => {
	return (
		<div>
			<Head>
				<title>account-setting / my-wishlist</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<AccountSettingsLayout>
					<MyWishlist />
				</AccountSettingsLayout>
			</Layout>
		</div>
	);
};

export default MyWishlistView;
