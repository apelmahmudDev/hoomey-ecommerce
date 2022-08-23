import Orders from "./Orders";
import { useState } from "react";
import CreateOrder from "./CreateOrder";
import AbandonedCart from "./AbandonedCart";
import OrderDetails from "./OrderDetails";
import AbandonedCartDetails from "./AbandonedCartDetails";

// tabs constants
export const ORDER_TABS = {
	ROOT: "orders",
	ABANDONED_CART: "abandoned_cart",
	CREATE_ORDER: "create_order",
	ORDER_DETAILS: "order_details",
	ABANDONED_CART_DETAILS: "abandoned_cart_details",
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
			{tab === ORDER_TABS.CREATE_ORDER && <CreateOrder handleTabChange={handleTabChange} setTab={setTab} />}
			{tab === ORDER_TABS.ORDER_DETAILS && <OrderDetails handleTabChange={handleTabChange} setTab={setTab} />}
			{tab === ORDER_TABS.ABANDONED_CART_DETAILS && <AbandonedCartDetails handleTabChange={handleTabChange} />}
		</>
	);
}

export default OrderView;
