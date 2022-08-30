import { useState } from "react";
import { SHIPPING_TABS } from "../../../constants/tabs/shipping";
import AddShipping from "./AddShipping";
import Shipping from "./Shipping";

function ShppingView() {
	const [tab, setTab] = useState<string>(SHIPPING_TABS.ROOT);

	const handleTabChange = (tab: string) => {
		setTab(tab);
	};

	return (
		<>
			{tab === SHIPPING_TABS.ROOT && <Shipping handleTabChange={handleTabChange} />}
			{tab === SHIPPING_TABS.ADD_SHIPPING && <AddShipping handleTabChange={handleTabChange} />}
		</>
	);
}

export default ShppingView;
