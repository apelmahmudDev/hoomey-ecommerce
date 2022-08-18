import { CardContent, Typography, Stack, Box, Grid, Button } from "@mui/material";

import { CartText, RoundButton } from "../../styledComponents";
import { ArrowDownIcon, ArrowUpIcon, BarIndecatorIcon, NoteIcon, PeopleIcon } from "../components/icons";
import { StyledCard } from "../components/styledComponents";

const historyItems = [
	{
		largeIcon: <PeopleIcon fontSize="large" />,
		samallIcon: <ArrowUpIcon />,
		title: 245,
		dec: "New Orders",
		subtitle: "+20% Inc",
		color: "#04AF00",
	},
	{
		largeIcon: <NoteIcon fontSize="large" />,
		samallIcon: <ArrowDownIcon />,
		title: 123,
		dec: "Pending Orders",
		subtitle: "-20% Dec",
		color: "#FF0303",
	},
	{
		largeIcon: <BarIndecatorIcon fontSize="large" />,
		samallIcon: <ArrowUpIcon />,
		title: 153,
		dec: "Delivered Orders",
		subtitle: "-20% Inc",
		color: "#04AF00",
	},
];

const Orders = () => {
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
					Orders
				</Typography>

				<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
					<RoundButton variant="contained">Abandoned Cart</RoundButton>
					<RoundButton variant="contained" color="secondary">
						Create Order
					</RoundButton>
				</Box>
			</Box>

			{/* dashboar top history */}

			<Grid container spacing={2.5}>
				{historyItems.map((item, idx) => (
					<Grid key={idx} item xs={12} sm={6} md={4}>
						<StyledCard sx={{ px: 3 }}>
							<CardContent>
								<Stack direction="row" alignItems="center" spacing={1}>
									<Stack sx={{ flexGrow: 1 }} spacing={1}>
										<Typography variant="h6" sx={{ opacity: 0.7, letterSpacing: "-0.25924px" }}>
											{item.dec}
										</Typography>
										<Typography variant="h3" fontWeight="bold">
											{item.title}
										</Typography>
									</Stack>
									<Stack alignItems="center" spacing={1}>
										{item.samallIcon}
										<CartText color={item.color}>{item.subtitle}</CartText>
									</Stack>
								</Stack>
							</CardContent>
						</StyledCard>
					</Grid>
				))}
			</Grid>

			<Box my={3.8}>
				{/* Earning Revenue, Top Sales & Users table */}
				<Box my={3.5} component="section">
					<Grid container spacing={2.5}>
						{/* Earning Revenue */}
						<Grid item xs={12} lg={6} />

						{/* Top Sales */}
						<Grid item xs={12} lg={3} />
					</Grid>
				</Box>

				{/* orders & top sellings products => Twice table*/}
				<Box my={3.5} component="section">
					<Grid container spacing={2.5}>
						{/* <Grid item xs={12} lg={6}></Grid>
						<Grid item xs={12} lg={6}></Grid> */}
					</Grid>
				</Box>
			</Box>
		</div>
	);
};

export default Orders;
