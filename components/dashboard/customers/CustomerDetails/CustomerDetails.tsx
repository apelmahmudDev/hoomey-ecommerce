import { Box, Grid } from "@mui/material";
import { CUSTOMER_TABS } from "..";
import { BackIconButton } from "../../../ui";
import { ITabChange } from "../../../../types/tab-change";
import Notes from "./Notes";
import Address from "./Address";
import Timeline from "./Timeline";
import ExtraForm from "./ExtraForm";
import LastOrder from "./LastOrder";
import UserProfile from "./UserProfile";
import { OrangeButton } from "../../components/styledComponents";

const CustomerDetails = ({ handleTabChange }: ITabChange) => {
	return (
		<Box my={2.5}>
			<Box mb={3.5} display="flex" alignItems="center" justifyContent="space-between">
				<BackIconButton onClick={() => handleTabChange(CUSTOMER_TABS.ROOT)}>Customer Details</BackIconButton>
				<OrangeButton>Delete Customer</OrangeButton>
			</Box>

			{/* ---------other section ---------*/}

			{/* user profile & notes */}

			<Box my={2.5} component="section">
				<Grid container spacing={2.5}>
					<Grid item xs={12} md={7}>
						<UserProfile />
					</Grid>
					<Grid item xs={12} md={5}>
						<Notes />
					</Grid>
				</Grid>
			</Box>

			{/* last order & address */}

			<Box my={2.5} component="section">
				<Grid container spacing={2.5}>
					<Grid item xs={12} md={7}>
						<LastOrder />
					</Grid>
					<Grid item xs={12} md={5}>
						<Address />
					</Grid>
				</Grid>
			</Box>

			{/* timeline & (tax exemption, marketing status, tags) */}

			<Box my={2.5} component="section">
				<Grid container spacing={2.5}>
					<Grid item xs={12} md={7}>
						<Timeline />
					</Grid>
					<Grid item xs={12} md={5}>
						<ExtraForm />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default CustomerDetails;
