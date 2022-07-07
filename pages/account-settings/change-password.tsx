import type { NextPage } from "next";
import Head from "next/head";
import { ChangePassword } from "../../components/accountSettings";
import { AccountSettingsLayout, Layout } from "../../components/common";

const ChangePasswordView: NextPage = () => {
	return (
		<div>
			<Head>
				<title>account-setting / change-password</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<AccountSettingsLayout>
					<ChangePassword />
				</AccountSettingsLayout>
			</Layout>
		</div>
	);
};

export default ChangePasswordView;
