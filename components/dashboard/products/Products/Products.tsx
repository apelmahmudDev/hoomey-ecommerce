import { Box, Typography } from "@mui/material";
import { PRODUCTS_TABS } from "..";
import { ITabChange } from "../../../../types/tab-change";

import { RoundButton } from "../../../styledComponents";
import ProductsTable from "./ProductsTable";

const Products = ({ handleTabChange }: ITabChange) => {
	return (
		<div>
			<Box
				sx={{
					mb: 4,
					mt: 2,
					display: "flex",
					alignItems: "center",
					gap: 2.5,
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<Typography variant="h6" fontWeight={600}>
					Products
				</Typography>

				<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
					<RoundButton variant="contained" onClick={() => handleTabChange(PRODUCTS_TABS.CATEGORIES)}>
						Categories
					</RoundButton>
					<RoundButton
						variant="contained"
						color="secondary"
						onClick={() => handleTabChange(PRODUCTS_TABS.ADD_PRODUCT)}
					>
						Add Product
					</RoundButton>
				</Box>
			</Box>

			{/* table section */}
			<Box my={2.5}>
				<ProductsTable />
			</Box>
		</div>
	);
};
export default Products;
