import type { NextPage } from "next";
import Head from "next/head";
import { MyOrders } from "../../components/accountSettings";
import { AccountSettingsLayout, Layout } from "../../components/common";

const MyOrdersView: NextPage = () => {
	return (
		<div>
			<Head>
				<title>account-setting / my-orders</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<AccountSettingsLayout>
					<MyOrders />
				</AccountSettingsLayout>
			</Layout>
		</div>
	);
};

export default MyOrdersView;
