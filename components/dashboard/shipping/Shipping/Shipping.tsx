import { Box, Typography } from "@mui/material";
import React from "react";
import { SHIPPING_TABS } from "../../../../constants/tabs/shipping";
import { ITabChange } from "../../../../types/tab-change";
import { RoundButton } from "../../../styledComponents";
import ShippingTable from "./ShippingTable";

const Shipping = ({ handleTabChange }: ITabChange) => {
	return (
		<div>
			{/* top part of shipping */}
			<Box
				sx={{
					mb: 4,
					mt: 2,
					gap: 2.5,
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="h6" fontWeight={600}>
					Shipping
				</Typography>

				<RoundButton
					color="secondary"
					variant="contained"
					onClick={() => handleTabChange(SHIPPING_TABS.ADD_SHIPPING)}
				>
					Add New
				</RoundButton>
			</Box>

			{/* table section */}
			<Box my={2.5}>
				<ShippingTable />
			</Box>
		</div>
	);
};

export default Shipping;
