import { useState } from "react";
import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";
import Categories from "./Categories";
import Products from "./Products";

// tabs constants
export const PRODUCTS_TABS = {
	ROOT: "products",
	ADD_PRODUCT: "add_product",
	CATEGORIES: "categories",
	ADD_CATEGORY: "add_category",
};

function ReviewView() {
	const [tab, setTab] = useState("products");

	const handleTabChange = (tab: string) => {
		setTab(tab);
	};

	return (
		<>
			{tab === PRODUCTS_TABS.ROOT && <Products handleTabChange={handleTabChange} />}
			{tab === PRODUCTS_TABS.CATEGORIES && <Categories handleTabChange={handleTabChange} setTab={setTab} />}
			{tab === PRODUCTS_TABS.ADD_CATEGORY && <AddCategory handleTabChange={handleTabChange} setTab={setTab} />}
			{tab === PRODUCTS_TABS.ADD_PRODUCT && <AddProduct handleTabChange={handleTabChange} setTab={setTab} />}
		</>
	);
}

export default ReviewView;
