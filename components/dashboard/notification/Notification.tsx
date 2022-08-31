import { Box, CardContent, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { RoundButton } from "../../styledComponents";
import { StyledCard, StyledFormControl } from "../components/styledComponents";
import SingleNotification from "./SingleNotification";

const Notification = () => {
	const [filter, setFilter] = useState("10");

	const handleFilter = (event: SelectChangeEvent) => {
		setFilter(event.target.value as string);
	};
	return (
		<div>
			<Typography sx={{ mb: 4, mt: 2 }} variant="h6" fontWeight={600}>
				Notifications & Recent Activity
			</Typography>

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
				<Box sx={{ minWidth: "135px", height: "45px" }}>
					<StyledFormControl fullWidth size="small">
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={filter}
							onChange={handleFilter}
						>
							<MenuItem value={10}>Registration</MenuItem>
							<MenuItem value={20}>Order Confirmed</MenuItem>
							<MenuItem value={30}>Abandoned Cart </MenuItem>
							<MenuItem value={40}>Review</MenuItem>
							<MenuItem value={50}>Out of Stock</MenuItem>
						</Select>
					</StyledFormControl>
				</Box>

				<RoundButton sx={{ backgroundColor: "#ECECEC", color: "black" }} variant="contained">
					Mark all as read
				</RoundButton>
			</Box>

			<Box my={2.5}>
				<StyledCard>
					<CardContent>
						<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
							Comments
						</Typography>
						<SingleNotification />
						<Divider variant="middle" />
						<SingleNotification />
						<Divider variant="middle" />
						<SingleNotification />
						<Divider variant="middle" />
						<SingleNotification />
						<Divider variant="middle" />
						<SingleNotification />
					</CardContent>
				</StyledCard>
			</Box>
		</div>
	);
};

export default Notification;
