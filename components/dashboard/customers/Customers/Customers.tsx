import { Typography, Box } from "@mui/material";
import { CUSTOMER_TABS } from "..";
import React from "react";
import CustomersTable from "./CustomersTable";
import { RoundButton } from "../../../styledComponents";
import { ITabChange } from "../../../../types/tab-change";

const Customers = ({ handleTabChange }: ITabChange) => {
	return (
		<div>
			{/* top part of orders */}
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
					Customers
				</Typography>

				<RoundButton
					onClick={() => handleTabChange(CUSTOMER_TABS.ADD_CUSTOMER)}
					color="secondary"
					variant="contained"
				>
					Add Customer
				</RoundButton>
			</Box>

			{/* table section */}
			<Box my={2.5}>
				<CustomersTable handleTabChange={handleTabChange} />
			</Box>
		</div>
	);
};

export default Customers;
