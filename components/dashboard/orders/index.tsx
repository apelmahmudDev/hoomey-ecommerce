import Orders from "./Orders";
import { useState } from "react";
import CreateOrder from "./CreateOrder";
import AbandonedCart from "./AbandonedCart";

// tabs constants
export const ORDER_TABS = {
	ROOT: "orders",
	ABANDONED_CART: "abandoned_cart",
	CREATE_ORDER: "create_order",
};

function OrderView() {
	const [tab, setTab] = useState("orders");

	const handleTabChange = (tab: string) => {
		setTab(tab);
	};

	return (
		<>
			{tab === ORDER_TABS.ROOT && <Orders handleTabChange={handleTabChange} />}
			{tab === ORDER_TABS.ABANDONED_CART && <AbandonedCart handleTabChange={handleTabChange} setTab={setTab} />}
			{tab === ORDER_TABS.CREATE_ORDER && <CreateOrder handleTabChange={handleTabChange} />}
		</>
	);
}

export default OrderView;
