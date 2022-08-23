import { ORDER_TABS } from "..";
import { BackIconButton } from "../../../ui";
import { Box, Typography, Grid } from "@mui/material";
import { ITabChange } from "../../../../types/tab-change";
import { StatusText } from "../../components/styledComponents";
import EmailSent from "./EmailSent";
import Checkout from "./Checkout";
import Customer from "./Customer";
import Additional from "./Additional";

const AbandonedCartDetails = ({ handleTabChange }: ITabChange) => {
	return (
		<Box my={2.5}>
			{/* back to order tab */}
			<Box mb={3.5}>
				<BackIconButton onClick={() => handleTabChange(ORDER_TABS.ROOT)}>Abondoned Cart</BackIconButton>
			</Box>

			<Box component="section">
				<Box
					sx={{
						mb: 1.5,
						display: "flex",
						gap: 2.5,
						alignItems: "center",
						justifyContent: "space-between",
						flexWrap: "wrap",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
						<Typography fontWeight="medium">Order Number</Typography>
						<Typography fontWeight="medium">12345</Typography>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
						<Typography fontWeight="medium">Recovery Status</Typography>
						<StatusText fs={18} status="Delivered">
							Recovered
						</StatusText>
					</Box>
				</Box>

				{/*  sent email, checkout details, customer & additinal details */}
				<Box component="section">
					<Box mb={2.5}>
						<EmailSent />
					</Box>

					<Grid container spacing={2.5}>
						<Grid item xs={12} md={7}>
							<Checkout />
						</Grid>
						<Grid item xs={12} md={5}>
							<Customer />
						</Grid>
					</Grid>
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={7}>
							<Additional />
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default AbandonedCartDetails;
