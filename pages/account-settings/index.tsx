import type { NextPage } from "next";
import Head from "next/head";
import { MyAccount } from "../../components/accountSettings";
import { AccountSettingsLayout, Layout } from "../../components/common";

const AccountSettings: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Account Settings</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<AccountSettingsLayout>
					<MyAccount />
				</AccountSettingsLayout>
			</Layout>
		</div>
	);
};

export default AccountSettings;
