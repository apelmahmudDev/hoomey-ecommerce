import type { NextPage } from "next";
import Head from "next/head";
import { PaymentMethods } from "../../components/accountSettings";
import { AccountSettingsLayout, Layout } from "../../components/common";

const PaymentMethodsView: NextPage = () => {
	return (
		<div>
			<Head>
				<title>account-setting / payment-methods</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<AccountSettingsLayout>
					<PaymentMethods />
				</AccountSettingsLayout>
			</Layout>
		</div>
	);
};

export default PaymentMethodsView;
