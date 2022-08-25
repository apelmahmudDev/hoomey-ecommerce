import { Box, Grid } from "@mui/material";
import { CUSTOMER_TABS } from "..";
import { BackIconButton } from "../../../ui";
import { ITabChange } from "../../../../types/tab-change";
import CustomerOverview from "./CustomerOverview";
import Address from "./Address";
import Tags from "./Tags";
import TaxExemption from "./TaxExemption";
import Notes from "./Notes";

const AddCustomer = ({ handleTabChange }: ITabChange) => {
	return (
		<Box my={2.5}>
			<Box mb={3.5}>
				<BackIconButton onClick={() => handleTabChange(CUSTOMER_TABS.ROOT)}>Add Customer</BackIconButton>
			</Box>

			{/* others section */}

			<Box component="section">
				{/* Customer Overview */}
				<Box my={2.5} component="section">
					<CustomerOverview />
				</Box>

				{/* Address */}
				<Box my={2.5} component="section">
					<Address />
				</Box>

				{/*  Tax Exemption & Notes*/}
				<Box my={2.5} component="section">
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={6}>
							<TaxExemption />
						</Grid>
						<Grid item xs={12} md={6}>
							<Notes />
						</Grid>
					</Grid>
				</Box>

				{/* Tags */}
				<Box my={2.5} component="section">
					<Tags />
				</Box>
			</Box>
		</Box>
	);
};

export default AddCustomer;
