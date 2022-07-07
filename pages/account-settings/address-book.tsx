import type { NextPage } from "next";
import Head from "next/head";
import { AddressBook } from "../../components/accountSettings";
import { AccountSettingsLayout, Layout } from "../../components/common";

const AddressBookView: NextPage = () => {
	return (
		<div>
			<Head>
				<title>account-setting / address-book</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<AccountSettingsLayout>
					<AddressBook />
				</AccountSettingsLayout>
			</Layout>
		</div>
	);
};

export default AddressBookView;
