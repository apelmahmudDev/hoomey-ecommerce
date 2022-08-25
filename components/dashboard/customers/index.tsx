import { useState } from "react";
import AddCustomer from "./AddCustomer";
import CustomerDetails from "./CustomerDetails";
import Customers from "./Customers";

// tabs constants
export const CUSTOMER_TABS = {
	ROOT: "customers",
	CUSTOMER_DETAILS: "customer_details",
	ADD_CUSTOMER: "add_customer",
};

function CustomerView() {
	const [tab, setTab] = useState<string>("customers");

	const handleTabChange = (tab: string) => {
		setTab(tab);
	};

	return (
		<>
			{tab === CUSTOMER_TABS.ROOT && <Customers handleTabChange={handleTabChange} />}
			{tab === CUSTOMER_TABS.CUSTOMER_DETAILS && (
				<CustomerDetails handleTabChange={handleTabChange} setTab={setTab} />
			)}
			{tab === CUSTOMER_TABS.ADD_CUSTOMER && <AddCustomer handleTabChange={handleTabChange} setTab={setTab} />}
		</>
	);
}

export default CustomerView;
